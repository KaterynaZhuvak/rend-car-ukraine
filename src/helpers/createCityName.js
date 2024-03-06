export const createCorrectAddress = (address) => {
  const addressArray = address
    .replaceAll(",", "")
    .split(" ")
    .reverse()
    .slice(0, 2)
    .reverse();

  return addressArray.join(" | ");
};
