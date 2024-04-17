import {defineField, defineType} from 'sanity'

export const contributorType = defineType({
    name: 'contributorType',
    title: 'Contributor',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'Website',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'profileImage',
            title: 'Profile image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
    ]
})
