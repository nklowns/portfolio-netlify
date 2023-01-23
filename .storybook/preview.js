import { setup } from '@storybook/vue3'
import { registerPlugins } from '@/plugins'

setup(app => {
  registerPlugins(app)
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
