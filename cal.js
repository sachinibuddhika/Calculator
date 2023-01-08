function calculate(pressNo) {
  let display = document.getElementById("display");
  display.value = display.value + pressNo;
  display.style.backgroundColor = "#E0E0E0";
}

let getResult = function () {
  try {
    display.value = eval(display.value);
  } catch (err) {
    alert("Enter a valid input");
  }
};

function clr() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}
