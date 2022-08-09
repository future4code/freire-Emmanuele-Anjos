const calculator = process.argv[2];
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

if (calculator && number1 && number2 != undefined) {
  switch (calculator) {
    case "sum":
      return console.log(`Result= ${number1 + number2}`);

    case "sub":
      return console.log(`Result= ${number1 - number2}`);

    case "mult":
      return console.log(`Result= ${number1 * number2}`);

    case "div":
      return console.log(`Result= ${number1 / number2}`);

    default:
      break;
  }
} else {
  console.log("error");
}
