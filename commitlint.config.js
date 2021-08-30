module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore', 'deps']],
    'header-max-length': [2, 'always', 80],
    'subject-case': [2, 'always', ['sentence-case', 'start-case']],
  }
}
