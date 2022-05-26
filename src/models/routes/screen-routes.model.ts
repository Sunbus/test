import { ProductId } from '@models/dtm'


export const ScreenRoutes = {
  root: () => '/',

  // non-authorised routes
  signUp: () => '/sign-up',
  signUpEmailSent: () => '/sign-up-email-sent',
  confirmAccount: () => '/confirm-account',
  resetPassword: () => '/reset-password',
  setNewPassword: () => '/set-new-password',
  resetPasswordDone: () => '/reset-password-done',
  managerLogin: () => '/manager/login',
  managerLoginOld: () => '/manager-login',

  // authorized users
  userRoot: () => '/customer',
  userIncomingFiles: () => '/customer/incoming-files',
  userSecureFileUpload: () => '/customer/secure-file-upload',
  userDatabases: () => '/customer/databases',
  userProductsDemo: () => '/customer/products-demo',
  userDocumentationForDevelopers: () => '/customer/documentation-for-developers',
  userFeatureSuggest: () => '/customer/feature-suggest',
  userProfile: () => '/customer/profile',
  userEditProfile: () => '/customer/profile/edit',
  userChangePassword: () => '/customer/profile/change-password',
  userContactSales: () => '/customer/contact-sales',
  userContactSalesModal: () => 'contact-sales',
  userLicenseList: () => '/customer/licenses',
  userLicenseListLicense: (id: string | number = ':id', containerId: string = ':containerId') => `/customer/licenses/${containerId}/${id}`,
  userLicenseListLicenseProduct: (
    id: string | number = ':id',
    containerId: string = ':containerId',
    productId: ProductId | string =':productId'
  ) => `/customer/licenses/${containerId}/${id}/${productId}`,
  userLicenseListLicenseProductRenew: (
    id: string = ':id',
    containerId: string = ':containerId',
    productId: ProductId | string =':productId'
  ) => `/customer/licenses/${containerId}/${id}/${productId}/renew`,
  userLicenseListLicenseAppid: (
    id: string = ':id',
    containerId: string = ':containerId',
    productId: ProductId | string = ':productId',
    appId?: string,
  ) => `/customer/licenses/${containerId}/${id}/${productId}/${!appId ? ':appId' : encodeURIComponent(appId)}`,

  // authorized manages
  managerRoot: () => '/manager',
  managerDatabases: () => '/manager/databases',
  managerProductsDemo: () => '/manager/products-demo',
  managerDocumentationForDevelopers: () => '/manager/documentation-for-developers',
  managerFeatureSuggest: () => '/manager/feature-suggest',
  managerLicenseList: () => '/manager/licenses',
  managerLicenseListLicense: (id: string | number = ':id', containerId: string = ':containerId') => `/manager/licenses/${containerId}/${id}`,
  managerLicenseListLicenseProduct: (
    id: string | number = ':id',
    containerId: string = ':containerId',
    productId: ProductId | string =':productId'
  ) => `/manager/licenses/${containerId}/${id}/${productId}`,
  managerLicenseListLicenseAppid: (
    id: string = ':id',
    containerId: string = ':containerId',
    productId: ProductId | string = ':productId',
    appId?: string,
  ) => `/manager/licenses/${containerId}/${id}/${productId}/${!appId ? ':appId' : encodeURIComponent(appId)}`,
  managerDashboard: () => '/manager/dashboard',
  managerDashboardAll: (
    from: string = ':from',
    to: string = ':to',
    granularity: string = ':granularity',
  ) => `/manager/dashboard/${from}/${to}/${granularity}/all`,
  managerDashboardInstances: (
    from: string = ':from',
    to: string = ':to',
    granularity: string = ':granularity',
  ) => `/manager/dashboard/${from}/${to}/${granularity}/instances`,
  managerDashboardProd: (
    from: string = ':from',
    to: string = ':to',
    granularity: string = ':granularity',
  ) => `/manager/dashboard/${from}/${to}/${granularity}/prod`,
  managerDashboardTrial: (
    from: string = ':from',
    to: string = ':to',
    granularity: string = ':granularity',
  ) => `/manager/dashboard/${from}/${to}/${granularity}/trial`,
  managerDashboardDev: (
    from: string = ':from',
    to: string = ':to',
    granularity: string = ':granularity',
  ) => `/manager/dashboard/${from}/${to}/${granularity}/dev`,
  managerDashboardUsers: (
    from: string = ':from',
    to: string = ':to',
    granularity: string = ':granularity',
  ) => `/manager/dashboard/${from}/${to}/${granularity}/users`,
  managerDashboardCountriesAndVersions: (
    from: string = ':from',
    to: string = ':to',
    granularity: string = ':granularity',
  ) => `/manager/dashboard/${from}/${to}/${granularity}/countries-and-versions`,
}
