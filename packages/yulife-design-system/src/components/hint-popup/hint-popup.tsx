import { CSSProperties, memo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";

export interface IHintPopupProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  hideCloseButton?: boolean;
  onPress?: () => void;
  onClose: () => void;
  style?: CSSProperties;
}

const HintPopup = ({
  title,
  description,
  buttonLabel = "Got it",
  hideCloseButton,
  onPress,
  onClose,
  style,
}: IHintPopupProps) => {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "20px",
    backgroundColor: Colours.neutral.white,
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
    ...style,
  };

  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const titleStyle: CSSProperties = {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "24px",
    color: Colours.neutral.n900,
    flex: 1,
    margin: 0,
  };

  const descStyle: CSSProperties = {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: Colours.neutral.n700,
    margin: 0,
  };

  const closeStyle: CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    color: Colours.neutral.n600,
    display: "flex",
  };

  const buttonStyle: CSSProperties = {
    padding: "12px 24px",
    borderRadius: "50px",
    border: `1px solid ${Colours.neutral.n200}`,
    backgroundColor: Colours.neutral.white,
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: "16px",
    color: Colours.neutral.n900,
    cursor: "pointer",
    width: "100%",
  };

  return (
    <div style={containerStyle} role="dialog" aria-modal={true}>
      <div style={headerStyle}>
        {title && <p style={titleStyle}>{title}</p>}
        {!hideCloseButton && (
          <button style={closeStyle} onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
      {description && <p style={descStyle}>{description}</p>}
      <button style={buttonStyle} onClick={onPress ?? onClose}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default memo(HintPopup);
