function genRandomColors() {
  const randomColors = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 47; i++) {
    randomColors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  return randomColors;
}

export { genRandomColors };
