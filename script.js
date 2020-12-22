
$(window).on("load", ()=>{
  $("#exampleModalCenter").modal("show");
});
const isValid = (element)=>{
return element.name && element.value
}
const isChecked = element =>{
  return !['checkbox', 'radio'].includes(element.type) || element.checked
}
const isCheckBox = element => element.type === "checkbox";

const formToJSON_deconstructed = elements =>{
  const reducerFunction=(data, element) =>{
  data[element.name] = element.value;
  console.log(JSON.stringify(data));
  return data
    }
    const reducerInitialValue ={};
    const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);
return formData
}
const formToJSON = elements =>[].reduce.call(elements, (data, element) =>{
  if(isValid(element) && isChecked(element)){  
  if(isCheckBox(element)){
  data[element.name] =(data[element.name] || []).concat(element.value)
  }
  else data[element.name] = element.value
  }
  return data;
}, {})

const handleFormSubmit = e => {
  // e.preventDefault()
 // e.stopPropagation()

const data = formToJSON(form.elements);
const dataDisplay = document.getElementsByClassName("data-display")[0]
dataDisplay.textContent = JSON.stringify(data, null, " ");
}

const form = document.getElementById("formdata");
form.addEventListener('submit', handleFormSubmit);

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
       
        form.classList.add('was-validated');
                 
      }, false)
    })
})();




