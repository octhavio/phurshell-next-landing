import TransitionLink from './TransitionLink'
import { SERVICE_READING } from '../data/service-reading'

export default function LeiaTambem({ servico }: { servico: string }) {
  const posts = SERVICE_READING[servico]
  if (!posts) return null

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
        <h2 className="mb-6 text-4xl font-black text-dark sm:text-5xl">Leia também</h2>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <TransitionLink
                href={`/insights/${post.slug}/`}
                className="group inline-flex items-start gap-3 text-xl font-bold text-dark transition-colors hover:text-brand-orange"
              >
                <i className="fa-solid fa-arrow-right mt-1.5 text-brand-orange transition-transform group-hover:translate-x-1"></i>
                {post.title}
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
