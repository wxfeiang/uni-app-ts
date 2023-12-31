/*
eiang
 * @Description:
 * @Date: 2023-02-19 10:04:58
 * @LastEditTime: 2023-09-04 16:05:04
 * @FilePath: /uni-app-ts/commitlint.config.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature',
        'fix',
        "docs",
        "style",
        'refactor',
        'refactor',
        'test',
        'build',
        'ci',
        'revert',
        'chore'




      ],
    ],
    // <type> 格式 小写
    'type-case': [2, 'always', 'lower-case'],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <scope> 范围不能为空
    'scope-empty': [2, 'never'],
    // <scope> 范围格式
    'scope-case': [0],
    // <subject> 主要 message 不能为空
    'subject-empty': [2, 'never'],
    // <subject> 以什么为结束标志，禁用
    'subject-full-stop': [0, 'never'],
    // <subject> 格式，禁用
    'subject-case': [0, 'never'],
    // <body> 以空行开头
    'body-leading-blank': [1, 'always'],
    'header-max-length': [0, 'always', 72],
  },
};
