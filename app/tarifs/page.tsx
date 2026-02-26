"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    priceMonthly: 29,
    priceYearly: 26,
    description: "Idéal pour les agences indépendantes qui démarrent.",
    features: [
      "Jusqu'à 10 biens",
      "2 agents maximum",
      "Gestion des clients & prospects",
      "Calendrier & visites",
      "Contrats de base",
      "Facturation simple",
      "Support par email",
      "Listing sur la marketplace",
    ],
    highlighted: false,
    cta: "Rejoindre la waitlist",
  },
  {
    name: "Pro",
    priceMonthly: 59,
    priceYearly: 53,
    description: "Pour les agences en croissance qui veulent tout automatiser.",
    features: [
      "Tous les avantages du Starter, plus :",
      "Jusqu'à 200 biens",
      "10 agents maximum",
      "CRM avancé avec scoring",
      "Calendrier avec synchronisation externe",
      "Contrats avec signature électronique",
      "Facturation avancée & relances",
      "Reporting & analytics",
      "Support prioritaire",
      "Export des données",
    ],
    highlighted: true,
    cta: "Rejoindre la waitlist",
  },
  {
    name: "Enterprise",
    priceMonthly: "",
    priceYearly: "",
    description: "Pour les groupes immobiliers et agences multi-sites.",
    features: [
      "Tous les avantages du Pro, plus :",
      "Biens illimités",
      "Agents illimités",
      "CRM avancé avec automatisation",
      "Multi-agences & multi-sites",
      "API et intégrations personnalisées",
      "Contrats & signatures avancées",
      "Facturation complète",
      "Analytics avancées & export",
      "Support dédié + onboarding",
      "SLA garanti",
    ],
    highlighted: false,
    cta: "Rejoindre la waitlist",
  },
]

const faqs = [
  {
    q: "Puis-je changer de forfait à tout moment ?",
    a: "Oui, vous pouvez upgrader ou downgrader votre forfait à tout moment. Les modifications sont effectives immédiatement et le prorata est calculé automatiquement.",
  },
  {
    q: "Y a-t-il un engagement minimum ?",
    a: "Aucun engagement minimum. Vous pouvez annuler votre abonnement à tout moment. Nous proposons des réductions pour les engagements annuels.",
  },
  {
    q: "Que se passe-t-il après la waitlist ?",
    a: "Les membres de la waitlist seront les premiers informés du lancement et bénéficieront d'une offre spéciale de lancement avec une réduction significative.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Absolument. Nous utilisons un chiffrement de bout en bout et nos serveurs sont hébergés en Europe, conformément au RGPD.",
  },
  {
    q: "Proposez-vous une formation ?",
    a: "Oui, tous les forfaits incluent un accès à notre base de connaissances. Les forfaits Pro et Enterprise incluent des sessions de formation personnalisées.",
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const formatPrice = (price: number | string) => {
    return price === "" || price === null || price === undefined ? "Contactez-nous" : `${price}€`
  }

  const getAnnualPrice = (monthly: number | string, yearly: number | string) => {
    if (!monthly || !yearly) return "Contactez-nous"
    const reduction = ((monthly - yearly) / monthly) * 100
    return `${yearly * 12}€ / an (-${Math.round(reduction)}%)`
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">Tarifs</p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#374250] md:text-5xl lg:text-6xl text-balance">
              Des tarifs simples et transparents
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#3a3a3a]">
              Choisissez le forfait adapté à la taille de votre agence. Tous les forfaits incluent les mises à jour et le support.
            </p>

            {/* Toggle */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isYearly ? "text-[#374250]" : "text-[#3a3a3a]"}`}>
                Mensuel
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative h-7 w-12 rounded-full transition-colors ${isYearly ? "bg-[#d99306]" : "bg-border"}`}
                aria-label="Basculer entre mensuel et annuel"
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${isYearly ? "left-6" : "left-1"}`}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? "text-[#374250]" : "text-[#3a3a3a]"}`}>
                Annuel
              </span>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="bg-card pb-16 pt-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-xl border p-8 transition-shadow ${plan.highlighted
                    ? "border-[#d99306] bg-background shadow-xl shadow-[#d99306]/10"
                    : "border-border bg-background hover:shadow-md"
                    }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-[#d99306] px-4 py-1 text-xs font-semibold text-white">
                        Populaire
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-[#374250]">{plan.name}</h3>
                  <p className="mt-2 text-sm text-[#3a3a3a]">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#374250]">
                      {formatPrice(isYearly ? plan.priceYearly : plan.priceMonthly)}
                    </span>
                    {isYearly && plan.priceMonthly && plan.priceYearly && (
                      <span className="text-sm text-[#3a3a3a]">/mois</span>
                    )}
                  </div>
                  {isYearly && plan.priceMonthly && plan.priceYearly && (
                    <p className="mt-1 text-xs text-[#3a3a3a]">
                      {getAnnualPrice(plan.priceMonthly, plan.priceYearly)}
                    </p>
                  )}

                  <ul className="mt-8 flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#374250]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d99306]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      size="lg"
                      asChild
                      className={`w-full ${plan.highlighted
                        ? "bg-[#d99306] text-white hover:bg-[#c08505]"
                        : "bg-[#374250] text-white hover:bg-[#374250]/90"
                        }`}
                    >
                      <Link href="/waitlist">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-[#374250] md:text-4xl text-balance">
                Questions fréquentes
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#3a3a3a]">
                Tout ce que vous devez savoir sur nos tarifs et notre offre.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-[#374250]">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3a3a3a]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}