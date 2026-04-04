import { readFileSync } from "fs";
import { ImageResponse } from "next/og";
import { join } from "path";

export const runtime = "nodejs";

export async function GET() {
  try {
    // Read the logo image file
    const logoPath = join(process.cwd(), "public", "images", "logo.png");
    const logoData = readFileSync(logoPath);
    const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

    return new ImageResponse(
      (
        <div
          style={{
            background: "#ffffff",
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "40px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {/* Logo Image Container */}
          <div
            style={{
              width: "280px",
              height: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoBase64}
              alt="Arkam Data Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "#001e42",
              textAlign: "center",
              marginBottom: "10px",
              lineHeight: "1.2",
            }}
          >
            ARKAM DATA
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "28px",
              color: "#0F766E",
              textAlign: "center",
              fontWeight: "500",
              maxWidth: "900px",
            }}
          >
            Premium Data & Airtime Services
          </div>

          {/* Decorative bottom bar */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "8px",
              background: "linear-gradient(90deg, #14b8a6 0%, #06b6d4 100%)",
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
