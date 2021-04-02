const form = document.getElementById('form');

const emailRegex = new RegExp(
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
  'i'
);
const stringEmptyRegex = new RegExp(/^\d*$/, 'i');

const showError = (input) => {
  input.parentElement.classList.add('form__field--error');
};

const hideError = (input) => {
  input.parentElement.classList.remove('form__field--error');
};

const validateInputForm = (e) => {
  e.preventDefault();

  [...e.target.elements].forEach((el) => {
    switch (el.type) {
      case 'text':
      case 'password':
        stringEmptyRegex.exec(el.value.trim().toLowerCase())
          ? showError(el)
          : hideError(el);
        break;
      case 'email':
        !emailRegex.test(el.value.trim().toLowerCase())
          ? showError(el)
          : hideError(el);
        break;
      default:
        break;
    }
  });
};

form.addEventListener('focusin', (e) => {
  if (e.target.classList.contains('form__input')) {
    hideError(e.target);
  }
});

form.addEventListener('submit', validateInputForm);
