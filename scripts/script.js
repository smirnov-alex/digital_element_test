//запрет отправки по Enter
const form = document.querySelector('.userform__form');
form.addEventListener('keydown', function(event) {
  if(event.keyCode == 13) {
     event.preventDefault();
     return false;
  }
});

let elements = document.querySelectorAll('.userform__form-field');
form.addEventListener('submit', function(evt) {
  for (let elem of elements) {
    evt.preventDefault();
    if (!elem.value) {
      alert('Заполните поле ' + elem.name + '!');
      return;
    }
  }
  this.submit();
});
