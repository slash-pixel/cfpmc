import React from "react";
import { NAVY, GOLD, RED } from "../constants/theme";

export function Logo({ light }: { light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <circle cx="17" cy="17" r="17" fill={light ? "#fff" : NAVY} />
        <path d="M17 6 L23 14 L17 22 L11 14 Z" fill={GOLD} />
        <circle cx="17" cy="17" r="5.5" fill={RED} />
      </svg>
      <span style={{
        fontFamily: "'Big Shoulders Display', sans-serif",
        fontWeight: 800, fontSize: 22, letterSpacing: 0.5,
        color: light ? "#fff" : NAVY,
      }}>CFPMC</span>
    </div>
  );
}
