//основные данные для работы сайта
const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

const VALIDATE_COMMENT_ERROR = 'Максимальная длинна комментария 140 символов';

const VALIDATE_HASHTAGS_ERROR = 'Неверный хэштэг';

const MAIN_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const STATUS_SUCCESS = 200;

const Route = {
  GET_ROUTE: '/data',
  SEND_ROUTE: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorMessage = {
  GET_ERROR: 'Ошибка загрузки данных. Попробуйте обновить страницу или зайти позже.',
  SEND_ERROR: 'Ошибка отправки формы. Попробуйте отправить форму ещё раз или воспользуйтесь ею позже.',
};

const ERROR_SHOW_TIME = 5000;

export {
  VALIDATE_COMMENT_ERROR,
  VALIDATE_HASHTAGS_ERROR,
  SCALE_MAX,
  SCALE_MIN,
  SCALE_STEP,
  MAIN_URL,
  STATUS_SUCCESS,
  Route,
  Method,
  ErrorMessage,
  ERROR_SHOW_TIME
};
