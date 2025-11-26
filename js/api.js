// функции загрзки данных, их получения и отправки
import {BASE_URL, STATUS_SUCCESS, ROUTE, METHOD, ERROR_TEXT} from './data.js';

async function loadData (route, errorText, method = METHOD.GET, body = null) {
  try {
    const response = await fetch(`${BASE_URL}${route}`, {method, body});
    if (response.status !== STATUS_SUCCESS) {
      throw new Error();
    }
    return await response.json();
  } catch {
    throw new Error(errorText);
  }
}

function getData () {
  return loadData(ROUTE.GET_DATA, ERROR_TEXT.GET_DATA);
}

function sendData (body) {
  return loadData(ROUTE.SEND_DATA, ERROR_TEXT.SEND_DATA, METHOD.POST, body);
}

export {getData, sendData};
