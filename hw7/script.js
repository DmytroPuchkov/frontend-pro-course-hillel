const whoIs = prompt('Хто прийшов?');

if (whoIs === 'Адмін') {
  const yourPass = prompt('Пароль?');
  if (yourPass === 'Чорний володар') {
    alert ('Ласкаво просимо!');
  } else if (yourPass === null) {
    alert ('Вхід скасовано');
  } else {
    alert('Невірний пароль');
  }
} else if (whoIs === null) {
  alert('Вхід скасовано');
} else {
  alert('Я вас не знаю');
}