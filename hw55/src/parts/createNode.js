const createNode = (elementType, className, textContent, action) => {
  const element = document.createElement(elementType);

  if (className) className.split(' ').forEach(cls => element.classList.add(cls));
  if (textContent) element.innerText = textContent;
  if (action) element.dataset.action = action;

  return element;
};

export default createNode;