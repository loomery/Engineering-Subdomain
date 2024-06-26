import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const tagType = defineType({
    name: 'tagType',
    title: 'Tags',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
    ]
})
