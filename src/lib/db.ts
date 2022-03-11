// Google Spread Sheet URL
// ex : `https://script.google.com/macros/s/AKfycbxcsaH3OBNxXDDlZZzDKttMMfwMT-_EEYisYzBh7F_W8sMFX0WwutRjjpjIlaImTqoAEQ/exec`;
const url = process.env.REACT_APP_GOOGLE_SPREAD_SHEET;

export const postTestResult = (id: string) => {
  fetch(`${url}?시간=${new Date().toLocaleDateString()}&결과=${id}`);
};
