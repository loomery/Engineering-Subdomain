import {defineField, defineType} from 'sanity'
import { OlistIcon } from '@sanity/icons'

export const approachType = defineType({
  name: 'approach',
  title: 'Our approach',
  type: 'document',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImageAssets',
      description: "Images for the hero, the first image will be the main image used in the site's meta tags.",
      title: 'Hero Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    {
        name: 'whoWeAre',
        title: 'Who we are',
        type: 'techStackObject'
    },
    {
        name: 'techWeAreUsing',
        title: 'Technology we are using',
        type: 'useCasesObject',
    },
    {
      name: 'howWeExperiment',
      title: 'How we experiment with AI',
      type: 'techStackObject'
    },
  ]
})
