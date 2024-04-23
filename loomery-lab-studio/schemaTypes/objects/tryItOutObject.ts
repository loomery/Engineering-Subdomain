import {defineField, defineType} from 'sanity'

export const tryItOutObject = defineType({
    name: 'tryItOutObject',
    title: 'Try It Out CTA',
    type: 'object',
    description: 'A call to action to try out the prototype. (Optional)',
    fields: [
        defineField({
            name: 'link',
            title: 'Link',
            description: 'A link to were the reader can try the prototype out for themselves.',
            type: 'url',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            hidden: ({ parent }) => !parent?.link,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
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
            name: 'includeAppStoreBadge',
            title: 'Include App Store Badge',
            type: 'boolean',
            hidden: ({ parent }) => !parent?.link,
        }),
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})
