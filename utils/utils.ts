export const API_BASE_URL = "https://mandev.devsauna.ru/api/widget";

export const getHourString = (hours: string) => {
  const countOfHours = Number(hours);
  if (countOfHours === 1) {
    return `${hours} час`;
  } else if (countOfHours >= 2 && countOfHours <= 4) {
    return `${hours} часа`;
  } else {
    return `${hours} часов`;
  }
};