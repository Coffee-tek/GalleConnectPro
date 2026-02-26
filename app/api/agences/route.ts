import { NextResponse } from "next/server"
import { createAgence } from "../../../services/agenceServices" 

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const agence = await createAgence(data)
    return NextResponse.json(agence, { status: 201 })
  } catch (error: any) {
    console.error("Erreur API:", error)  // <- ajoute ça
    return NextResponse.json({ message: error.message || "Erreur interne" }, { status: 500 })
  }
}