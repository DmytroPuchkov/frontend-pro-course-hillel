const table = document.querySelector('.table');

function onSaveHandler(target) {
  target.querySelector('.save').addEventListener('click', () => {
    const content = target.querySelector('textarea').value;
    
    target.innerHTML = content;
  });
}

function onCloseHandler(target, content) {
  target.querySelector('.cancel').addEventListener('click', () => {
    target.innerHTML = content;
  });
}

const operation = {
  save: onSaveHandler,
  close: onCloseHandler
};

function onClickHandler(event) {
  const target = event.target;
  const isEditableCell = (target.tagName === 'TD') && (target.tagName !== 'TEXTAREA');

  if (isEditableCell) {
    const content = target.innerHTML;

    target.innerHTML = `
      <textarea>${content}</textarea>
      <div>
        <button class="save">Save</button>
        <button class="cancel">Cancel</button>
      </div>
    `;

    operation.save(target);
    operation.close(target, content);
  }
}

table.addEventListener('click', onClickHandler);