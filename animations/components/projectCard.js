export const project_card_variants = {
  stack: i => ({ 
    x: (-i * 310) - ((i - 1) * (i * 10)),
    scale: -(i * .1) + 1,
    zIndex: -i
  }),
  slider: {  }
}

export const detail_variants = {
  stack: { y: 300, opacity: 0 },
  slider: { y: 0, opacity: 1 },
}