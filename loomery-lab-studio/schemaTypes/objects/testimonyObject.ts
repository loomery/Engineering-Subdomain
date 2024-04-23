import {defineField, defineType} from 'sanity'

export const testimonyObject = defineType({
    name: 'testimonyObject',
    title: 'Testimonies',
    type: 'object',
    description: 'The testimonies given to the project. (Optional)',
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
                  { name: 'quote', type: 'string', title: 'Quote', validation: (Rule) => Rule.required() },
                  { name: 'author', type: 'string', title: 'Author', validation: (Rule) => Rule.required() },
                ],
            }],
            validation: (Rule) => Rule.required().min(1),
          })
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})
