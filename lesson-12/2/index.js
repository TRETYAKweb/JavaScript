import { findsRequestedBrowser } from "./utils/findsRequestedBrowser.js";
// Вызов всех модулей

const arr = [
  {
    name: "Firefox",
    company: "Mozilla",
    percent: 8.01,
  },
  {
    name: "Chrome",
    company: "Google",
    percent: 68.26,
  },
  {
    name: "Edge",
    company: "Microsoft",
    percent: 6.67,
  },
  {
    name: "Opera",
    company: "Opera Software",
    percent: 1.31,
  },
];

const mostWantedBrowser = findsRequestedBrowser(arr);

const obj = mostWantedBrowser[0];
const { name, company, percent } = obj;
console.log(
  `Самый востребованный браузер это ${name} от компании ${company} с процентом использования ${percent}%`
);
