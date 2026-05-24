declare module "*.svg?react" {
  import type { FC, SVGProps } from "react";
  const SVGComponent: FC<SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

interface RequireContext {
  keys(): string[];
  (id: string): unknown;
  <T>(id: string): T;
  resolve(id: string): string;
  id: string;
}

interface RequireFunction {
  context(path: string, deep?: boolean, filter?: RegExp): RequireContext;
}

declare const require: RequireFunction;
