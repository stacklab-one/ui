import {
    defineNuxtModule,
    addPlugin,
    createResolver,
    installModule,
    addComponentsDir,
    addImportsDir,
} from "@nuxt/kit";
import installTailwind from "./tailwind";

// Module options TypeScript interface definition
export interface ModuleOptions {
    prefix?: string;
    global?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: "stacklab-one-ui",
        configKey: "@stacklab-one/ui",
    },
    // Default configuration options of the Nuxt module
    defaults: {
        global: true,
        prefix: "S1",
    },
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url);
        const runtimeDir = resolve("./runtime");

        // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
        addPlugin(resolve("./runtime/plugin"));

        await installTailwind(options, nuxt, resolve);

        addComponentsDir({
            path: resolve(runtimeDir, "components", "elements"),
            prefix: options.prefix,
            global: options.global,
            watch: false,
        });

        addImportsDir(resolve(runtimeDir, "composables"));
    },
});
