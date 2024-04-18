import {defineField, defineType} from 'sanity'

export const prototypeType = defineType({
  name: 'prototype',
  title: 'Prototypes',
  type: 'document',
  fields: [
    defineField({
      name: 'prototypeName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'prototypeName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
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
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Specific to this prototype, choose about 5. EXCLUDE: Loomery, Loomery Lab, Loomery Prototypes, Loomery Technologies, Loomery Experimentation, Emerging Technologies, Loomery Innovation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'tagType' }],
      }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'heroImageAssets',
      description: "Images for the hero, the first image will be the main image used in the site's meta tags.",
      title: 'Hero Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    {
      name: 'summary',
      title: 'Summary',
      type: 'summaryObject'
    },
    {
      name: 'goals',
      title: 'Goals',
      type: 'goalsObject'
    },
    {
      name: 'actions',
      title: 'Actions',
      type: 'actionsObject'
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      image: 'heroImageAssets.0',
    }
  }
})
