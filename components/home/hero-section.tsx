"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 animate-fade-in-down">
            <span className="h-2 w-2 rounded-full bg-[#d99306] animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Bientôt disponible - Rejoignez la liste d'attente
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-[#374250] md:text-6xl lg:text-7xl animate-fade-in-up animation-delay-100">
            Gérez votre agence immobilière en toute simplicité
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[#3a3a3a] md:text-xl animate-fade-in-up animation-delay-200">
            Gallé Connect Pro centralise la gestion de vos biens, clients, visites, contrats et factures dans une plateforme unique, moderne et intuitive.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-in-up animation-delay-300">
            <Button size="lg" asChild className="bg-[#d99306] text-white hover:bg-[#c08505] px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d99306]/25">
              <Link href="/waitlist">
                Rejoindre la liste d'attente
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-[#374250] text-[#374250] hover:bg-[#374250]/5 transition-all duration-300 hover:scale-105">
              <Link href="/plateforme">Découvrir la plateforme</Link>
            </Button>
          </div>

          {/* Dashboard Screenshot */}
          <div className="mt-16 w-full max-w-5xl animate-scale-in animation-delay-400">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-[#374250]/10 transition-all duration-500 hover:shadow-[#d99306]/20 hover:scale-[1.01]">
              <Image
                src="/img/Capture d’écran 2026-02-26 à 14.53.03.png"
                alt="Tableau de bord Gallé Connect Pro - Vue agence"
                width={1400}
                height={900}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#d99306]/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-[#374250]/5 blur-3xl animate-pulse animation-delay-500" />
      </div>
    </section>
  )
}
