import {defineField, defineType} from 'sanity'

export const techStackObject = defineType({
    name: 'techStackObject',
    title: 'Tech stack',
    type: 'object',
    description: 'A stack of icons that can be used to tell a narrative. (Optional)',
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
                    { 
                        name: 'icon', 
                        description: 'Ideally choose an image as close to 1:1 as possible', 
                        type: 'image', 
                        title: 'Icon' 
                    },
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
            validation: (Rule) => Rule.required().min(1),
          })
    ],
    options: {
        collapsible: true,
        collapsed: true,
    },
})
