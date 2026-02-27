'use client'

import { useState } from 'react'

interface TimelineStep {
  id: string
  label: string
  description?: string
}

interface TimelinePhase {
  phase: string
  color: 'gray' | 'pink' | 'teal' | 'purple'
  steps: TimelineStep[]
}

interface ProjectTimelineProps {
  phases: TimelinePhase[]
}

export default function ProjectTimeline({ phases }: ProjectTimelineProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set())

  const toggleStep = (stepId: string) => {
    const newExpanded = new Set(expandedSteps)
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId)
    } else {
      newExpanded.add(stepId)
    }
    setExpandedSteps(newExpanded)
  }

  const colorClasses: Record<string, { label: string; button: string; buttonHover: string }> = {
    gray: {
      label: 'bg-gray-600 text-white',
      button: 'bg-gray-700 text-gray-100 border-gray-600',
      buttonHover: 'hover:bg-gray-600',
    },
    pink: {
      label: 'bg-pink-600 text-white',
      button: 'bg-pink-700 text-pink-100 border-pink-600',
      buttonHover: 'hover:bg-pink-600',
    },
    teal: {
      label: 'bg-teal-600 text-white',
      button: 'bg-teal-700 text-teal-100 border-teal-600',
      buttonHover: 'hover:bg-teal-600',
    },
    purple: {
      label: 'bg-purple-600 text-white',
      button: 'bg-purple-700 text-purple-100 border-purple-600',
      buttonHover: 'hover:bg-purple-600',
    },
  }

  return (
    <section className="bg-dark py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h2 className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Cronograma do Projeto
          </h2>
          <p className="max-w-4xl text-lg leading-relaxed text-white/70">
            Acompanhe cada etapa do desenvolvimento do seu aplicativo mobile, desde o briefing
            inicial até o lançamento nas lojas de aplicativos.
          </p>
        </div>

        {/* Timeline Grid with Background Lines */}
        <div className="relative">
          {/* Vertical Grid Lines */}
          <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
            <div className="grid h-full grid-cols-12 gap-0">
              {[...Array(13)].map((_, i) => (
                <div key={i} className="border-r border-white/5"></div>
              ))}
            </div>
          </div>

          {/* Horizontal Lines for each phase */}
          <div className="space-y-0">
            {phases.map((phase, phaseIndex) => {
              const colors = colorClasses[phase.color]
              return (
                <div key={phaseIndex} className="relative">
                  {/* Horizontal line */}
                  <div className="absolute left-0 right-0 top-0 border-t border-white/10"></div>

                  <div className="flex flex-col gap-6 py-8 lg:flex-row lg:gap-12 lg:py-12">
                    {/* Phase Label */}
                    <div className="relative z-10 flex-shrink-0 lg:w-48">
                      <div
                        className={`inline-block rounded-button px-4 py-1 text-sm font-black tracking-wider ${colors.label}`}
                      >
                        {phase.phase}
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="relative z-10 flex-1">
                      <div className="flex flex-wrap gap-4">
                        {phase.steps.map((step) => {
                          const isExpanded = expandedSteps.has(step.id)
                          return (
                            <div key={step.id} className="w-full sm:w-auto">
                              <button
                                onClick={() => toggleStep(step.id)}
                                className={`group flex w-full items-center justify-between gap-3 rounded-button border-2 px-6 py-3 text-left font-black transition-smooth sm:w-auto ${colors.button} ${colors.buttonHover}`}
                              >
                                <span>{step.label}</span>
                                <i
                                  className={`fa-solid transition-transform ${
                                    isExpanded ? 'fa-minus' : 'fa-plus'
                                  }`}
                                ></i>
                              </button>

                              {isExpanded && step.description && (
                                <div className="mt-3 rounded-button border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-white/80 backdrop-blur-sm">
                                  {step.description}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Final bottom border */}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </section>
  )
}
