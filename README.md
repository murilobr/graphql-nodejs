# Project steps

1. Initialize NodeJS project

    > npx init

2. Install husky and commitlint and configure them to work together

    > npm install -D husky\
    > npx husky-init\
    > npm install -D commitlint @commitlint/config-conventional @commitlint/cli\
    > npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

3. Install typescript and create config file

    > npm install -D typescript\
    > npx tsc --init

4. install eslint and create config file

    > npm install -D eslint\
    > npx eslint init

5. install prettier and configure to work with eslint

    > npm install -D prettier\
    > npm install -D eslint-config-prettier

6. Install ts-node

    > npm install -D ts-node

7. Install lint-staged and add config to husky
    > npm install -D lint-staged\
    > npx husky add .husky/pre-commit 'npx --no-install lint-staged'

# References

https://typicode.github.io/husky\
https://www.conventionalcommits.org/en/v1.0.0/\
https://github.com/conventional-changelog/commitlint\
https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional\
https://www.typescriptlang.org/docs/handbook/compiler-options.html\
https://github.com/okonet/lint-staged\
https://prettier.io/docs/en/precommit.html\
https://prettier.io/docs/en/integrating-with-linters.html\
https://github.com/prettier/eslint-config-prettier\
https://graphql.org/code/#javascript
