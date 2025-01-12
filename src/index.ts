import { Plugin } from 'vite';

export default function unpolyfill(): Plugin {
  return {
    name: 'unpolyfill',
    config() {
      return {
        resolve: {
          alias: {
            'resize-observer-polyfill': '@unpolyfill/resize-observer-polyfill',
          },
        },
      };
    },
  };
}
