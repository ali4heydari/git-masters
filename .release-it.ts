import type { Config } from 'release-it';

export default {
  git: {
    commitMessage: 'chore(release): bump version to v${version}',
    tagAnnotation: 'Release v${version}',
    tagName: 'v${version}',
    requireCommits: true,
    push: false,
    getLatestTagFromAllRefs: true,
  },
  npm: {
    publish: false,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
      },
      infile: 'CHANGELOG.md',
    },
  },
} satisfies Config;
