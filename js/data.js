//основные данные для работы сайта
const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

const VALIDATE_COMMENT_ERROR = 'Максимальная длинна комментария 140 символов';

const VALIDATE_HASHTAGS_ERROR = 'Неверный хэштэг';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const STATUS_SUCCESS = 200;

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const Error = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const ALERT_SHOW_TIME = 5000;

export {
  VALIDATE_COMMENT_ERROR,
  VALIDATE_HASHTAGS_ERROR,
  SCALE_MAX,
  SCALE_MIN,
  SCALE_STEP,
  BASE_URL,
  STATUS_SUCCESS,
  Route,
  Method,
  Error,
  ALERT_SHOW_TIME
};
