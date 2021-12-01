export const addCommaInEveryThreeChars = (input: string | number) => {
  const stringInput = String(input);
  return stringInput.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
};

export const hasScrollReachedBottom = (
  scrollTop: number,
  el: HTMLDivElement | null
) => {
  if (el) return scrollTop >= el?.scrollHeight - el?.clientHeight - 2;
};
