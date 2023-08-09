let emri_niti = "Arianit";
let mbiemri_niti = "Ramadani";
let emri_edi = "Edi";
let mbiemri_edi = "Ramadani";

let emri_agoni = "Agon";
let mbiemri_agoni = "Cecelia";

let emri_trimi = "Trim";
let mbiemri_trimi = "Ramadani";

function pershendete(emri, mbiemri) {
  const span = document.createElement("h1");
  if (emri === "Arianit") {
    const span = document.createElement("h2");
    const node = document.createTextNode(
      "Hola " + emri + " " + mbiemri + " mi kastravec!",
    );
    span.appendChild(node);
    const element = document.getElementById("pershendetjet");
    element.appendChild(span);
    return;
  }
  const node = document.createTextNode(
    "Hola " + emri + " " + mbiemri + " mi amigo!",
  );
  span.appendChild(node);

  const element = document.getElementById("pershendetjet");
  element.appendChild(span);
}

pershendete(emri_niti, mbiemri_niti);
pershendete(emri_edi, mbiemri_edi);
pershendete(emri_agoni, mbiemri_agoni);
pershendete(emri_trimi, mbiemri_trimi);
