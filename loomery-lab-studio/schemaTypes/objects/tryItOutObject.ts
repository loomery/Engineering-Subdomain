import {defineField, defineType} from 'sanity'

export const tryItOutObject = defineType({
    name: 'tryItOutObject',
    title: 'Try It Out CTA',
    type: 'object',
    fields: [
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
            hidden: ({ parent }) => !parent?.link,
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            description: 'If you are going to include this CTA, if nothing else include this heading.',
            type: 'string',
            hidden: ({ parent }) => !parent?.link,
        }),
        defineField({
            name: 'content',
            type: 'array',
            description: 'The body text to the CTA.',
            title: 'Content',
            of: [{ 
                type: 'block',
                styles: [
                    {title: 'Normal', value: 'normal'},
                ],
                lists: [],
                marks: {}
             }],
             hidden: ({ parent }) => !parent?.link,
        }),
        defineField({
            name: 'appStoreBagde',
            title: 'Include App Store Badge',
            type: 'boolean',
            hidden: ({ parent }) => !parent?.link,
        }),
    ],
    options: {
        collapsible: true,
    },
})
