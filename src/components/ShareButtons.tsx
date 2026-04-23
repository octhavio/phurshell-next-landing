interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phurshell.com'
  const postUrl = `${baseUrl}/insights/${slug}`
  const encodedUrl = encodeURIComponent(postUrl)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/feed/?shareActive=true&text=${encodedTitle}%20${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  }

  return (
    <div className="rounded-button border border-dark/10 bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-lg font-black text-dark">Compartilhar</h3>
      <div className="flex flex-col gap-3">
        <a
          href={shareLinks.x}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-button bg-black/10 px-4 py-3 font-bold text-black transition-colors hover:bg-black hover:text-white"
        >
          <i className="fa-brands fa-x-twitter"></i>
          X
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-button bg-[#0A66C2]/10 px-4 py-3 font-bold text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white"
        >
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-button bg-[#25D366]/10 px-4 py-3 font-bold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
        >
          <i className="fa-brands fa-whatsapp"></i>
          WhatsApp
        </a>
      </div>
    </div>
  )
}
