import React from "react";
import { NAVY, GOLD, RED } from "../constants/theme";
import { BadgeProps } from "../types";

export function Badge({ label, Icon, tone }: BadgeProps) {
  const ring = tone === "dark" ? "rgba(255,255,255,0.16)" : "rgba(21,28,66,0.12)";
  const fg = tone === "dark" ? "#fff" : NAVY;
  const bg = tone === "dark" ? "rgba(255,255,255,0.06)" : "#fff";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: 148 }}>
      <div style={{
        width: 84, height: 84, borderRadius: "50%", background: bg,
        border: `1.5px solid ${ring}`, display: "flex", alignItems: "center",
        justifyContent: "center", boxShadow: tone === "dark" ? "none" : "0 6px 18px rgba(21,28,66,0.08)",
      }}>
        <Icon size={30} color={tone === "dark" ? GOLD : RED} strokeWidth={1.75} />
      </div>
      <span style={{
        fontFamily: "'Work Sans', sans-serif", fontWeight: 600, fontSize: 14.5,
        color: fg, textAlign: "center", lineHeight: 1.3,
      }}>{label}</span>
    </div>
  );
}
