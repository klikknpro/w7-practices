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

const input = (type, name, label) => {
  return `
    <div>
      <label for="${name}">${label}</label>
      <input type="${type}" name="${name}">
    </div>
    `;
};

const form = `
  <form id="form">
    ${input("text", "firstName", "Keresztnev")}
    ${input("file", "profilePic", "Profilkeped")}
    ${input("email", "personalEmail", "Email cimed")}
    ${input("radio", "newsletter", "Szeretnel hirlevelet???")}
    ${input("checkbox", "terms", "Fogadd el!")}
    <button>OK</button>
  </form>
  `;

function init() {
  const root = document.getElementById("root");
  root.insertAdjacentHTML("beforeend", form);
}

window.addEventListener("load", init);

// pl. keresztnev kitoltese utan: http://127.0.0.1:5500/index.html?firstName=Sanya&profilePic=&personalEmail=&terms=
// query parameterek (majd 3rd party API-knal is elojon)
