This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!

## Start Hardhat local test node
npx hardhat node
npx hardhat --network localhost run scripts/deploy.js

And wallet select 'Localhost 8545' network

## references
https://hardhat.org/tutorial/boilerplate-project
https://reactrouter.com/en/main/router-components/memory-router
https://charlypoly.com/publications/react-memory-router-pattern
https://mui.com/material-ui/api/select/
https://github.com/trustwallet/wallet-core
https://github.com/trustwallet/wallet-core/blob/master/samples/node/index.ts
https://merehead.com/blog/how-to-create-crypto-wallet-metamask/
https://github.com/MoralisWeb3/moralis-blueprints
https://github.com/atilatech/aqua-wallet/blob/master/src/utils/AccountUtils.ts
https://atila.ca/blog/tomiwa/how-to-make-a-blockchain-crypto-wallet-like-metamask-with-chatgpt-react-typescript-and-ethersjs