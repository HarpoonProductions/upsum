import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ]
})



