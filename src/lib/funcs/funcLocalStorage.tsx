// save to local storage function
function saveToLocalStorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

// get from local storage function
function getFromLocalStorage(key: string): any {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export { saveToLocalStorage, getFromLocalStorage };
