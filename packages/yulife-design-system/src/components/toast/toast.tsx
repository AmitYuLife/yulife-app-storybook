import { CSSProperties, ReactNode, memo, useEffect, useMemo, useState } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY } from "../../tokens/typography";

type ToastVariant = "success" | "error" | "warning" | "info";

export interface IToastProps {
  message: string;
  variant?: ToastVariant;
  visible?: boolean;
  duration?: number;
  onDismiss?: () => void;
  icon?: ReactNode;
  style?: CSSProperties;
}

const VARIANT_MAP: Record<ToastVariant, { bg: string; border: string; color: string }> = {
  success: { bg: Colours.status.su100, border: Colours.status.su300, color: "#1a7a2e" },
  error: { bg: Colours.status.er100, border: Colours.status.er300, color: "#cc2222" },
  warning: { bg: Colours.status.wa100, border: Colours.status.wa300, color: "#8a5a00" },
  info: { bg: Colours.status.in100, border: Colours.status.in300, color: "#2a5aaa" },
};

const Toast = ({ message, variant = "info", visible = true, duration = 4000, onDismiss, icon, style }: IToastProps) => {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    setShow(visible);
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        setShow(false);
        onDismiss?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, onDismiss]);

  const colors = VARIANT_MAP[variant];

  const containerStyle = useMemo(
    (): CSSProperties => ({
      display: show ? "flex" : "none",
      alignItems: "center",
      gap: "10px",
      padding: "12px 16px",
      borderRadius: "8px",
      backgroundColor: colors.bg,
      border: `1px solid ${colors.border}`,
      fontFamily: FONT_FAMILY_PRIMARY,
      fontSize: "14px",
      lineHeight: "18px",
      color: colors.color,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      ...style,
    }),
    [show, colors, style]
  );

  if (!show) {
    return null;
  }

  return (
    <div role="alert" style={containerStyle}>
      {icon}
      <span style={{ flex: 1 }}>{message}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: colors.color,
            padding: "2px",
            display: "flex",
          }}
          aria-label="Dismiss"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default memo(Toast);
