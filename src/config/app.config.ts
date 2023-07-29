interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Real Estate Agent'],
  customerRoles: ['Buyer'],
  tenantRoles: ['Real Estate Agent'],
  tenantName: 'Agency',
  applicationName: 'MyImoveisTeste',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
