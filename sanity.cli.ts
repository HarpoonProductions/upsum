import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'rpufi5bg',
    dataset: 'production',
  },
  studio: {
    host: 'upsum',
  },
})
