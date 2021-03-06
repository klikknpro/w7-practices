/*

function name(parameter) {
  parameter === "argument as string"
}; NO SPACE, barhol(!!!) mukodik a kodban, a scope miatt (mint az init is), debug szempontbol problemas is lehet

name("argument as string");

////

const argument = "argument as string"
const name = function() {
  parameter === "argument as a string"
}; SPACE, a const scope-ja szerint erheto el a kodban!, debug szempontbol kenyelmesebb

name(argument);

////

const name = () => {}; methodkent nem hasznalhato, kevesebb kod, szebb, atlathatobb (HA szukseg van ra!)

*/

const inputElement = (type, name, label) => {
  return `
    <div>
      <label for="${name}">${label}</label>
      <input type="${type}" name="${name}">
    </div>
    `;
};

const selectElement = (type, name, label, selectOptions) => {
  let optionElements = "";
  for (const option of selectOptions) {
    optionElements += `<option>${option}</option>`;
  }
  return `
    <div>
      <label for="${name}">${label}</label>
      <${type} name="${name}">
        ${optionElements}
      </${type}>
    </div>
    `;
};

/*
const formElement = crap + crap + crap ...
*/

const formElement = `
  <form id="form">
    ${inputElement("text", "firstName", "Keresztnev")}
    ${inputElement("file", "profilePic", "Profilkeped")}
    ${inputElement("email", "personalEmail", "Email cimed")}
    ${inputElement("checkbox", "newsletter", "Szeretnel hirlevelet???")}
    ${inputElement("checkbox", "terms", "Fogadd el!")}
    ${selectElement("select", "where", "Hol hallottal rolunk?", ["internet", "ismeros", "egyeb"])}
    <button>OK</button>
  </form>
  `;

const formSubmit = (event) => {
  event.preventDefault();
  console.log(event);
  const et = event.target;
  et.classList.add("submitted");
  const etValue = et.querySelector(`select[name="where"]`).value;
  console.log(etValue);
};

const inputEvent = (event) => {
  //const fName = document.querySelector(`input[name="firstName"]`);
  //const tryForm = fName.closest("#form"); // kereses az event.target-en belul
  // console.log(event);
  // console.log("event.target =  " + event.target);
  const tryForm = event.target.closest("#form"); // ugyanaz mint az fName-el :O :O :?
  console.log(tryForm);

  if (event.target.getAttribute("name") === "firstName") {
    document.getElementById("inputValueContent").innerHTML = event.target.value;
  }
};

function init() {
  const root = document.getElementById("root");
  root.insertAdjacentHTML("beforeend", formElement);
  root.insertAdjacentHTML(
    "beforeend",
    `
    <div id="inputValueContent"></div>
    `
  );

  const form = document.getElementById("form");
  form.addEventListener("submit", formSubmit); // catch the default submit and modify

  const inputList = form.querySelectorAll("input");
  for (const input of inputList) {
    input.addEventListener("input", inputEvent);
  }
}

window.addEventListener("load", init);

// pl. keresztnev kitoltese utan: http://127.0.0.1:5500/index.html?firstName=Sanya&profilePic=&personalEmail=&terms=
// query parameterek (majd 3rd party API-knal is elojon)
