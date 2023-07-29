const mapping: Record<string, string> = {
  agencies: 'agency',
  listings: 'listing',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
