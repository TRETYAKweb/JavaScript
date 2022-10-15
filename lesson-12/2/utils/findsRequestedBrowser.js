export function findsRequestedBrowser(arr) {
  let highestPercentage = 0;

  let mostWantedBrowser = [];

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];

    const { name, company, percent } = obj;

    if (percent > highestPercentage) {
      mostWantedBrowser.pop();
      highestPercentage = percent;
      mostWantedBrowser.push({ name, company, percent });
    }
  }

  return mostWantedBrowser;
}
