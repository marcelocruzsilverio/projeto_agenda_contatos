const form = document.getElementById("contact-data");
const table = document.getElementById("contact-list");
const tbody = document.getElementById("content-list");
const inputName = document.getElementById("contact-name");
const inputPhone = document.getElementById("contact-phone");
const span = document.getElementById("contact-total");

const phones = [];

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  createRow();
});

function createRow() {
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdPhone = document.createElement("td");

  tdName.textContent = inputName.value;
  tdName.classList = "table-td name";

  tdPhone.textContent = inputPhone.value;
  tdPhone.classList = "table-td";

  const img =
    '<img src="./images/icon.png" alt="ícone de pessoa" class="icon" />';
  tdName.innerHTML = `${img} ${inputName.value}`;

  if (phones.includes(inputPhone.value)) {
    alert("Número de telefone já cadastrado!");
  } else {
    tr.append(tdName, tdPhone);
    tbody.appendChild(tr);
    phones.push(inputPhone.value);
  }

  span.textContent = phones.length;

  inputName.value = "";
  inputPhone.value = "";
}

inputPhone.addEventListener("input", formatPhoneNumber);

function formatPhoneNumber() {
  const phoneNumber = inputPhone.value.replace(/[^\d]/g, "");
  if (phoneNumber.length === 11) {
    const formattedPhoneNumber = `(${phoneNumber.slice(
      0,
      2
    )}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
    inputPhone.value = formattedPhoneNumber;
  } else if (phoneNumber.length === 10) {
    const formattedPhoneNumber = `(${phoneNumber.slice(
      0,
      2
    )}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    inputPhone.value = formattedPhoneNumber;
  }
}
