const mapping: Record<string, string> = {
  forms: 'form',
  organizations: 'organization',
  responses: 'response',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
