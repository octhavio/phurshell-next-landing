import { Suspense } from 'react'
import PropostaClientComponent from './PropostaClient'

// Required for static export with optional catch-all routes
export async function generateStaticParams() {
  // Return empty array - page is fully client-side rendered
  return [{ code: undefined }]
}

function LoadingState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-brand-orange mx-auto"></div>
        <p className="text-gray-500">Carregando proposta...</p>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingState />}>
      <PropostaClientComponent />
    </Suspense>
  )
}
