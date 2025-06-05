import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import customStructure from './schemaTypes/structure'

export default defineConfig({
  name: 'default',
  title: 'Upsum',

  projectId: 'rpufi5bg',
  dataset: 'production',

 plugins: [
  deskTool({ structure: customStructure }),
  visionTool()
],


  schema: {
    types: schemaTypes,
  },
})