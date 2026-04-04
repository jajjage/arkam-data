import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

export const runtime = "nodejs";

export async function GET() {
  try {
    // Read the logo file directly from the public folder
    let logoBase64 = null;
    try {
      const logoPath = join(process.cwd(), "public", "images", "logo.png");
      const logoBuffer = await readFile(logoPath);
      logoBase64 = Buffer.from(logoBuffer).toString("base64");
    } catch (err) {
      console.error("Failed to read logo file:", err);
    }

    return new ImageResponse(
      (
        <div
          style={{
            background:
              "linear-gradient(135deg, #0F766E 0%, #115E59 50%, #164E48 100%)",
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
          {/* Logo Container */}
          <div
            style={{
              width: "240px",
              height: "240px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Actual Arkam Logo */}
            {logoBase64 && (
              <img
                src={`data:image/png;base64,${logoBase64}`}
                alt="Arkam Data Logo"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            )}
            {!logoBase64 && (
              <div
                style={{
                  fontSize: "80px",
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: "8px",
                }}
              >
                AR
              </div>
            )}
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "white",
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
              color: "rgba(255, 255, 255, 0.9)",
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
