import {defineField, defineType} from 'sanity'

export const labReportType = defineType({
  name: 'labReport',
  title: 'Lab Report',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
  ],
})
