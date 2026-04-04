import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET() {
  try {
    // Fetch the logo image as a buffer from the public folder
    const logoUrl = new URL(
      "/images/logo.png",
      process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://safzandatasub.com"
    );

    const logoData = await fetch(logoUrl.href)
      .then((res) => res.arrayBuffer())
      .catch(() => null);

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
            {logoData && (
              <img
                src={`data:image/png;base64,${Buffer.from(logoData).toString("base64")}`}
                alt="Arkam Data Logo"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            )}
            {!logoData && (
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
