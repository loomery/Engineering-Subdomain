import {defineField, defineType} from 'sanity'

export const goalsObject = defineType({
    name: 'goalsObject',
    title: 'Goals',
    type: 'object',
    description: 'The goals of the prototype, what we wanted to discover.',
    fieldsets: [
        {
          name: 'goals',
          title: 'Goals',
        },
    ],
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'goals',
            title: 'Goals',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})
