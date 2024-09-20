import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      fontFamily: "'EB Garamond', serif",
    },
    sequence: {
      mirrorActors: false,
    }
  }
})
