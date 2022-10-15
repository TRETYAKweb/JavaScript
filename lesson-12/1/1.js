/**
 * Примерные данные для заполнения, вы можете использовать свои данные.
 *  Имя: "Firefox",   Компания: "Mozilla",        Процент: "8.01%"
 *  Имя: "Chrome",    Компания: "Google",         Процент: "68.26%"
 *  Имя: "Edge",      Компания: "Microsoft",      Процент: "6.67%"
 *  Имя: "Opera",     Компания: "Opera Software", Процент: "1.31%"
 *
 */

const arr = [];
const btn = document.querySelector('[type="submit"]');

function refreshBtnDisabled() {
  btn.disabled = true;

  browserDisabled = null;
  companyDisabled = null;
  percentDisabled = null;
}
refreshBtnDisabled();

const form = document.querySelector("#form");
const inputs = document.querySelectorAll('[type="text"]');
const BtnDataAnalysis = document.querySelector("button");
const result = document.querySelector("#result");

const [browser, company, percent] = inputs;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("browser");
  const company = formData.get("company");
  const percent = +formData.get("percent");

  arr.push({ name, company, percent });

  console.log(arr);

  refreshBtnDisabled();

  form.reset();
});

function checkDisable() {
  const result =
    browserDisabled && companyDisabled && percentDisabled ? true : false;
  return result;
}

// const isValid = (val) => {
//   return {
//     minLength(len) {
//       return val.length <= len ? val : false;
//     },
//     isString(value) {
//       return typeof value === "string" ? val : false;
//     },
//   };
// };

function minLength(value, num) {
  if (value.length <= num) {
    return false;
  } else {
    return true;
  }
}

function isString(value) {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
}

function checkNumber(num) {
  if (!isNaN(num) && num >= 0) {
    return true;
  }
}

browser.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  const isValid = minLength(value, 3) && isString(value);

  if (!isValid) {
    event.target.setAttribute("class", "error");
  } else {
    event.target.removeAttribute("class");
  }

  browserDisabled = isValid;

  btn.disabled = !checkDisable();
});

company.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  const isValid = minLength(value, 3) && isString(value);

  if (!isValid) {
    event.target.setAttribute("class", "error");
  } else {
    event.target.removeAttribute("class");
  }
  companyDisabled = isValid;

  btn.disabled = !checkDisable();
});

percent.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  const convertedValue = Number(value);

  const isValid = checkNumber(convertedValue);

  if (!isValid) {
    event.target.setAttribute("class", "error");
  } else {
    event.target.removeAttribute("class");
  }

  percentDisabled = isValid;

  btn.disabled = !checkDisable();
});

const mostWantedBrowser = [];

BtnDataAnalysis.addEventListener("click", (event) => {
  findsRequestedBrowser();

  if (mostWantedBrowser.length === 0) {
    result.innerHTML = `Недостаточно данных`;
  } else {
    const obj = mostWantedBrowser[0];
    const { name, company, percent } = obj;
    result.innerHTML = `Самый востребованный браузер это ${name} от компании ${company} с процентом использования ${percent}%`;
  }
});

function findsRequestedBrowser() {
  let highestPercentage = 0;

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];

    const { name, company, percent } = obj;

    if (percent > highestPercentage) {
      mostWantedBrowser.pop();
      highestPercentage = percent;
      mostWantedBrowser.push({ name, company, percent });
    }
  }
}

// for (let i = 0; i < inputs.length; i++) {
//   if (!(inputs[i] === inputs[2])) {
//     const input = inputs[i];
//     input.addEventListener("input", (event) => {
//       const value = event.target.value.trim();
//       if (value.length <= 3 || typeof value !== "string") {
//         event.target.setAttribute("class", "error");
//         if (i === 0) {
//           browserDisabled = false;
//         } else {
//           companyDisabled = false;
//         }
//       } else {
//         event.target.removeAttribute("class");
//         if (i === 0) {
//           browserDisabled = true;
//         } else {
//           companyDisabled = true;
//         }
//       }
//       btn.disabled = !checkDisable();
//     });
//   } else {
//     const input = inputs[i];
//     input.addEventListener("input", (event) => {
//       const value = event.target.value.trim();
//       const convertedValue = Number(value);
//       if (isNaN(convertedValue) || convertedValue <= 0) {
//         event.target.setAttribute("class", "error");
//         percentDisabled = false;
//       } else {
//         event.target.removeAttribute("class");
//         percentDisabled = true;
//       }
//       btn.disabled = !checkDisable();
//     });
//   }
// }
