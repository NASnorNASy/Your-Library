const visitor1 = document.getElementById("visitor1");
const visitor2 = document.getElementById("visitor2");
const visitor3 = document.getElementById("visitor3");
const visitor4 = document.getElementById("visitor4");
const visitor5 = document.getElementById("visitor5");
const visitor6 = document.getElementById("visitor6");
const visitor7 = document.getElementById("visitor7");
const visitor8 = document.getElementById("visitor8");
const visitor9 = document.getElementById("visitor9");
const visitor10 = document.getElementById("visitor10");

const addVisitor = document.querySelector(".add-new-visitor");
let value = 0;

const firstName1 = document.getElementById("first-name1");
const lastName1 = document.getElementById("last-name1");
const phoneNumber1 = document.getElementById("phone-number1");

const fName1 = document.getElementById("f-name1");
const lName1 = document.getElementById("l-name1");
const pNumber1 = document.getElementById("p-number1");

const firstName2 = document.getElementById("first-name2");
const lastName2 = document.getElementById("last-name2");
const phoneNumber2 = document.getElementById("phone-number2");

const fName2 = document.getElementById("f-name2");
const lName2 = document.getElementById("l-name2");
const pNumber2 = document.getElementById("p-number2");

const firstName3 = document.getElementById("first-name3");
const lastName3 = document.getElementById("last-name3");
const phoneNumber3 = document.getElementById("phone-number3");

const fName3 = document.getElementById("f-name3");
const lName3 = document.getElementById("l-name3");
const pNumber3 = document.getElementById("p-number3");

const firstName4 = document.getElementById("first-name4");
const lastName4 = document.getElementById("last-name4");
const phoneNumber4 = document.getElementById("phone-number4");

const fName4 = document.getElementById("f-name4");
const lName4 = document.getElementById("l-name4");
const pNumber4 = document.getElementById("p-number4");

const firstName5 = document.getElementById("first-name5");
const lastName5 = document.getElementById("last-name5");
const phoneNumber5 = document.getElementById("phone-number5");

const fName5 = document.getElementById("f-name5");
const lName5 = document.getElementById("l-name5");
const pNumber5 = document.getElementById("p-number5");

const firstName6 = document.getElementById("first-name6");
const lastName6 = document.getElementById("last-name6");
const phoneNumber6 = document.getElementById("phone-number6");

const fName6 = document.getElementById("f-name6");
const lName6 = document.getElementById("l-name6");
const pNumber6 = document.getElementById("p-number6");

const firstName7 = document.getElementById("first-name7");
const lastName7 = document.getElementById("last-name7");
const phoneNumber7 = document.getElementById("phone-number7");

const fName7 = document.getElementById("f-name7");
const lName7 = document.getElementById("l-name7");
const pNumber7 = document.getElementById("p-number7");

const firstName8 = document.getElementById("first-name8");
const lastName8 = document.getElementById("last-name8");
const phoneNumber8 = document.getElementById("phone-number8");

const fName8 = document.getElementById("f-name8");
const lName8 = document.getElementById("l-name8");
const pNumber8 = document.getElementById("p-number8");

const firstName9 = document.getElementById("first-name9");
const lastName9 = document.getElementById("last-name9");
const phoneNumber9 = document.getElementById("phone-number9");

const fName9 = document.getElementById("f-name9");
const lName9 = document.getElementById("l-name9");
const pNumber9 = document.getElementById("p-number9");

const firstName10 = document.getElementById("first-name10");
const lastName10 = document.getElementById("last-name10");
const phoneNumber10 = document.getElementById("phone-number10");

const fName10 = document.getElementById("f-name10");
const lName10 = document.getElementById("l-name10");
const pNumber10 = document.getElementById("p-number10");

const saveVisit1 = document.getElementById("save-visit1");
const saveVisit2 = document.getElementById("save-visit2");
const saveVisit3 = document.getElementById("save-visit3");
const saveVisit4 = document.getElementById("save-visit4");
const saveVisit5 = document.getElementById("save-visit5");
const saveVisit6 = document.getElementById("save-visit6");
const saveVisit7 = document.getElementById("save-visit7");
const saveVisit8 = document.getElementById("save-visit8");
const saveVisit9 = document.getElementById("save-visit9");
const saveVisit10 = document.getElementById("save-visit10");

addVisitor.addEventListener("click", () => {
  value += 1;
  if (value === 1) {
    visitor10.style.display = "block";
    addVisitor.disabled = true;
    saveVisit10.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
  if (value === 2) {
    visitor9.style.display = "block";
    addVisitor.disabled = true;
    saveVisit9.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
  if (value === 3) {
    visitor8.style.display = "block";
    addVisitor.disabled = true;
    saveVisit8.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
  if (value === 4) {
    visitor7.style.display = "block";
    addVisitor.disabled = true;
    saveVisit7.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
  if (value === 5) {
    visitor6.style.display = "block";
    addVisitor.disabled = true;
    saveVisit6.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
  if (value === 6) {
    visitor5.style.display = "block";
    addVisitor.disabled = true;
    saveVisit5.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
  if (value === 7) {
    visitor4.style.display = "block";
    addVisitor.disabled = true;
    saveVisit4.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
  if (value === 8) {
    visitor3.style.display = "block";
    addVisitor.disabled = true;
    saveVisit3.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
  if (value === 9) {
    visitor2.style.display = "block";
    addVisitor.disabled = true;
    saveVisit2.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
  if (value === 10) {
    visitor1.style.display = "block";
    addVisitor.disabled = true;
    saveVisit1.addEventListener("click", () => {
      addVisitor.disabled = false;
    });
  }
});
saveVisit10.addEventListener("click", () => {
  let valueFirstName10 = firstName10.value;
  let valueLastName10 = lastName10.value;
  let valuePhoneNumber10 = phoneNumber10.value;
  if (
    firstName10.value == "" &&
    lastName10.value == "" &&
    phoneNumber10.value == 0
  ) {
    fName10.textContent = "";
    lName10.textContent = "";
    pNumber10.textContent = "";
  }

  if (
    firstName10.value != "" &&
    lastName10.value != "" &&
    phoneNumber10.value >= 999999999 &&
    phoneNumber10.value <= 999999999999
  ) {
    fName10.textContent = valueFirstName10;
    lName10.textContent = valueLastName10;
    pNumber10.textContent = valuePhoneNumber10;
  }
});
saveVisit9.addEventListener("click", () => {
  let valueFirstName9 = firstName9.value;
  let valueLastName9 = lastName9.value;
  let valuePhoneNumber9 = phoneNumber9.value;
  if (
    firstName9.value == "" &&
    lastName9.value == "" &&
    phoneNumber9.value == 0
  ) {
    fName9.textContent = "";
    lName9.textContent = "";
    pNumber9.textContent = "";
  }

  if (
    firstName9.value != "" &&
    lastName9.value != "" &&
    phoneNumber9.value >= 999999999 &&
    phoneNumber9.value <= 999999999999
  ) {
    fName9.textContent = valueFirstName9;
    lName9.textContent = valueLastName9;
    pNumber9.textContent = valuePhoneNumber9;
  }
});
saveVisit8.addEventListener("click", () => {
  let valueFirstName8 = firstName8.value;
  let valueLastName8 = lastName8.value;
  let valuePhoneNumber8 = phoneNumber8.value;
  if (
    firstName8.value == "" &&
    lastName8.value == "" &&
    phoneNumber8.value == 0
  ) {
    fName8.textContent = "";
    lName8.textContent = "";
    pNumber8.textContent = "";
  }

  if (
    firstName8.value != "" &&
    lastName8.value != "" &&
    phoneNumber8.value >= 999999999 &&
    phoneNumber8.value <= 999999999999
  ) {
    fName8.textContent = valueFirstName8;
    lName8.textContent = valueLastName8;
    pNumber8.textContent = valuePhoneNumber8;
  }
});
saveVisit7.addEventListener("click", () => {
  let valueFirstName7 = firstName7.value;
  let valueLastName7 = lastName7.value;
  let valuePhoneNumber7 = phoneNumber7.value;
  if (
    firstName7.value == "" &&
    lastName7.value == "" &&
    phoneNumber7.value == 0
  ) {
    fName7.textContent = "";
    lName7.textContent = "";
    pNumber7.textContent = "";
  }

  if (
    firstName7.value != "" &&
    lastName7.value != "" &&
    phoneNumber7.value >= 999999999 &&
    phoneNumber7.value <= 999999999999
  ) {
    fName7.textContent = valueFirstName7;
    lName7.textContent = valueLastName7;
    pNumber7.textContent = valuePhoneNumber7;
  }
});
saveVisit6.addEventListener("click", () => {
  let valueFirstName6 = firstName6.value;
  let valueLastName6 = lastName6.value;
  let valuePhoneNumber6 = phoneNumber6.value;
  if (
    firstName6.value == "" &&
    lastName6.value == "" &&
    phoneNumber6.value == 0
  ) {
    fName6.textContent = "";
    lName6.textContent = "";
    pNumber6.textContent = "";
  }

  if (
    firstName6.value != "" &&
    lastName6.value != "" &&
    phoneNumber6.value >= 999999999 &&
    phoneNumber6.value <= 999999999999
  ) {
    fName6.textContent = valueFirstName6;
    lName6.textContent = valueLastName6;
    pNumber6.textContent = valuePhoneNumber6;
  }
});
saveVisit5.addEventListener("click", () => {
  let valueFirstName5 = firstName5.value;
  let valueLastName5 = lastName5.value;
  let valuePhoneNumber5 = phoneNumber5.value;
  if (
    firstName5.value == "" &&
    lastName5.value == "" &&
    phoneNumber5.value == 0
  ) {
    fName5.textContent = "";
    lName5.textContent = "";
    pNumber5.textContent = "";
  }

  if (
    firstName5.value != "" &&
    lastName5.value != "" &&
    phoneNumber5.value >= 999999999 &&
    phoneNumber5.value <= 999999999999
  ) {
    fName5.textContent = valueFirstName5;
    lName5.textContent = valueLastName5;
    pNumber5.textContent = valuePhoneNumber5;
  }
});
saveVisit4.addEventListener("click", () => {
  let valueFirstName4 = firstName4.value;
  let valueLastName4 = lastName4.value;
  let valuePhoneNumber4 = phoneNumber4.value;
  if (
    firstName4.value == "" &&
    lastName4.value == "" &&
    phoneNumber4.value == 0
  ) {
    fName4.textContent = "";
    lName4.textContent = "";
    pNumber4.textContent = "";
  }

  if (
    firstName4.value != "" &&
    lastName4.value != "" &&
    phoneNumber4.value >= 999999999 &&
    phoneNumber4.value <= 999999999999
  ) {
    fName4.textContent = valueFirstName4;
    lName4.textContent = valueLastName4;
    pNumber4.textContent = valuePhoneNumber4;
  }
});
saveVisit3.addEventListener("click", () => {
  let valueFirstName3 = firstName3.value;
  let valueLastName3 = lastName3.value;
  let valuePhoneNumber3 = phoneNumber3.value;
  if (
    firstName3.value == "" &&
    lastName3.value == "" &&
    phoneNumber3.value == 0
  ) {
    fName3.textContent = "";
    lName3.textContent = "";
    pNumber3.textContent = "";
  }

  if (
    firstName3.value != "" &&
    lastName3.value != "" &&
    phoneNumber3.value >= 999999999 &&
    phoneNumber3.value <= 999999999999
  ) {
    fName3.textContent = valueFirstName3;
    lName3.textContent = valueLastName3;
    pNumber3.textContent = valuePhoneNumber3;
  }
});
saveVisit2.addEventListener("click", () => {
  let valueFirstName2 = firstName2.value;
  let valueLastName2 = lastName2.value;
  let valuePhoneNumber2 = phoneNumber2.value;
  if (
    firstName2.value == "" &&
    lastName2.value == "" &&
    phoneNumber2.value == 0
  ) {
    fName2.textContent = "";
    lName2.textContent = "";
    pNumber2.textContent = "";
  }

  if (
    firstName2.value != "" &&
    lastName2.value != "" &&
    phoneNumber2.value >= 999999999 &&
    phoneNumber2.value <= 999999999999
  ) {
    fName2.textContent = valueFirstName2;
    lName2.textContent = valueLastName2;
    pNumber2.textContent = valuePhoneNumber2;
  }
});
saveVisit1.addEventListener("click", () => {
  let valueFirstName1 = firstName1.value;
  let valueLastName1 = lastName1.value;
  let valuePhoneNumber1 = phoneNumber1.value;
  if (
    firstName1.value == "" &&
    lastName1.value == "" &&
    phoneNumber1.value == 0
  ) {
    fName1.textContent = "";
    lName1.textContent = "";
    pNumber1.textContent = "";
  }

  if (
    firstName1.value != "" &&
    lastName1.value != "" &&
    phoneNumber1.value >= 999999999 &&
    phoneNumber1.value <= 999999999999
  ) {
    fName1.textContent = valueFirstName1;
    lName1.textContent = valueLastName1;
    pNumber1.textContent = valuePhoneNumber1;
  }
});
