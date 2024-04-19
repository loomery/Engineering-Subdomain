import {defineField, defineType} from 'sanity'

export const testimonyObject = defineType({
    name: 'testimonyObject',
    title: 'Testimonies',
    type: 'object',
    fieldsets: [
        {
          name: 'testimonies',
          title: 'Testimonies',
        },
    ],
    fields: [
        defineField({
            name: 'testimonies',
            title: 'Testimonies',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                  { name: 'quote', type: 'string', title: 'Quote' },
                  { name: 'author', type: 'string', title: 'Author' },
                ],
            }],
            validation: (Rule) => Rule.required(),
          })
    ],
    options: {
        collapsible: true,
    },
})
