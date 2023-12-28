// 1 Розробити скрипт який буде запитувати ім’я користувача (userName) за допомогою prompt та вивести результат за допомогою alert

// 1.1 перевірити змінну userName що вона не порожня, якщо порожня то за замовчуванням записати значення “anonym”. Відобразити значення змінної userName.

let userName = prompt('Enter your name', '');
userName = userName || 'anonym';
alert(`Hello ${userName}!`);

// 1.2 Якщо користувач ввів “admin”, то відобразити - “Hello admin”, якщо щось інше, то “Welcome”

userName = prompt('Enter your name', '');
alert(userName === 'admin' && 'Hello admin' || 'Welcome');

// 2 Розробити скрипт який отримає від юзера(prompt) дані login, password, age

const login = prompt('Enter login');
const password = prompt('Enter password');
const age = prompt('Enter age');

// 2.1. Перевірити що login та password обидва поля не пусті, якщо хочаб одне пусте вивести повідомлення, “login or password incorrect”, якщо всі заповнені то ‘welcome’

alert((login === null || login === '' ||  password === null || password === '') && 'Login or password incorrect' || 'Welcome');

// 2.2 Дізнатися які саме поля було не заповнено та вивести підказку за допомогою alert()

alert(((login === null || login === '') && 'Login is empty') || ((password === null || password === '') && 'Password is empty') || 'Login and password correct');

// 2.3. Перевірити одним виразом що змінна age заповнена та вік користувача від 18 до 28, якщо все добре то вивести повідомлення Hello, інакше Goobay

alert((age > 17 && age < 29) && 'Hello' || 'Goodbay');