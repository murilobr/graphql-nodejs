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
