import { defineConfig } from 'skills-npm'

export default defineConfig({
  source: 'node_modules',
  agents: ['windsurf'],
  gitignore: true,
  include: [
    {
      package: 'base-skills',
      skills: [
        'detail-plan',
        'gen-specs',
        'grill',
        'idea-plan',
        'impl-specs',
        'research-and-analyse',
        'caveman',
        'cavecrew',
        'caveman-help',
        'compress',
      ],
    },
  ],
})
