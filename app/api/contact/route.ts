import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, sujet, phone } = body;

    if (!name || !email || !message || !sujet || !phone) {
      return Response.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user:  process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
  from: `"${name}" <${process.env.NODEMAILER_USER}>`,
  to: process.env.NODEMAILER_USER,
  subject: "Nouveau message depuis le galleconnectpro.com",
  replyTo: email,
  text: message, // fallback texte brut
  html: `
    <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:40px;">
      <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:8px;">
        
        <h2 style="color:#111;">📩 Nouveau message</h2>

        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
        ${sujet ? `<p><strong>Sujet :</strong> ${sujet}</p>` : ""}

        <div style="margin-top:20px; padding:15px; background:#f9f9f9; border-radius:6px;">
          <p>${message}</p>
        </div>

        <div style="margin-top:30px; text-align:center;">
          <a href="mailto:${email}"
             style="background:#000; color:white; padding:12px 20px; text-decoration:none; border-radius:5px;">
             Répondre au message
          </a>
        </div>

        <hr style="margin-top:30px; border:none; border-top:1px solid #eee;" />

        <p style="font-size:12px; color:#888;">
          Email envoyé depuis ton galleconnectpro.com - Ne réponds pas à ce message directement, utilise le bouton ci-dessus pour répondre.
        </p>

      </div>
    </div>
  `
});

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur email:", error);
    return Response.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}