// src/app/api/pdf/route.ts
import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { PDFResume } from "@/components/PDFResume";
import React from "react";

export async function GET() {
  try {
    const buffer = await renderToBuffer(React.createElement(PDFResume));

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "PDF generation failed" },
      { status: 500 }
    );
  }
}
