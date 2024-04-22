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
                  { name: 'quote', type: 'string', title: 'Quote' },
                  { name: 'author', type: 'string', title: 'Author' },
                ],
            }],
          })
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})
