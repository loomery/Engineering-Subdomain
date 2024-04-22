import {defineField, defineType} from 'sanity'

export const techStackObject = defineType({
    name: 'techStackObject',
    title: 'Tech stack',
    type: 'object',
    description: 'The tech stack used in the project. (Optional)',
    fieldsets: [
        {
          name: 'techStack',
          title: 'Tech stack',
        },
    ],
    fields: [
        defineField({
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'icon', type: 'image', title: 'Icon' },
                    { name: 'name', type: 'string', title: 'Name' },
                    { 
                        name: 'detail', 
                        type: 'array', 
                        title: 'Detail',
                        of: [{ 
                            type: 'block',
                            styles: [
                                {title: 'Normal', value: 'normal'},
                            ],
                            lists: [],
                        }],
                    },
                ],
            }],
          })
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})
