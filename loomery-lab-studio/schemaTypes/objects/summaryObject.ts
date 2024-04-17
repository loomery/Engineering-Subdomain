import {defineField, defineType} from 'sanity'

export const summaryObject = defineType({
    name: 'summaryObject',
    title: 'Summary',
    type: 'object',
    fieldsets: [
        {
          name: 'summary',
          title: 'Summary',
        },
      ],
    fields: [
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
            name: 'contributors',
            title: 'Contributors',
            type: 'array',
            of: [{
              type: 'reference',
              to: [{ type: 'contributorType' }],
            }],
            validation: (Rule) => Rule.required().min(1),
          })
    ]
})
