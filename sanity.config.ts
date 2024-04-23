import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './loomery-lab-studio/schemaTypes'
import {getStartedPlugin} from './loomery-lab-studio/plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'loomery-lab',
  title: 'Loomery LAB',

  projectId: '84596ftn',
  dataset: 'production',
  build: {
    basePath: '/loomery-lab-studio',
  },

  plugins: [structureTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
