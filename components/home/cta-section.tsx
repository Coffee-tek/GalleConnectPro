import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl bg-[#374250] px-8 py-16 text-center md:px-16 md:py-20 relative group transition-all duration-500 hover:shadow-2xl hover:shadow-[#d99306]/20">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#d99306]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#d99306]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
          </div>

          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
              Prêt à transformer votre agence ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-300">
              Rejoignez les agences qui ont choisi Gallé Connect Pro pour simplifier leur quotidien. Inscrivez-vous à la liste d'attente et soyez parmi les premiers à en bénéficier.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                className="bg-[#d99306] text-white hover:bg-[#c08505] px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d99306]/30"
              >
                <Link href="/waitlist">
                  Rejoindre la liste d'attente
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Link href="/plateforme">En savoir plus</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
