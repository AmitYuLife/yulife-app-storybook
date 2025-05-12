import { Style } from "@styles";

// Reserve space for the title (at the top) and cta container (at the bottom).
// This gives us an indication of the max height of the chest can be, so we can scale it down on smaller screens.
const TITLE_SECTION_HEIGHT = 160;
const CTA_CONTAINER_HEIGHT = 300;

export const CHEST_MAX_HEIGHT = Style.DEVICE_HEIGHT - CTA_CONTAINER_HEIGHT - TITLE_SECTION_HEIGHT;
export const CHEST_ASPECT_RATIO = 375 / 353;

export const CHEST_HEIGHT = Math.min(Style.DEVICE_WIDTH / CHEST_ASPECT_RATIO, CHEST_MAX_HEIGHT);
export const CHEST_WIDTH = CHEST_HEIGHT * CHEST_ASPECT_RATIO;
