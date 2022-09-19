import { Style } from "@styles";

export const FLOATING_ANIMATION = require("./assets/Floating.json");
export const EXPLOSION_ANIMATION = require("./assets/Explosion.json");

export const STAR_ASSET = require("./assets/planets/Star.png");

export const PLANET_RADIUS = Style.adjust(64);
export const PLANET_CONTAINER_RADIUS = Style.adjust(322);
export const YUMOJI_HEIGHT = Style.adjust(58);
export const STAR_RADIUS = Style.adjust(20);

export const INITIAL_ANIMATION_DELAY = 500;
export const PIN_FADE_OUT_DURATION = 500;

export const STAR_FADE_IN_DELAY = 200;
export const STAR_FADE_IN_DURATION = 500;

export const SPINNING_ANIMATION_FADE_OUT_DURATION = 1000;
export const PLANET_FADE_IN_DURATION = 1000;
export const PIN_FADE_IN_DURATION = 500;

export const UNREVEALED_PLANET_FADE_OUT_DURATION = 1000;
export const SPINNING_ANIMATION_FADE_IN_DURATION = 1000;

export const SPACE_TRAVEL_ANIMATION_DURATION =
  INITIAL_ANIMATION_DELAY +
  SPINNING_ANIMATION_FADE_OUT_DURATION +
  PLANET_FADE_IN_DURATION +
  PIN_FADE_OUT_DURATION +
  PIN_FADE_IN_DURATION;
