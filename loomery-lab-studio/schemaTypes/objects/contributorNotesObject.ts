import {defineField, defineType} from 'sanity'

export const contributorNotesObject = defineType({
    name: 'contributorNotesObject',
    title: 'Contributor Notes',
    type: 'object',
    description: 'Any contributor notes not covered in the main sections. (Optional)',
    fieldsets: [
        {
          name: 'contributorNotes',
          title: 'Contributor Notes',
        },
    ],
    fields: [
      defineField({
        name: 'notes',
        title: 'Notes',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'content',
                title: 'Content',
                type: 'array',
                of: [{type: 'block'}],
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'contributor',
                title: 'Contributor',
                type: 'reference',
                to: [{type: 'contributorType'}],
                validation: (Rule) => Rule.required(),
              }
            ],
          }
        ],
        validation: (Rule) => Rule.required(),
      })
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})
