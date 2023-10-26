function avengers() {
  const avenger = prompt("Enter the avengers name");
  switch (avenger.toLowerCase()) {
    case "ironman":
      return " you are like Iron Man";
    //   break;
    case "hulk":
      return " you are like Hulk";
    case "thor":
      return " you are like Thor";
    case "spiderman":
      return " you are like Spider Man";
    case "drstrange":
      return " you are like Drstrange ";
    case "hawkeye":
      return " you are like Hawkeye ";
    case "antman":
      return " you are like Ant Man ";
    case "wasp":
      return " you are like Wasp ";

    default:
      return "something went wrong ";
  }
}
console.log(avengers());
