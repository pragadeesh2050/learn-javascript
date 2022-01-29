const deepClone = (input) => {
  if (input instanceof Date) {
    return new Date(input.getTime());
  }
  if (typeof input != "object") {
    return input;
  }
  let copy = Array.isArray(input) ? [] : {};
  for (const key in input) {
    const value = input[key];
    copy[key] = deepClone(value);
  }

  return copy;
};

let original = [
  "hello world",
  24,
  {
    date: new Date(),
    location: {
      city: "tampa",
    },
  },
];

let clonedObject = deepClone(original);


console.log(clonedObject);
console.log(original);

clonedObject[2].location.city = "Charlotte";
clonedObject[0] = "hello Pragadeesh";

console.log(clonedObject);
console.log(original);