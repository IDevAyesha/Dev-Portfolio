import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f7f6f2",
          color: "#0c1a33",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#0c1a33",
              color: "#f7f6f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
            }}
          >
            AA
          </div>
          <div style={{ fontSize: 26, color: "#3c4a63" }}>{profile.role}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#3c4a63", maxWidth: 900, lineHeight: 1.3 }}>
            Building reliable web applications that solve real business problems.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 22, color: "#2952cc" }}>
          React · Next.js · TypeScript · Node.js
        </div>
      </div>
    ),
    size,
  );
}
