import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET() {
  try {
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
          {/* Arkam Logo SVG Container */}
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Background Container */}
            <rect
              x="10"
              y="10"
              width="220"
              height="220"
              rx="15"
              fill="rgba(255, 255, 255, 0.1)"
            />

            {/* Gold Circle (bottom left) */}
            <circle cx="45" cy="160" r="18" fill="#c9a961" />

            {/* Navy "A" - Triangle */}
            <polygon points="70,50 95,130 60,130" fill="#001e42" />

            {/* Navy "R" - Text design */}
            <g fill="#001e42">
              {/* Main vertical stroke of R */}
              <rect x="100" y="50" width="20" height="90" rx="4" />

              {/* Top curve of R */}
              <path
                d="M 120 50 Q 150 50 150 75 Q 150 95 130 100"
                strokeWidth="18"
                stroke="#001e42"
                fill="none"
              />

              {/* Diagonal leg of R */}
              <line
                x1="125"
                y1="95"
                x2="155"
                y2="140"
                strokeWidth="18"
                stroke="#001e42"
                strokeLinecap="round"
              />
            </g>
          </svg>

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
