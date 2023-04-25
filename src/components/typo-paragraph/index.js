import Component from './index.svelte'

export default {
  key: 'typo-paragraph',
  support: {
    'web-component': true,
  },
  default: {
    data: {
      message: '',
    },
    style: {},
  },
  component: Component,
}
