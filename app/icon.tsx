import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FDF9F3",
          color: "#1A1814",
          fontSize: 20,
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.04em",
        }}
      >
        G
      </div>
    ),
    size,
  );
}
