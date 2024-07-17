import {defineField, defineType} from 'sanity'
import { OlistIcon } from '@sanity/icons'

export const approachType = defineType({
  name: 'approach',
  title: 'Our approach',
  type: 'document',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    {
        name: 'whoWeAre',
        title: 'Who we are',
        type: 'techStackObject'
    },
    {
        name: 'howWeExperiment',
        title: 'How we experiment',
        type: 'techStackObject'
    },
    {
        name: 'techWeAreUsing',
        title: 'Technology we are using',
        type: 'useCasesObject',
    },
  ]
})
