import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './loomery-lab/schemaTypes'
import {getStartedPlugin} from './loomery-lab/plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'loomery-lab',
  title: 'Loomery LAB',

  projectId: '84596ftn',
  dataset: 'production',

  plugins: [structureTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
