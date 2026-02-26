import { AlertTriangle, Clock, FolderOpen, Users, FileText, BarChart3 } from "lucide-react"

const problems = [
  {
    icon: FolderOpen,
    title: "Données dispersées",
    description: "Fichiers Excel, e-mails, papiers… vos informations sont éparpillées partout, sans vue d’ensemble.",
  },
  {
    icon: Clock,
    title: "Perte de temps",
    description: "La saisie manuelle et les tâches répétitives vous font perdre des heures chaque semaine.",
  },
  {
    icon: Users,
    title: "Suivi client difficile",
    description: "Impossible de suivre efficacement chaque prospect et chaque étape du parcours client.",
  },
  {
    icon: FileText,
    title: "Contrats complexes",
    description: "La création et le suivi des contrats et factures sont chronophages et sources d’erreurs.",
  },
  {
    icon: BarChart3,
    title: "Manque de visibilité",
    description: "Aucun tableau de bord pour mesurer la performance de votre agence en temps réel.",
  },
  {
    icon: AlertTriangle,
    title: "Outils obsolètes",
    description: "Les logiciels actuels sont lourds, chers et ne répondent pas aux besoins modernes.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">Le problème</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#374250] md:text-4xl text-balance">
            Les agences immobilières méritent mieux
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#3a3a3a]">
            Trop d’agences perdent du temps avec des outils inadaptés. Gallé Connect Pro a été conçu pour résoudre ces problèmes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#d99306]/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-destructive/10 transition-transform duration-300 group-hover:scale-110">
                <problem.icon className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-[#374250]">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3a3a3a]">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}