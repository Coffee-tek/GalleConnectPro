"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { CheckCircle2, Building2, Users, FileSignature, TrendingUp } from "lucide-react"
import { toast } from "sonner"

const benefits = [
  { icon: Building2, title: "Accès prioritaire", description: "Soyez parmi les premiers à tester la plateforme avant le lancement officiel." },
  { icon: Users, title: "Offre de lancement", description: "Bénéficiez d'une réduction exclusive réservée aux membres de la liste d'attente." },
  { icon: FileSignature, title: "Onboarding personnalisé", description: "Un accompagnement dédié pour configurer votre agence sur GalleConnect Pro." },
  { icon: TrendingUp, title: "Influence sur le produit", description: "Vos retours comptent. Participez à l'évolution de la plateforme." },
]

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    nomComplet: "",
    telephone: "",
    email: "",
    nomAgence: "",
    pays: "",
    ville: "",
    tailleAgence: "",
    logicielGestion: false,
    commentaire: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setForm((prev) => ({ ...prev, tailleAgence: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/agences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
      else {
        const data = await res.json()
        // alert(data.message || "Erreur lors de l'enregistrement")
        toast.error(data.message || "Erreur lors de l'enregistrement")
      }
    } catch (error) {
      console.error(error)
      // alert("Erreur réseau, réessayez plus tard")
      toast.error("Erreur réseau, réessayez plus tard")
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Left */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#d99306]">Liste d'attente</p>
                <h1 className="mt-3 font-serif text-4xl font-bold text-[#374250] md:text-5xl text-balance">
                  Rejoignez les premiers utilisateurs de GalleConnect Pro
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#3a3a3a]">
                  Inscrivez votre agence à la liste d'attente et soyez informé dès que la plateforme sera disponible. Les places sont limitées pour la phase de lancement.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {benefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fef3db]">
                        <b.icon className="h-5 w-5 text-[#d99306]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#374250]">{b.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#3a3a3a]">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Form */}
              <div className="flex items-start justify-center lg:justify-end">
                <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg shadow-[#d99306]/5">
                  {submitted ? (
                    <div className="flex flex-col items-center py-8 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fef3db]">
                        <CheckCircle2 className="h-8 w-8 text-[#d99306]" />
                      </div>
                      <h2 className="mt-6 text-2xl font-bold text-[#374250]">Merci !</h2>
                      <p className="mt-3 text-[#3a3a3a] leading-relaxed">
                        Votre inscription a bien été enregistrée. Nous vous contacterons dès que GalleConnect Pro sera disponible.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-[#374250]">Inscrivez votre agence</h2>
                      <p className="mt-2 text-sm text-[#3a3a3a]">Remplissez le formulaire ci-dessous pour rejoindre la liste d'attente.</p>

                      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                        <InputField label="Nom complet" name="nomComplet" value={form.nomComplet} onChange={handleChange} placeholder="Ex: Jamil Seye" />
                        <InputField label="Téléphone" name="telephone" value={form.telephone} onChange={handleChange} placeholder="Ex: 77 000 00 00" />
                        <InputField label="Email" name="email" value={form.email} onChange={handleChange} type="email" placeholder="contact@agence.sn" />
                        <InputField label="Nom de l'agence" name="nomAgence" value={form.nomAgence} onChange={handleChange} placeholder="Ex: Immobilier Dakar Centre" />
                        <InputField label="Pays" name="pays" value={form.pays} onChange={handleChange} placeholder="Ex: Sénégal" />
                        <InputField label="Ville" name="ville" value={form.ville} onChange={handleChange} placeholder="Ex: Dakar" />

                        <div className="flex flex-col gap-2">
                          <Label className="text-sm font-medium text-[#374250]">Taille de l'agence</Label>
                          <Select value={form.tailleAgence} onValueChange={handleSelectChange} required>
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder="Nombre d'agents" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 agent (indépendant)</SelectItem>
                              <SelectItem value="2-5">2-5 agents</SelectItem>
                              <SelectItem value="6-15">6-15 agents</SelectItem>
                              <SelectItem value="16-50">16-50 agents</SelectItem>
                              <SelectItem value="50+">50+ agents</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="logicielGestion"
                            name="logicielGestion"
                            checked={form.logicielGestion}
                            onChange={handleChange}
                          />
                          <Label htmlFor="logicielGestion">Nous disposons d'un logiciel de gestion </Label>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Label htmlFor="commentaire">Commentaire (optionnel)</Label>
                          <textarea
                            id="commentaire"
                            name="commentaire"
                            value={form.commentaire}
                            onChange={handleChange}
                            className="rounded-md border border-border p-2"
                            rows={3}
                            placeholder="Informations supplémentaires..."
                          />
                        </div>

                        <Button type="submit" size="lg" className="mt-2 w-full bg-[#d99306] text-white hover:bg-[#c08505]">
                          Rejoindre la liste d'attente
                        </Button>

                        <p className="text-center text-xs text-[#3a3a3a]">
                          En vous inscrivant, vous acceptez de recevoir des emails de Gallé Connect Pro. Vous pouvez vous désinscrire à tout moment.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// Champ réutilisable
function InputField({ label, name, value, onChange, placeholder, type = "text" }: any) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name} className="text-sm font-medium text-[#374250]">{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="bg-background"
      />
    </div>
  )
}