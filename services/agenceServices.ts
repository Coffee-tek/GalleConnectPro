import { prisma } from "../lib/prisma"

export async function createAgence(data: {
  nomComplet: string
  telephone: string
  email: string
  nomAgence: string
  pays: string
  ville: string
  tailleAgence: string
  logicielGestion: boolean
  commentaire?: string
}) {
  try {
    const agence = await prisma.agence.create({
      data: {
        nomComplet: data.nomComplet,
        telephone: data.telephone,
        email: data.email,
        nomAgence: data.nomAgence,
        pays: data.pays,
        ville: data.ville,
        tailleAgence: data.tailleAgence,
        logicielGestion: data.logicielGestion,
        commentaire: data.commentaire,
      },
    })
    return agence
  } catch (error: any) {
    console.error("Erreur création agence:", error)
    throw new Error(error.message || "Erreur lors de la création de l'agence")
  }
}