// TODO: this file! :)

const form = document.querySelector("form");
const addNumber = document.querySelector("#number");
const numberBankOutput = document.querySelector("#numberBankOutput");
const sortOne = document.querySelector("#sortOne");
const sortAll = document.querySelector("#sortAll");
const sort1OutputEvens = document.querySelector("#evensOutput");
const sort1OutputOdds = document.querySelector("#oddsOutput");
const state = {
  numberBank: [],
  odds: [],
  evens: [],
};

// === Number Bank ===

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const numToAdd = Number(addNumber.value.trim());
  if (!isNaN(numToAdd)) {
    state.numberBank.push(numToAdd);
  }
  addNumber.value = "";
  renderNumberBank();
});

function renderNumberBank() {
  numberBankOutput.innerText = "";
  state.numberBank.map((number) => {
    const li = document.createElement("li");
    li.innerText = number;
    numberBankOutput.appendChild(li);
  });
}

// === Sort 1 ===

sortOne.addEventListener("click", function (e) {
  e.preventDefault();
  const numToMove = state.numberBank.shift();
  if (numToMove % 2 === 0) {
    state.evens.push(numToMove);
  } else {
    state.odds.push(numToMove);
  }
  renderSortOutput();
  renderNumberBank();
});

function renderSortOutput() {
  sort1OutputOdds.innerText = "";
  state.odds.map((oddNumber) => {
    const li = document.createElement("li");
    li.innerText = oddNumber;
    sort1OutputOdds.appendChild(li);
  });
  sort1OutputEvens.innerText = "";
  state.evens.map((evenNumber) => {
    const li = document.createElement("li");
    li.innerText = evenNumber;
    sort1OutputEvens.appendChild(li);
  });
}

// === Sort All ===

sortAll.addEventListener("click", function (e) {
  e.preventDefault();
  for (i = 0; i < state.numberBank.length; i++) {
    let numsToMove = state.numberBank[i];
    if (numsToMove % 2 === 0) {
      state.evens.push(numsToMove);
    } else {
      state.odds.push(numsToMove);
    }
  }
  state.numberBank.splice(0, state.numberBank.length);
  renderNumberBank();
  renderSortOutput();
});
