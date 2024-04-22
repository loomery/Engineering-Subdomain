import {defineField, defineType} from 'sanity'

export const actionsObject = defineType({
    name: 'actionsObject',
    title: 'Actions',
    type: 'object',
    description: 'The actions/steps taken to build the prototype.',
    fieldsets: [
        {
          name: 'actions',
          title: 'Actions',
        },
    ],
    fields: [
        defineField({
            name: 'actions',
            title: 'Actions',
            type: 'array',
            of: [{ type: 'actionObject' }],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})

export const actionObject = defineType({
    name: 'actionObject',
    title: 'Action',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
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
            description: 'The body text for the step we took to build the prototype. Make sure to prefix "https://" for any links.',
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
