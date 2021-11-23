# Project steps

> npx init

> npm install -D husky
> npx husky-init
> npm install -D commitlint @commitlint/config-conventional @commitlint/cli
> npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
