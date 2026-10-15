import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const ALLOWED_EVENT_TYPES = [
  "Boda",
  "Evento Corporativo",
  "Evento Social",
];

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error(
        "Faltan las variables de entorno de Resend."
      );

      return NextResponse.json(
        {
          error:
            "El servicio de cotizaciones no está disponible temporalmente.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";

    const eventType =
      typeof body.eventType === "string"
        ? body.eventType.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    // Validar los campos obligatorios.
    if (!name || !email || !phone || !eventType || !message) {
      return NextResponse.json(
        {
          error:
            "Completa todos los campos para solicitar tu cotización.",
        },
        { status: 400 }
      );
    }

    // Limitar la longitud de los datos recibidos.
    if (
      name.length > 120 ||
      email.length > 254 ||
      phone.length > 30 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          error:
            "Uno de los campos supera la longitud permitida.",
        },
        { status: 400 }
      );
    }

    // Validar el formato del correo.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          error:
            "Introduce una dirección de correo válida.",
        },
        { status: 400 }
      );
    }

    if (!ALLOWED_EVENT_TYPES.includes(eventType)) {
      return NextResponse.json(
        {
          error: "Selecciona un tipo de evento válido.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Nueva solicitud de cotización: ${eventType}`,
      text: [
        "NUEVA SOLICITUD DE COTIZACIÓN",
        "",
        `Nombre: ${name}`,
        `Correo electrónico: ${email}`,
        `Teléfono: ${phone}`,
        `Tipo de evento: ${eventType}`,
        "",
        "Detalles del evento:",
        message,
        "",
        "Solicitud recibida desde el sitio web de Signature Events.",
      ].join("\n"),
    });

    if (error) {
      console.error(
        "Error de Resend al enviar la cotización:",
        error
      );

      return NextResponse.json(
        {
          error:
            "No pudimos enviar tu solicitud. Inténtalo nuevamente.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Tu solicitud se envió correctamente. Nos pondremos en contacto contigo.",
    });
  } catch (error) {
    console.error(
      "Error al procesar la solicitud de cotización:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Ocurrió un problema al procesar tu solicitud. Inténtalo nuevamente.",
      },
      { status: 500 }
    );
  }
}