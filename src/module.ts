import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

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
    prefix: 'SUI',
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
