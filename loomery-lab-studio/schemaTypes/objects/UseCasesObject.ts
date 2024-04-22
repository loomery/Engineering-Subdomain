import {defineField, defineType} from 'sanity'

export const useCasesObject = defineType({
    name: 'useCasesObject',
    title: 'Use Cases',
    type: 'object',
    description: 'The industry use cases for the technology powering this prototype.',
    fieldsets: [
        {
          name: 'useCases',
          title: 'Use Cases',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'useCases',
            title: 'Use Cases',
            type: 'array',
            of: [{ type: 'useCaseObject' }],
          }),
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})

export const useCaseObject = defineType({
    name: 'useCaseObject',
    title: 'Use Case',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            description: 'Best to use a 16:9 image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            type: 'array',
            description: 'The body text describing the use case. Make sure to prefix "https://" for any links.',
            title: 'Content',
            of: [{ 
                type: 'block',
                styles: [
                    {title: 'Normal', value: 'normal'},
                ],
                lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Numbered', value: 'number'},
                ]
             }]
        }),
    ]
})
