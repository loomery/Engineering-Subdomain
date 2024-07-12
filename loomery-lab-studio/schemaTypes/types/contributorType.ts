import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const contributorType = defineType({
    name: 'contributorType',
    title: 'Contributor',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
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
