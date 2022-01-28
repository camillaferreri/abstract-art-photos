export const project_card_variants = {
  stack: i => ({ 
    x: -(i * 300),
    // scale: (i / 4) + 0.4
    scale: (i * .2) + 0.4
  }),
  slider: {  }
}

export const detail_variants = {
  stack: { y: 300, opacity: 0 },
  slider: { y: 0, opacity: 1 },
}