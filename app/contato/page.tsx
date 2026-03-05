import Image from 'next/image'
import MultiStepForm from '@/components/MultiStepForm'
import TransitionLink from '@/components/TransitionLink'

export const metadata = {
  title: 'Contato - Entre em contato conosco | Phurshell',
  description:
    'Entre em contato com a Phurshell para discutir seu próximo projeto de tecnologia. Desenvolvimento de apps mobile, web e soluções customizadas.',
}

export default function ContatoPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <Image
          src="/img-contact-side.jpg"
          alt="Phurshell - Entre em contato"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
          {/* Bottom Content */}
          <div className="space-y-8">
            <div>
              <h1 className="mb-6 text-5xl font-black leading-tight xl:text-6xl">
                Transforme<br />
                sua ideia em<br />
                <span className="text-brand-orange">realidade</span>
              </h1>
              <p className="text-lg text-white/90 max-w-md">
                Conte-nos sobre seu projeto e receba uma proposta personalizada em até 24 horas.
              </p>
            </div>

            {/* Client Logos */}
            <div>
              <p className="mb-6 text-sm font-bold uppercase tracking-wider text-white/70">
                Empresas que confiam em nós
              </p>
              <div className="grid grid-cols-3 gap-8 max-w-md">
                <div className="flex items-center justify-start opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/clients/img-partner-1.png"
                    alt="Cliente"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-start opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/clients/img-partner-2.png"
                    alt="Cliente"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-start opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/clients/img-partner-3.png"
                    alt="Cliente"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-start opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/clients/img-partner-4.png"
                    alt="Cliente"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-start opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/clients/img-partner-5.png"
                    alt="Cliente"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-start opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/clients/img-partner-6.png"
                    alt="Cliente"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-12">
        {/* Logo */}
        <div className="mb-12">
          <TransitionLink href="/" className="inline-block">
            <Image
              src="/logos/img-navbar-logo-dark.svg"
              alt="Phurshell"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </TransitionLink>
        </div>

        {/* Form Content */}
        <div className="flex-1 flex flex-col">
          <MultiStepForm />
        </div>
      </div>
    </div>
  )
}
