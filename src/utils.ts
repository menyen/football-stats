export const dateStringtoDate = (dateString: string): Date => {
  const dateElements = dateString
    .split('/')
    .map((element: string) => parseInt(element));

  return new Date(dateElements[2], dateElements[1] - 1, dateElements[0]);
};
