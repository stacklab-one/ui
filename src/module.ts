import { defineNuxtModule, addPlugin, createResolver, installModule, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string
  global?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'stacklab-one-ui',
    configKey: '@stacklab-one/ui',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    global: true,
    prefix: 'S1',
  },
  async setup(options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))

    await installModule('@nuxtjs/tailwindcss')

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'elements'),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    })
  },
})
