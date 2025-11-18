const form = document.querySelector(".login-form");
// const inpEmail = document.querySelector();
let formObj = {};
const handlerSubmit = (evt) => {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  //   console.log(email.value, password.value);

  //   const em = evt.target.elements.email.value;

  //   const pas = evt.target.elements.password.value;
  if (!email.value) {
    return alert("Email undefin");
  } else if (!password.value) {
    return alert("password undefin");
  }
  formObj.email = email.value;
  formObj.password = password.value;
  console.log(formObj);
  form.reset();
};

form.addEventListener("submit", handlerSubmit);
