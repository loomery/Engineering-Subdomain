import {defineField, defineType} from 'sanity'

export const prototypeType = defineType({
  name: 'prototype',
  title: 'Prototypes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'developers',
      title: 'Developers',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'developerType' }],
      }],
      validation: (Rule) => Rule.required().min(1),
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      image: 'heroImageAssets.0',
    }
  }
})
