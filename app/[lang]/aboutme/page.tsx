import type { Dictionary } from "@/components/prop-types"
import { getDictionary } from "../dictionaries"

export default async function AboutMePage({
  params,
}: {
  params: Promise<{ lang: "en" | "de" }>
}) {
  const lang = (await params).lang
  const dict: Dictionary = await getDictionary(lang)

  return (
    <div className="w-full bg-background">
      {/* Full-screen hero section */}
      <section className="min-h-screen flex flex-col">
        {/* Header with title */}
        <div className="container max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">{dict["about-me"].header.title}</h1>
        </div>

        {/* Main hero content */}
        <div className="flex-1 flex items-center">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Quote */}
              <div className="animate-fade-in opacity-0 [--animation-delay:300ms]">
                <blockquote className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter uppercase">
                  {dict["about-me"].header.quote}
                </blockquote>
              </div>

              {/* Right side - Profile Image */}
              <div className="flex justify-center md:justify-end animate-fade-in opacity-0 [--animation-delay:500ms]">
                <div className="relative w-full max-w-md aspect-[3/4] bg-black/5">
                  <img
                    src="/images/about/Finn_Foto.jpg"
                    alt="Finn Untiedt Photo"
                    className="w-full h-full object-cover object-center grayscale contrast-125"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* Content sections */}
      <section className="container max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-16">
          <div className="animate-fade-in opacity-0 [--animation-delay:400ms]">
            <p className="text-xl mb-8">{dict["about-me"].header.text}</p>
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h2 className="text-2xl font-bold mb-4">{dict["about-me"]["section-one"].title}</h2>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: dict["about-me"]["section-one"].text }}
            />
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:800ms]">
            <h2 className="text-2xl font-bold mb-4">{dict["about-me"]["section-two"].title}</h2>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: dict["about-me"]["section-two"].text }}
            />
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <h2 className="text-2xl font-bold mb-4">{dict["about-me"]["section-three"].title}</h2>
            <p className="text-lg">{dict["about-me"]["section-three"].text}</p>
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <h2 className="text-2xl font-bold mb-4">{dict["about-me"]["section-four"].title}</h2>
            <p className="text-lg">{dict["about-me"]["section-four"].text}</p>
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:1400ms]">
            <h2 className="text-2xl font-bold mb-4">{dict["about-me"]["section-five"].title}</h2>
            <p className="text-lg">{dict["about-me"]["section-five"].text}</p>
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:1600ms]">
            <h2 className="text-2xl font-bold mb-4">{dict["about-me"]["section-six"].title}</h2>
            <p className="text-lg">{dict["about-me"]["section-six"].text}</p>
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:1800ms]">
            <h2 className="text-2xl font-bold mb-4">{dict["about-me"]["section-eight"].title}</h2>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: dict["about-me"]["section-eight"].text }}
            />
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:2000ms]">
            <h2 className="text-2xl font-bold mb-4">{dict["about-me"]["section-nine"].title}</h2>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: dict["about-me"]["section-nine"].text }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

