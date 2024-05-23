import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './loomery-lab-studio/schemaTypes'

export default defineConfig({
  name: 'loomery-lab',
  title: 'Loomery LAB',

  projectId: '84596ftn',
  dataset: 'production',
  document: {
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const {getClient, dataset, document} = context
      const client = getClient({apiVersion: '2024-05-21'})

      if (document._type === 'prototype') {
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
          {postId: document._id}
        )

        // const params = new URLSearchParams()
        // params.set('preview', 'true')
        // params.set('dataset', dataset)

        return `http://localhost:4321/drafts/${slug}`
      }

      return prev
    }
  },

  plugins: [
    structureTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
