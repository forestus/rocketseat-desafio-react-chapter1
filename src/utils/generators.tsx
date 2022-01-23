export function getRandomNumber() {
  const min: number = 1;
  const max: number = 9999;
  return Math.random() * (max - min) + min;
}
