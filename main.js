"use strict";
let $elBody = document.body;
let $eldarkMode = document.querySelector(".btn_mode");
let $elForm = document.getElementById("Form");
let $elBox = document.getElementById("box");

let $eluserName = document.getElementById("UserName");
let $elLastName = document.getElementById("LastName");
let $elmail = document.getElementById("mail");
let $elphone = document.getElementById("phone");
let $elcountry = document.getElementById("country");
let $elCity = document.getElementById("City");
let $elPassword = document.getElementById("Password");
let $elConfPass = document.getElementById("ConfPass");

$eldarkMode.addEventListener("click", function (e) {
  e.preventDefault();
  let element = document.body;
  element.classList.toggle("dark-mode");
});

$elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let name = UserName.value.trim();
  let lastName = LastName.value.trim();
  let email = mail.value.trim();
  let telephone = phone.value.trim();
  let count = country.value.trim();
  let city = City.value.trim();
  let Pass = Password.value.trim();
  let ConfPassword = ConfPass.value.trim();

  if (Password !== ConfPassword) {
    alert("Sizning kodingiz tasdiqlanmadi!");
    Password.value = null;
    ConfPass.value = null;
  }

  $elBox.innerHTML += `
      <li class="bg-primary-subtle m-2 list-none d-inline-block" style="width: 300px;">
          <p>User First Name: ${name}</p>
          <p>User Second Name: ${lastName}</p>
          <p>User Email: ${email}</p>
          <p>User Phone: ${telephone}</p>
          <p>User Country: ${count}</p>
          <p>User City: ${city}</p>
          <p>User Password: ${Pass}</p>
      </li>
      `;

  UserName.value = null;
  LastName.value = null;
  mail.value = null;
  phone.value = null;
  country.value = null;
  City.value = null;
  Password.value = null;
  ConfPass.value = null;
});
