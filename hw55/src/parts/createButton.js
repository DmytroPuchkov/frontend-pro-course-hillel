import createNode from './createNode.js';

const createButton = (className, title, action) => {
  const button = createNode('button', className, title);

  if (action) button.dataset.action = action;

  return button;
};


export default createButton;