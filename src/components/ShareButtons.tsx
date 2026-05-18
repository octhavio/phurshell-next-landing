'use client'

import { useState } from 'react'

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phurshell.com'
  const postUrl = `${baseUrl}/insights/${slug}`
  const encodedUrl = encodeURIComponent(postUrl)
  const encodedTitle = encodeURIComponent(title)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(postUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/feed/?shareActive=true&text=${encodedTitle}%20${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    medium: `https://medium.com/`,
    reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
  }

  return (
    <div>
      <h3 className="mb-4 text-lg font-black text-dark">Compartilhar este post</h3>
      <div className="flex flex-wrap gap-3">
        <a href={shareLinks.x} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-button border border-dark/10 bg-white px-4 py-3 font-bold text-dark transition-colors hover:border-dark hover:text-dark">
          <i className="fa-brands fa-x-twitter"></i>Twitter
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-button border border-dark/10 bg-white px-4 py-3 font-bold text-dark transition-colors hover:border-dark hover:text-dark">
          <i className="fa-brands fa-linkedin"></i>LinkedIn
        </a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-button border border-dark/10 bg-white px-4 py-3 font-bold text-dark transition-colors hover:border-dark hover:text-dark">
          <i className="fa-brands fa-whatsapp"></i>WhatsApp
        </a>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-button border border-dark/10 bg-white px-4 py-3 font-bold text-dark transition-colors hover:border-dark hover:text-dark">
          <i className="fa-brands fa-facebook"></i>Facebook
        </a>
        <a href={shareLinks.medium} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-button border border-dark/10 bg-white px-4 py-3 font-bold text-dark transition-colors hover:border-dark hover:text-dark">
          <i className="fa-brands fa-medium"></i>Medium
        </a>
        <a href={shareLinks.reddit} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-button border border-dark/10 bg-white px-4 py-3 font-bold text-dark transition-colors hover:border-dark hover:text-dark">
          <i className="fa-brands fa-reddit"></i>Reddit
        </a>
        <button onClick={handleCopy}
          className="flex items-center gap-3 rounded-button border border-dark/10 bg-white px-4 py-3 font-bold text-dark transition-colors hover:border-dark hover:text-dark">
          <i className={copied ? 'fa-solid fa-check text-green-500' : 'fa-solid fa-link'}></i>
          {copied ? 'Copiado!' : 'Copiar link'}
        </button>
      </div>
    </div>
  )
}
