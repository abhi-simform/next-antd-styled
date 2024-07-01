This is a NextJS + Ant Design + Styled Components boilerplate.

## Getting Started

- Installation
  Run `npm ci` to install the dependencies. This will install the exact version of all the packages that were used while setting up the boilerplate thus avoiding any version incompatibility between packages.

- If you want to update the packages run the below two commands:

```
npm i styled-components react-dom next react antd @ant-design/nextjs-registry
```

```
npm i --save-dev @storybook/test @types/node @storybook/react @storybook/nextjs @storybook/blocks @storybook/addon-onboarding @storybook/addon-links @storybook/addon-interactions @storybook/addon-essentials eslint-config-prettier eslint-config-next eslint-config-airbnb-typescript eslint-config-airbnb eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/react-dom @types/react prettier husky eslint-plugin-storybook eslint-plugin-react-refresh eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-prettier eslint-plugin-jsx-a11y eslint-plugin-import typescript storybook storybook-dark-mode
```

- Setup husky
  Run `npx husky init` this will initialize husky in our project.
  Open `pre-commit` file which will be inside `.husky` folder and replace `npm run test` to `npm run lint`.

- You are ready to go. Run `npm run dev` to start the local server.
