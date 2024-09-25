// genrateHaseword /  /

let string = "javascript is the dynamic progrmaning language";

function genrateHase(str) {
  str = str.split(" ");

  str = str.map((elm) => {
    return elm[0].charAt(0).toUpperCase() + elm.slice(1);
    //   or
    // console.log(elm[0].toUpperCase() + elm.slice(1));
    // console.log(elm.replace(elm[0],elm[0].toUpperCase()));
  });

  str = `#${str.join("")}`;
  return str;
}

console.log(genrateHase(string));
