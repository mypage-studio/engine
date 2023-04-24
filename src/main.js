import App from './app/index.svelte'
import './app/assets/scss/main.scss'

// setup preview app
const preview = new App({
  target: document.getElementById('app-preview'),
  props: {},
})

export default preview
