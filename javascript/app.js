const inputEmri = document.querySelector("#emri");
const inputMbiemri = document.querySelector("#mbiemri");
const displayGroup = document.querySelector(".display-group");
const buttonElement = document.querySelector("#submit");

buttonElement.addEventListener("click", shtoStudentin);

const list = document.createElement('ol');
displayGroup.appendChild(list);

let studentat = [];
function shtoStudentin() {
    const emri = inputEmri.value;
    const mbiemri = inputMbiemri.value
    if (emri === "" || mbiemri === "") {
        return;
    }
    const listItem = document.createElement('li');
    const node = document.createTextNode(emri + ' ' + mbiemri);
    listItem.appendChild(node);
    list.appendChild(listItem);
    inputEmri.value = "";
    inputMbiemri.value = "";

    const studenti = {
        emri: emri,
        mbiemri: mbiemri,
        emriKomplet: function () {
            return this.emri + " " + this.mbiemri;
        }
    };

    console.log(studenti.emriKomplet());
    studentat.push(studenti);
}
