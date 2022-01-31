export const project_card_variants = {
  stack: i => ({ 
    x: (-i * 310) - ((i - 1) * (i * 10)),
    scale: -(i * .1) + 1,
    zIndex: -i
  }),
  slider: i => ({ 
    x: 0,
    scale: 1,
    zIndex: -i,
  })
}

export const project_card_transition = {
  duration: .8,
  ease: "easeInOut"
}

export const detail_variants = {
  stack: { 
    y: 300, 
    opacity: 0,
    transition: {
      duration: 0.8,
      delay: -0.4
    }
  },
  slider: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  },
}

export const detail_transition = {
  ease: "easeInOut"
}