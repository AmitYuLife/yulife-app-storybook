export type AdBanner = {
  id: string;
  navigateTo: string;
  navigateToType: string;
  routeProps?: string | null;
  startDate: string;
  endDate?: string | null;
  imageUrl: { uri?: string | null };
};
