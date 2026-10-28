import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const alt = `${site.name} · ${site.headline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "black",
          color: "white",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700 }}>
          {site.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 40, color: "#a1a1aa" }}>
          {site.headline}
        </div>
        <div style={{ marginTop: 48, fontSize: 28, color: "#71717a" }}>
          moibeta.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
