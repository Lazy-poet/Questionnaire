(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

$(window).on("load", ()=>{
  $("#exampleModalCenter").modal("show");
});

function handleFormSubmit(e){
  e.preventDefault();
const data = {};
const dataDisplay = document.getElementsByClassName("data-display")[0]
dataDisplay.textContent = JSON.stringify(data, null, " ");

}
const form = document.getElementById("formdata");
form.addEventListener('submit', handleFormSubmit);

/** 
 * @param {HTMLFormControlsCollection}
@return {Object}
*/
const formToJSON = elements =>[].reduce.call(elements, (data, element) =>{
  data[element.name] = element.value;
  return data;
}, {})
