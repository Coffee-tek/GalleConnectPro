import { UserPlus, Building, CalendarCheck, FileCheck } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Créez votre compte agence",
    description: "Inscrivez-vous en quelques minutes. Configurez votre agence, ajoutez vos agents et personnalisez votre espace.",
  },
  {
    icon: Building,
    number: "02",
    title: "Ajoutez vos biens et clients",
    description: "Importez ou créez vos fiches de biens immobiliers. Ajoutez vos clients et prospects avec toutes leurs informations.",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Organisez vos visites",
    description: "Planifiez les visites depuis le calendrier intégré. Vos clients reçoivent automatiquement les confirmations.",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Gérez contrats & factures",
    description: "Générez vos contrats, suivez les signatures et créez vos factures. Tout est automatisé et traçable.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">
            Comment ça marche
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#374250] md:text-4xl text-balance">
            Démarrez en 4 étapes simples
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#3a3a3a]">
            Gallé Connect Pro est conçu pour être opérationnel en quelques minutes, pas en quelques semaines.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-8 -translate-x-[-100%] bg-border transition-all duration-500 group-hover:bg-[#d99306] lg:block" />
              )}

              <div className="flex flex-col items-start transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fef3db] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d99306] group-hover:shadow-lg group-hover:shadow-[#d99306]/20">
                  <step.icon className="h-7 w-7 text-[#d99306] transition-colors duration-300 group-hover:text-white" />
                </div>

                <span className="text-sm font-bold text-[#d99306]">{step.number}</span>
                <h3 className="mt-2 text-lg font-semibold text-[#374250]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3a3a3a]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}