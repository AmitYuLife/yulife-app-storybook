import { createContext } from "react";

interface IYuScreenContext {
  yumojiRemoteUrl: string;
  earnRate: number;
}

export const YuScreenContext = createContext<IYuScreenContext>({
  yumojiRemoteUrl: null,
  earnRate: 1,
});
