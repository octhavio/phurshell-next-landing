import { readdir, readFile, writeFile } from 'fs/promises'
import { join, extname } from 'path'

const SRC_DIR = new URL('../', import.meta.url).pathname
const EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx', '.css', '.html']

// Image extensions to replace
const IMG_EXTS = ['.png', '.jpg', '.jpeg']

async function findFiles(dir, skip = ['node_modules', '.next', '.git', 'scripts', 'public']) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (skip.includes(entry.name)) continue
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await findFiles(fullPath, skip))
    } else if (EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
      files.push(fullPath)
    }
  }
  return files
}

const files = await findFiles(SRC_DIR)
let totalChanged = 0

for (const file of files) {
  let content = await readFile(file, 'utf-8')
  let changed = false

  for (const ext of IMG_EXTS) {
    // Match image paths in src= or url() or similar, replace extension with .webp
    // Only replace paths that point to /images/ or /public/ or relative image paths
    const regex = new RegExp(`(["'\`(][^"'\`()]*?)\\${ext}(["'\`)])`, 'g')
    const newContent = content.replace(regex, (match, before, after) => {
      changed = true
      return `${before}.webp${after}`
    })
    content = newContent
  }

  if (changed) {
    await writeFile(file, content, 'utf-8')
    console.log(`  Updated: ${file.replace(SRC_DIR, '')}`)
    totalChanged++
  }
}

console.log(`\nDone! Updated ${totalChanged} files.`)
