import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, LayoutDashboard, FileSignature, Users, Building2, Calendar, Receipt } from "lucide-react"

export const metadata = {
  title: "Plateforme - Gallé Connect Pro",
  description: "Découvrez en détail toutes les fonctionnalités de la plateforme Gallé Connect Pro pour la gestion immobilière.",
}

const platformSections = [
  {
    id: "dashboard-agence",
    icon: LayoutDashboard,
    label: "Vue agence",
    title: "Tableau de bord agence",
    description: "Le tableau de bord agence offre une vue d'ensemble complète de votre activité. Suivez vos propriétés totales, prospects actifs, messages et vues mensuelles en temps réel. Accès rapide pour créer un contrat, une facture ou ajouter un propriétaire. La section des propriétés récentes et le calendrier des rendez-vous vous permettent de ne rien manquer.",
    details: [
      "Statistiques en temps réel avec tendances",
      "Actions rapides (Nouveau contrat, Facture, Propriétaire)",
      "Liste des propriétés récentes avec statut",
      "Calendrier des rendez-vous et visites à venir",
      "Vue des agents et de leurs performances",
    ],
    image: "/img/Capture d’écran 2026-02-26 à 14.53.03.png",
    alt: "Tableau de bord agence Gallé Connect Pro",
    reversed: false,
  },
  {
    id: "contrats",
    icon: FileSignature,
    label: "Contrats",
    title: "Gestion des contrats",
    description: "Créez et gérez tous vos contrats immobiliers depuis une interface intuitive. Visualisez le nombre total de contrats, ceux en attente de signature, les signés du mois et la valeur totale. Le tableau détaillé permet de filtrer par statut et type, avec suivi de progression pour chaque contrat.",
    details: [
      "Vue d'ensemble avec 4 indicateurs clés",
      "Recherche et filtrage avancé (statut, type)",
      "Tableau détaillé avec progression visuelle",
      "Statuts clairs : Signé, En attente, Brouillon, Expiré",
      "Actions rapides par contrat (voir, modifier, supprimer)",
    ],
    image: "/img/Capture d’écran 2026-02-26 à 14.52.44.png",
    alt: "Gestion des contrats Gallé Connect Pro",
    reversed: true,
  },
  {
    id: "dashboard-client",
    icon: Users,
    label: "Vue client",
    title: "Espace client",
    description: "Vos clients disposent de leur propre espace pour suivre leur parcours immobilier. Ils voient en un coup d'œil leurs biens enregistrés, visites à venir, documents et messages. Le parcours visuel montre chaque étape depuis la création du profil jusqu'à l'emménagement.",
    details: [
      "Tableau de bord personnalisé avec statistiques",
      "Suivi du parcours immobilier étape par étape",
      "Liste des tâches et activités à venir",
      "Actions requises mises en évidence",
      "Accès direct aux documents et messages",
    ],
    image: "/img/Capture d’écran 2026-02-26 à 14.51.34.png",
    alt: "Espace client Gallé Connect Pro",
    reversed: false,
  },
  {
    id: "contrat-client",
    icon: FileSignature,
    label: "Contrats client",
    title: "Suivi des contrats pour les clients",
    description: "Les clients peuvent consulter et gérer leurs contrats directement depuis leur espace. Chaque contrat affiche les détails clés : type, durée, date de début, dépôt de garantie. Le suivi de progression permet de voir exactement où en est le processus, de la soumission à la remise des clés.",
    details: [
      "Carte contrat avec détails complets",
      "Actions : Voir, Télécharger le PDF, Signer",
      "Progression détaillée étape par étape",
      "Indicateur de pourcentage de complétion",
      "Onglets Actifs et Passés pour l'historique",
    ],
    image: "/img/Capture d’écran 2026-02-26 à 14.51.12.png",
    alt: "Suivi contrat client Gallé Connect Pro",
    reversed: true,
  },
]

const additionalFeatures = [
  {
    icon: Building2,
    title: "Gestion des propriétés",
    description: "Ajoutez des biens avec photos, détails complets, prix et statut. Filtrez, triez et recherchez facilement dans votre catalogue.",
  },
  {
    icon: Users,
    title: "Clients & prospects",
    description: "CRM intégré pour suivre chaque contact, interaction et conversion. Historique complet et notes pour chaque client.",
  },
  {
    icon: Calendar,
    title: "Calendrier & visites",
    description: "Planifiez les visites et rendez-vous avec vue calendrier. Notifications automatiques pour tous les participants.",
  },
  {
    icon: Receipt,
    title: "Facturation",
    description: "Créez, envoyez et suivez vos factures. Suivi des paiements, relances automatiques et export comptable.",
  },
]

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">Plateforme</p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#374250] md:text-5xl lg:text-6xl text-balance">
              Une plateforme conçue pour l'immobilier
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#3a3a3a]">
              Explorez chaque fonctionnalité en détail. Gallé Connect Pro offre une expérience complète pour les agences et leurs clients.
            </p>
          </div>
        </section>

        {/* Platform sections with screenshots */}
        {platformSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`py-16 md:py-24 ${section.reversed ? "bg-card" : "bg-background"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div
                className={`flex flex-col items-center gap-12 lg:flex-row ${section.reversed ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="w-full lg:w-3/5">
                  <div className="overflow-hidden rounded-xl border border-border shadow-xl shadow-primary/5">
                    <Image
                      src={section.image}
                      alt={section.alt}
                      width={1200}
                      height={800}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fef3db]">
                      <section.icon className="h-5 w-5 text-[#d99306]" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">{section.label}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#374250] md:text-3xl text-balance">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#3a3a3a]">
                    {section.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {section.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-[#374250]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d99306]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Additional features */}
        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-[#374250] md:text-4xl text-balance">
                Et bien plus encore
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#3a3a3a]">
                Gallé Connect Pro intègre de nombreuses autres fonctionnalités pour couvrir tous vos besoins.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {additionalFeatures.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-border bg-background p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#fef3db]">
                    <feature.icon className="h-5 w-5 text-[#d99306]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#374250]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3a3a3a]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#374250] md:text-4xl text-balance">
              Convaincu ? Rejoignez la liste d'attente
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3a3a3a]">
              Soyez parmi les premiers à utiliser Gallé Connect Pro et bénéficiez d'un accès prioritaire.
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
        </section>
      </main>
      <Footer />
    </>
  )
}
