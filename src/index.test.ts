import { vitePlugin } from '.';

describe('vitePlugin', () => {
  it('normal', async () => {
    expect(vitePlugin('Foo', 'Bar')).toBe('Foo Bar');
  });

  it('lastName upper case', async () => {
    expect(vitePlugin('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
