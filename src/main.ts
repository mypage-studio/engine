import App from './app.svelte'
import './assets/scss/main.scss'

// setup preview app
const preview = new App({
  target: document.getElementById('app-preview') as HTMLElement,
  props: {},
})

export default preview
