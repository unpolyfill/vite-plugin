export interface VitePluginOptions {
  lastNameUpperCase?: boolean;
}

export function vitePlugin(firstName: string, lastName: string, options?: VitePluginOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
