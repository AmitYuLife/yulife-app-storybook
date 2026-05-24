import type { ReactNode } from "react";

export function InteractionStateGrid({ children, minWidth = 280 }: { children: ReactNode; minWidth?: number }) {
  return <div style={{ display: "flex", flexDirection: "column", gap: 24, minWidth }}>{children}</div>;
}

export function InteractionStateRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: 12,
          lineHeight: "16px",
          color: "#838385",
          letterSpacing: "0.4px",
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}
