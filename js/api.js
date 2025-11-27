// функции загрзки данных, их получения и отправки
import {MAIN_URL, STATUS_SUCCESS, Route, Method, ErrorMessage} from './data.js';

async function loadData (route, error, method = Method.GET, body = null) {
  try {
    const response = await fetch(`${MAIN_URL}${route}`, {method, body});
    if (response.status !== STATUS_SUCCESS) {
      throw new Error();
    }
    return await response.json();
  } catch {
    throw new Error(error);
  }
}

function getData () {
  return loadData(Route.GET_ROUTE, ErrorMessage.GET_ERROR);
}

function sendData (body) {
  return loadData(Route.SEND_ROUTE, ErrorMessage.SEND_ERROR, Method.POST, body);
}

export {getData, sendData};
