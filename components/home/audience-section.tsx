import { Building2, UserCheck, KeyRound, Heart } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    title: "Agences immobilières",
    description: "Centralisez toute la gestion de votre agence : biens, agents, contrats et performance. Gagnez en efficacité au quotidien.",
    benefits: ["Tableau de bord complet", "Gestion multi-agents", "Reporting en temps réel"],
  },
  {
    icon: UserCheck,
    title: "Agents immobiliers",
    description: "Suivez vos clients, organisez vos visites et gérez vos contrats depuis une interface simple et mobile.",
    benefits: ["Calendrier intégré", "Suivi des prospects", "Notifications automatiques"],
  },
  {
    icon: KeyRound,
    title: "Propriétaires",
    description: "Suivez la gestion de vos biens, consultez les rapports de visite et accédez à vos contrats et factures.",
    benefits: ["Visibilité sur les biens", "Accès aux documents", "Suivi des paiements"],
  },
  {
    icon: Heart,
    title: "Clients",
    description: "Suivez votre parcours d’achat ou de location en temps réel. Visites, contrats, factures : tout est accessible.",
    benefits: ["Parcours transparent", "Documents en ligne", "Communication directe"],
  },
]

export function AudienceSection() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">
            Pour qui ?
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#374250] md:text-4xl text-balance">
            Conçu pour tous les acteurs de l'immobilier
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#3a3a3a]">
            Que vous soyez une agence, un agent, un propriétaire ou un client, Gallé Connect Pro s'adapte à vos besoins.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#d99306]/30 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef3db] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d99306]">
                <audience.icon className="h-6 w-6 text-[#d99306] transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="text-lg font-semibold text-[#374250]">
                {audience.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#3a3a3a]">
                {audience.description}
              </p>

              <ul className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                {audience.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-[#374250]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d99306] transition-transform duration-300 group-hover:scale-150" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}