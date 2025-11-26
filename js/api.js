// функции загрзки данных, их получения и отправки
import {BASE_URL, STATUS_SUCCESS, Route, Method, Error} from './data.js';

async function loadData (route, error, method = Method.GET, body = null) {
  try {
    const response = await fetch(`${BASE_URL}${route}`, {method, body});
    if (response.status !== STATUS_SUCCESS) {
      throw new Error();
    }
    return await response.json();
  } catch {
    throw new Error(error);
  }
}

function getData () {
  return loadData(Route.GET_DATA, Error.GET_DATA);
}

function sendData (body) {
  return loadData(Route.SEND_DATA, Error.SEND_DATA, Method.POST, body);
}

export {getData, sendData};
