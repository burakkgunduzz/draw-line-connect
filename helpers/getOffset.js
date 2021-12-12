function getOffset(element) {
  const rect = element.getBoundingClientRect();

  const left = rect.left + window.pageXOffset;
  const top = rect.top + window.pageYOffset;
  const width = rect.width || el.offsetWidth;
  const height = rect.height || el.offsetHeight;
  const right = left + width;
  const bottom = top + height;
  const mid = top + height / 2;
  const center = left + width / 2;

  return {
    left,
    right,
    top,
    bottom,
    mid,
    center,
  };
}

export default getOffset;
