function genRandomColors() {
  const randomColors = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 47; i++) {
    randomColors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  return randomColors;
}

function genRandomRGBColors() {
  const s = 255;
  const randomColors = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 47; i++) {
    const rgba = `rgba(${Math.round(Math.random() * s)}, ${Math.round(
      Math.random() * s,
    )}, ${Math.round(Math.random() * s)}, 1)`;
    randomColors.push(rgba);
  }
  return randomColors;
}

function decreaseAlpha(rgba) {
  const parts = rgba.match(/[\d.]+/g);
  parts[3] = '0.3';
  return `rgba(${parts.join(', ')})`;
}

export { genRandomColors, genRandomRGBColors, decreaseAlpha };
