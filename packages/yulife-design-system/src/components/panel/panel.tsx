import { CSSProperties, HTMLAttributes, ReactNode, forwardRef, memo, useMemo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";

export interface IPanelProps extends Omit<HTMLAttributes<HTMLDivElement>, "style" | "title"> {
  children?: ReactNode;
  title?: string;
  onClose?: () => void;
  padding?: number;
  backgroundColor?: string;
  style?: CSSProperties;
}

const Panel = forwardRef<HTMLDivElement, IPanelProps>(
  (
    { children, title, onClose, padding = 16, backgroundColor = Colours.neutral.white, style: propStyle, ...props },
    ref
  ) => {
    const containerStyle = useMemo(
      (): CSSProperties => ({
        padding: `${padding}px`,
        backgroundColor,
        borderRadius: "16px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
        ...propStyle,
      }),
      [padding, backgroundColor, propStyle]
    );

    const headerStyle: CSSProperties = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: title ? "12px" : "0",
    };

    const titleStyle: CSSProperties = {
      fontFamily: FONT_FAMILY_PRIMARY_BOLD,
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "24px",
      margin: 0,
      color: Colours.neutral.n900,
    };

    const closeButtonStyle: CSSProperties = {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      color: Colours.neutral.n700,
    };

    return (
      <div ref={ref} style={containerStyle} {...props}>
        {(title || onClose) && (
          <div style={headerStyle}>
            {title && <h3 style={titleStyle}>{title}</h3>}
            {onClose && (
              <button onClick={onClose} style={closeButtonStyle} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    );
  }
);

Panel.displayName = "Panel";

export default memo(Panel);
