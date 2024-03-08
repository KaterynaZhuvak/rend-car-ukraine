export function addCommaToThousands(number) {
  const numberString = number.toString();
  const parts = numberString.split(".");
  const integerPartWithCommas = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const numberWithCommas =
    parts.length === 1
      ? integerPartWithCommas
      : `${integerPartWithCommas}.${parts[1]}`;

  return numberWithCommas;
}
