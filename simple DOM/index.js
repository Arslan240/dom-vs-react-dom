const form = document.querySelector('form');
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn');
const modifyBtn = document.getElementById('modify-btn');

let name = '';

nameInput.addEventListener('input', (event) => {
  name = event.target.value;
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  alert(`Hello, ${name}!`);
});

function modifyDOM() {
  nameInput.value = 'John Doe';
}

modifyBtn.addEventListener('click', (event) => {
  modifyDOM();
});
