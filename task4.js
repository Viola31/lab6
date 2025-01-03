// З об'єкту concerts отримати масив, який буде містити лише імена міст.
// З масиву потрібно прибрати міста, в яких концерт  уже пройшов і   відсортувати їх у хронологічному порядку.
//     Результат вивести у консоль.
//     Очікуваний результат ["Одеса", "Умань", "Харків"]
// Застосувати стрілочні функції

const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

// Отримання масиву лише імен міст
const cityNames = Object.keys(concerts);

// Фільтрація міст, в яких концерт вже пройшов
const upcomingCities = cityNames.filter(city => concerts[city] > new Date());

// Сортування міст у хронологічному порядку
const sortedCities = upcomingCities.sort((city1, city2) => concerts[city1] - concerts[city2]);

// Виведення результату у консоль
console.log(sortedCities);
