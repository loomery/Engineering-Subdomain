import {defineField, defineType} from 'sanity'

export const prototypeType = defineType({
  name: 'prototype',
  title: 'Prototype',
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
      description: 'Images for the hero, the first image will be the main image',
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
})
