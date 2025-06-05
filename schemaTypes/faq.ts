// schemas/faq.ts
import { defineType, defineField } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required().max(200)
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
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'summaryForAI',
      title: 'Summary for AI and Snippets',
      type: 'text',
      description: 'A concise 1–2 sentence answer for use in AI responses and featured snippets.'
    }),
    defineField({
      name: 'alternateQuestions',
      title: 'Alternate Phrasings',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Other common ways this question might be asked.'
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional tags or phrases to improve searchability and categorization.'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'faqCategory' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'relatedFAQs',
      title: 'Related FAQs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
      description: 'FAQs that are thematically related or commonly linked.'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime'
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }]
    }),
    defineField({
      name: 'image',
      title: 'Image (Optional)',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'schemaMarkup',
      title: 'Custom Schema Markup (JSON-LD)',
      type: 'text',
      description: 'Optionally override the auto-generated FAQ schema with your own JSON-LD.'
    })
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category.title'
    }
  }
})
