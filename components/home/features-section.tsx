import Image from "next/image"

const features = [
  {
    label: "Tableau de bord agence",
    title: "Pilotez votre agence depuis un tableau de bord complet",
    description: "Vue d’ensemble de vos propriétés, prospects, messages et performances. Actions rapides pour créer un contrat, une facture ou ajouter un propriétaire. Rendez-vous et visites à venir toujours visibles.",
    image: "/img/Capture d’écran 2026-02-26 à 14.53.03.png",
    alt: "Tableau de bord agence Gallé Connect Pro",
    reversed: false,
  },
  {
    label: "Gestion des contrats",
    title: "Créez et suivez vos contrats sans effort",
    description: "Visualisez tous vos contrats avec leur statut, type, valeur et progression. Filtrez par statut ou par type. Exportez vos données en un clic. Chaque contrat dispose d’un suivi de progression détaillé.",
    image: "/img/Capture d’écran 2026-02-26 à 14.52.44.png",
    alt: "Gestion des contrats Gallé Connect Pro",
    reversed: true,
  },
  {
    label: "Espace client",
    title: "Un espace dédié pour vos clients",
    description: "Vos clients suivent leur parcours immobilier en temps réel : visites programmées, documents à fournir, contrats à signer et progression globale. Tout est transparent et accessible.",
    image: "/img/Capture d’écran 2026-02-26 à 14.51.34.png",
    alt: "Espace client Gallé Connect Pro",
    reversed: false,
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">Fonctionnalités</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#374250] md:text-4xl text-balance">
            Découvrez Gallé Connect Pro en détail
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#3a3a3a]">
            Chaque fonctionnalité a été conçue pour simplifier le quotidien des agences immobilières et offrir la meilleure expérience à leurs clients.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-12 lg:flex-row ${feature.reversed ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div
                className={`w-full lg:w-3/5 ${feature.reversed ? "animate-fade-in-right" : "animate-fade-in-left"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="overflow-hidden rounded-xl border border-border shadow-xl shadow-[#374250]/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d99306]/15 hover:scale-[1.02]">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={1200}
                    height={800}
                    className="w-full transition-transform duration-700 hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`w-full lg:w-2/5 ${feature.reversed ? "animate-fade-in-left" : "animate-fade-in-right"}`}
                style={{ animationDelay: `${index * 200 + 100}ms` }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">
                  {feature.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-bold text-[#374250] md:text-3xl text-balance">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#3a3a3a]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}