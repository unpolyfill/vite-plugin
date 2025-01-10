import url from 'node:url';
import { Plugin } from 'vite';

export function unpolyfill(): Plugin {
  const dict: Record<string, string> = {
    'resize-observer-polyfill': '@unpolyfill/resize-observer-polyfill',
  };

  return {
    name: 'unpolyfill',
    resolveId(id) {
      const newId = dict[id];
      if (newId) {
        return url.fileURLToPath(import.meta.resolve(newId));
      }
    },
  };
}
