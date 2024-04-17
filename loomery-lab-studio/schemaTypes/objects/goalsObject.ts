import {defineField, defineType} from 'sanity'

export const goalsObject = defineType({
    name: 'goals',
    title: 'Goals',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Goals heading',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'goals',
            title: 'Goals',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required(),
          }),
    ]
})
