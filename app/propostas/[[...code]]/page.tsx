import PropostaClientComponent from './PropostaClient'

// Required for static export with optional catch-all routes
export async function generateStaticParams() {
  // Return empty array - page is fully client-side rendered
  return [{ code: undefined }]
}

export default function Page() {
  return <PropostaClientComponent />
}
