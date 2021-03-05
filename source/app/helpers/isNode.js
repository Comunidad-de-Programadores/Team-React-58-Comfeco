const isNode = () => {
  let isNodeEnviromen;
  try {
    isNodeEnviromen = !window;
  } catch (error) {
    isNodeEnviromen = true;
  }

  return isNodeEnviromen;
};

export default isNode;
