import { Building2, Users, Calendar, FileSignature, Receipt, TrendingUp } from "lucide-react"

const solutions = [
  {
    icon: Building2,
    title: "Gestion centralisée des biens",
    description: "Ajoutez, modifiez et suivez tous vos biens immobiliers depuis un seul endroit. Photos, détails, statuts et historique en un clic.",
  },
  {
    icon: Users,
    title: "Suivi clients & prospects",
    description: "Gérez vos contacts, suivez chaque interaction et convertissez vos prospects en clients grâce à un CRM intégré.",
  },
  {
    icon: Calendar,
    title: "Calendrier & visites",
    description: "Planifiez et organisez vos visites avec un calendrier intuitif. Notifications automatiques pour vous et vos clients.",
  },
  {
    icon: FileSignature,
    title: "Contrats automatisés",
    description: "Générez, envoyez et suivez vos contrats de vente et de location. Signature électronique et suivi de progression inclus.",
  },
  {
    icon: Receipt,
    title: "Facturation simplifiée",
    description: "Créez et gérez vos factures en quelques clics. Suivi des paiements et relances automatiques.",
  },
  {
    icon: TrendingUp,
    title: "Reporting & analytics",
    description: "Tableaux de bord en temps réel pour suivre la performance de votre agence, vos agents et vos biens.",
  },
]

export function SolutionSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">La solution</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#374250] md:text-4xl text-balance">
            Tout ce dont votre agence a besoin, en une seule plateforme
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#3a3a3a]">
            Gallé Connect Pro réunit tous vos outils dans une interface moderne et intuitive, conçue pour les professionnels de l'immobilier.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-[#d99306]/30 hover:shadow-xl hover:shadow-[#d99306]/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef3db] transition-all duration-300 group-hover:bg-[#d99306] group-hover:scale-110">
                <solution.icon className="h-6 w-6 text-[#d99306] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#374250]">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3a3a3a]">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}