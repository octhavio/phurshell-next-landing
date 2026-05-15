import { readdir, stat } from 'fs/promises'
import { join, extname, basename, dirname } from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

// Install sharp if not available
let sharp
try {
  sharp = require('sharp')
} catch {
  console.log('Installing sharp...')
  const { execSync } = require('child_process')
  execSync('npm install sharp --save-dev', { stdio: 'inherit' })
  sharp = require('sharp')
}

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname
const EXTENSIONS = ['.png', '.jpg', '.jpeg']

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await findImages(fullPath))
    } else if (EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
      files.push(fullPath)
    }
  }
  return files
}

async function convert(filePath) {
  const ext = extname(filePath).toLowerCase()
  const webpPath = filePath.replace(new RegExp(`\\${ext}$`), '.webp')

  try {
    const stats = await stat(webpPath).catch(() => null)
    if (stats) {
      // already exists
      return { path: filePath, skipped: true }
    }

    await sharp(filePath)
      .webp({ quality: 82, effort: 4 })
      .toFile(webpPath)

    const original = (await stat(filePath)).size
    const converted = (await stat(webpPath)).size
    const saving = Math.round((1 - converted / original) * 100)
    return { path: filePath, saving, skipped: false }
  } catch (err) {
    return { path: filePath, error: err.message }
  }
}

const images = await findImages(PUBLIC_DIR)
console.log(`Found ${images.length} images to convert...`)

let converted = 0, skipped = 0, errors = 0, totalSaving = 0

for (const img of images) {
  const result = await convert(img)
  if (result.skipped) {
    skipped++
  } else if (result.error) {
    errors++
    console.error(`  ERROR: ${img.replace(PUBLIC_DIR, '')} — ${result.error}`)
  } else {
    converted++
    totalSaving += result.saving || 0
    console.log(`  ✓ ${img.replace(PUBLIC_DIR, '')} (${result.saving}% smaller)`)
  }
}

console.log(`\nDone! Converted: ${converted} | Skipped: ${skipped} | Errors: ${errors}`)
if (converted > 0) console.log(`Average size reduction: ${Math.round(totalSaving / converted)}%`)
