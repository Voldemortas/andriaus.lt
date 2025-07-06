# bun-react-server-2

## Requirements

* git (obviously)
* bun v.1.2.17 (may work on newer versions too)

## Instalation

move to desired (new) directory:
```
git clone https://github.com/Voldemortas/bun-react-server-2 .
git remote remove origin
bun install
```

## Code tree

Define routes in `/src/pages.ts`  
Write react code in `/src/front/` (each route component is suggested to be in its own directory)  
Write backend code in `/src/back/`  
Add static content in `/src/static/`

## Building details

Code building works in several steps:

0. Removes `/out/` directory and creates an empty one
1. Copies content from `/src/static` to `/out/static`
2. Creates `/temp/` directory and copies content from `/src/front/` there
3. Runs _SASS_ compiler on `*.scss` files found in `/temp` and creates corresponding `[name].css` files
4. If the file was `*.module.scss` and it had `$uniqueId` then creates `[name].js` file used for unique-prefixed styles
5. Checks every `*.tsx` file and updates imports for original `*.module.scss` to include both new compiled `.css` and
   `.js` files
6. Checks `/src/pages/` for _React_ entry points and based on them builds single `[name].js` and `[name].css` files into
   `/out/front/` directory
7. Compiles `/src/back/server.ts` into bundled `/out/back/server.js`

## Predefined commands

`bun run build` - builds dev (by default) build  
`bun run build-prod` - builds production build (minifies and other stuff)  
`bun run watch` - builds dev build and serves code while actively watching for code changes - **not bug free**  
`bun run serve` - serves built code from `/out/back/server.js`  
`bun run serve-pm2` - serves built code from `/out/back/server.js` with `pm2` (`bun install pm2 -g` to install it
globally)

## Environment variables

Project port to serve can be set with `PORT`, otherwise `NODE_PORT` or the default (`3000`) ports will be used

## Caveats

~~[Css Modules](https://github.com/css-modules/css-modules) are not supported~~
hence [BEM](https://getbem.com/introduction/) is suggested. Having each react-route in a separate directory is highly
suggested for this reason.  
[Css Modules](https://github.com/css-modules/css-modules) are semi-supported now for `*.module.scss` files, to use them
follow this snippet:

```scss
.italic {
  font-style: italic;
}
```

```tsx
//MyComponent.tsx
import React from 'react'
import styles from 'myModule.module.scss'

export default function MyComponent() {
  return <div className={styles('italic')}>Hello world!</div>
}
```

Sass generated `$uniqueId` is required in order for custom css modules implementation to work.

~~_Pm2_ is not supported as it's not that friendly with a bun runtime.~~

Pm2 can be run by bun, so it works now, see `package.json` for a working example.

---

This project was created by stripping some parts from [Kalbynas@6ee6e45](https://github.com/Voldemortas/kalbynas/tree/6ee6e45e9c8e185f31dc9f3a6b94ec3baf336d8b).