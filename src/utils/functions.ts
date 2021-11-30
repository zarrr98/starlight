export const addCommaInEveryThreeChars = (input: string | number) => {
  const stringInput = String(input);
  return stringInput.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
};
