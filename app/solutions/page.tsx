import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Building2,
  Users,
  UserCheck,
  FileSignature,
  Receipt,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  HeadphonesIcon,
  Clock,
  icons,
} from "lucide-react"

export const metadata = {
  title: "Solutions - Gallé Connect Pro",
  description: "Découvrez toutes les solutions Gallé Connect Pro pour la gestion immobilière : biens, clients, contrats, factures et analytics.",
}

const mainSolutions = [
  {
    id: "proprietes",
    icon: Building2,
    title: "Gestion des propriétés",
    description: "Centralisez tous vos biens immobiliers dans un catalogue unique et structuré.",
    benefits: [
      "Fiches détaillées avec photos, descriptions et caractéristiques",
      "Gestion des statuts : disponible, en visite, sous compromis, vendu, loué",
      "Filtrage et recherche avancée par type, prix, localisation",
      "Historique complet de chaque bien (visites, offres, modifications)",
      "Export des données et génération de fiches PDF",
      "Gestion multi-agences pour les groupes immobiliers",
    ],
    highlight: "245+ biens gérés en moyenne par agence",
  },
  {
    id: "clients",
    icon: Users,
    title: "Clients & prospects",
    description: "Un CRM conçu pour l'immobilier. Suivez chaque prospect du premier contact à la signature.",
    benefits: [
      "Fiches client complètes avec historique des interactions",
      "Pipeline visuel pour suivre la progression de chaque prospect",
      "Scoring automatique des leads selon leur engagement",
      "Communication intégrée : emails, SMS, notifications",
      "Segmentation et ciblage pour vos campagnes",
      "Rapports de conversion et performance commerciale",
    ],
    highlight: "48 prospects actifs en moyenne par agence",

  },
  {
    id: "agents",
    icon: UserCheck,
    title: "Gestion des agents",
    benefits: [
      "Profils agents avec portefeuille de biens et clients",
      "Suivi des performances individuelles et collectives",
      "Attribution automatique des leads et mandats",
      "Calendrier partagé et gestion des disponibilités",
      "Suivi des commissions et objectifs personnalisés",
      "Espace collaboratif pour partager notes et documents",
    ],
    highlight: "Productivité agent augmentée de 35 %",
  },
  {
    id: "contrats",
    icon: FileSignature,
    title: "Contrats & signatures",
    benefits: [
      "Modèles de contrats personnalisables (vente, location, mandat)",
      "Génération automatique à partir des données existantes",
      "Signature électronique intégrée et légalement valide",
      "Suivi de progression étape par étape",
      "Rappels automatiques pour les signatures en attente",
      "Archivage sécurisé et conforme aux réglementations",
    ],
    highlight: "Signature 3x plus rapide qu'en format papier",
  },
  {
    id: "factures",
    icon: Receipt,
    title: "Facturation",
    description: "Simplifiez votre facturation et gardez le contrôle sur vos flux financiers.",
    benefits: [
      "Création de factures en quelques clics depuis les contrats",
      "Suivi des paiements en temps réel",
      "Relances automatiques pour les factures impayées",
      "Export comptable compatible avec les logiciels du marché",
      "Gestion des acomptes et échéanciers",
      "Tableau de bord financier avec prévisions",
    ],
    highlight: "Recouvrement amélioré de 40 %",
  },
  {
    id: "calendrier",
    icon: Calendar,
    title: "Calendrier & visites",
    description: "Organisez vos visites et rendez-vous avec un système de planification intelligent.",
    benefits: [
      "Calendrier intégré avec vue jour, semaine et mois",
      "Prise de rendez-vous en ligne pour vos clients",
      "Notifications et rappels automatiques (email, SMS)",
      "Synchronisation avec Google Calendar et Outlook",
      "Comptes rendus de visite numériques",
      "Statistiques sur les visites et taux de conversion",
    ],
    highlight: "2x plus de visites organisées par semaine",
  },
]

const additionalBenefits = [

  {
    icon: TrendingUp,
    title: "Analytics & reporting",
    description: "Tableaux de bord en temps réel, rapports automatisés et indicateurs de performance pour piloter votre activité.",
  },
  {
    icon: Shield,
    title: "Sécurité des données",
    description: "Chiffrement de bout en bout, sauvegardes automatiques et conformité RGPD pour protéger vos données sensibles.",
  },
  {
    icon: Zap,
    title: "Automatisation",
    description: "Workflows automatisés pour les tâches répétitives : relances, notifications, génération de documents.",
  },
  {
    icon: Globe,
    title: "Multi-langues",
    description: "Interface disponible en français, anglais et espagnol. Parfait pour les agences internationales.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support dédié",
    description: "Équipe de support disponible pour vous accompagner dans la prise en main et l'utilisation quotidienne.",
  },
  {
    icon: Clock,
    title: "Mises à jour régulières",
    description: "Nouvelles fonctionnalités et améliorations déployées chaque mois selon les retours utilisateurs.",
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">Solutions</p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#374250] md:text-5xl lg:text-6xl text-balance">
              Des solutions pour chaque besoin
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#3a3a3a]">
              Gallé Connect Pro couvre l'ensemble des besoins d'une agence immobilière moderne. Découvrez chaque solution en détail.
            </p>
          </div>
        </section>

        {/* Main Solutions */}
        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mainSolutions.map((solution) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="flex flex-col rounded-xl border border-border bg-background p-8 transition-all hover:border-[#d99306]/30 hover:shadow-lg hover:shadow-[#d99306]/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef3db]">
                    <solution.icon className="h-6 w-6 text-[#d99306]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#374250]">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3a3a3a]">{solution.description}</p>

                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-[#374250]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d99306]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-lg bg-[#fef3db] px-4 py-3">
                    <p className="text-sm font-medium text-[#d99306]">{solution.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-[#374250] md:text-4xl text-balance">
                Avantages supplémentaires
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#3a3a3a]">
                Au-delà des fonctionnalités principales, Gallé Connect Pro offre une expérience complète et sécurisée.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fef3db]">
                    <benefit.icon className="h-5 w-5 text-[#d99306]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#374250]">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#3a3a3a]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="overflow-hidden rounded-2xl bg-[#374250] px-8 py-16 text-center md:px-16">
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl text-balance">
                Toutes ces solutions, une seule plateforme
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-300">
                Rejoignez la liste d'attente et découvrez comment Gallé Connect Pro peut transformer votre agence.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild className="bg-[#d99306] text-white hover:bg-[#c08505] px-8">
                  <Link href="/waitlist">
                    Rejoindre la liste d'attente
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
