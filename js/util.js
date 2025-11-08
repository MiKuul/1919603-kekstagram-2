// функция проверки на длинну строки
function checkStringLength (string, maxLengthString) {
  const strLength = string.length;
  return strLength <= maxLengthString;
}

// функция проверки на полиндром
function isItPolindrom (str) {
  const mainStr = str.replaceAll(' ', '').toLowerCase();
  const reversedStr = mainStr.split('').reverse().join('');

  return mainStr === reversedStr;
}

// функция рандомного числа
function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// функция рандомного неповторяющегося числа в заданном диапазоне
function createRandomNonRepeatingNumber (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// функция получения минут из заданного времени
function getMinutesFromTime (string) {
  const timeParts = string.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  return (hours * 60) + minutes;
}

// функция, в которой гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.
function isWorkingDayAndMeetingFitInOneDay (dayStart, dayEnd, meetingStart, meetingDuration) {
  const startDay = getMinutesFromTime(dayStart);
  const endDay = getMinutesFromTime(dayEnd);
  const startMeeting = getMinutesFromTime(meetingStart);
  const endMeeting = startMeeting + meetingDuration;

  return (startDay <= startMeeting && endDay >= endMeeting);
}

// Проверки
isWorkingDayAndMeetingFitInOneDay('08:00', '17:30', '14:00', 90); // true
isWorkingDayAndMeetingFitInOneDay('8:0', '10:0', '8:0', 120); // true
isWorkingDayAndMeetingFitInOneDay('08:00', '14:30', '14:00', 90); // false
isWorkingDayAndMeetingFitInOneDay('14:00', '17:30', '08:0', 90); // false
isWorkingDayAndMeetingFitInOneDay('8:00', '17:30', '08:00', 900); // false

// проверки
checkStringLength('kek', 3);
isItPolindrom('kek');

// Если нажали клавишу Esc
function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

export {getRandomInteger, createRandomNonRepeatingNumber, isEscapeKey};
