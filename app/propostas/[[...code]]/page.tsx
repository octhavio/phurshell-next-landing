import PropostaClientComponent from './PropostaClient'

interface PageProps {
  params: { code?: string[] }
}

// Required for static export with optional catch-all routes
export async function generateStaticParams() {
  // Return empty object for base /propostas page
  // Actual proposal codes are loaded client-side
  return [{ code: undefined }]
}

export default function Page({ params }: PageProps) {
  const code = params.code?.[0]
  return <PropostaClientComponent code={code} />
}
