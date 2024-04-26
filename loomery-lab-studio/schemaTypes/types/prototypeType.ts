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
      name: 'shortVideo',
      type: 'file',
      description: 'A short video of the prototype, keep under 30 seconds, 720p, 16:9, with no sound. (Optional)',
    }),
    defineField({
      name: 'excerpt',
      type: 'array',
      description: 'A short description of the prototype.',
      title: 'Excerpt',
      of: [{ 
          type: 'block',
          styles: [
              {title: 'Normal', value: 'normal'},
          ],
          lists: []
       }],
       validation: (Rule) => Rule.required()
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
      name: 'videoUrl',
      title: 'Demo Video URL',
      type: 'url',
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
      type: 'summaryObject',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'goals',
      title: 'Goals',
      type: 'goalsObject',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'actions',
      title: 'Actions',
      type: 'actionsObject',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'techStack',
      title: 'Tech stack',
      type: 'techStackObject'
    },
    {
      name: 'useCases',
      title: 'Use cases',
      type: 'useCasesObject',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'testimonies',
      title: 'Testimonies',
      type: 'testimonyObject'
    },
    {
      name: 'tryItOut',
      title: 'Try it out CTA',
      type: 'tryItOutObject'
    },
  ],
  preview: {
    select: {
      title: 'prototypeName',
      subtitle: 'subtitle',
      media: 'heroImageAssets.0.asset',
    },
  },
})
