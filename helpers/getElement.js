const getElement = (id) => {
  const element = document.getElementById(id);
  if (!element) throw new Error(`cannot find #${id}`);
  return element;
};

export default getElement;
