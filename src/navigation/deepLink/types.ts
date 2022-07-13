export type DeepLinkActionArgs = {
  currentRoute: string;
  rootUrl: string;
  customParams?: Record<string, string>;
  hasToken: boolean;
};

export type DeepLinkHandler = {
  unauthorisedOnly?: boolean;
  name: string;
  action: (args: DeepLinkActionArgs) => void | Promise<void>;
};
