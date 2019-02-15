const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit',(event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

  const zip = {
    name,
    content
  };
  console.log(zip);


});
