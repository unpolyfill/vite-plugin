const dict: Record<string, string> = {
  'resize-observer-polyfill': '@unplyfill/resize-observer-polyfill',
};

export function vitePlugin(): Plugin {
  return {
    name: 'unpolyfill',
    resolveId: (id) => {
      return dict[id];
    },
  };
}
