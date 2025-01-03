// Напиши функцію конструктор Storage який створює об'єкти Для управління складом товарів.
// При виклику отримуватиме один агрумент - початковий масив товарів,
// і записувати їх у властивість items.
// Додай методи класу:  getItems() - повертайте масив товарів
// addItems(item)- отримує новий товар та додає його до поточних
// removeItem(item)- отримує товар і, якщо він є, видаляє його з поточних

function Storage(initialItems) {
    this.items = Array.isArray(initialItems) ? [...initialItems] : [];
}

Storage.prototype.getItems = function () {
    return this.items;
};

Storage.prototype.addItems = function (newItem) {
    this.items.push(newItem);
};

Storage.prototype.removeItem = function (itemToRemove) {
    const indexToRemove = this.items.indexOf(itemToRemove);
    if (indexToRemove !== -1) {
        this.items.splice(indexToRemove, 1);
    }
};

// Приклад використання:
const arr = ["apple", "banana", "mango"];
const storageInstance = new Storage(arr);

console.log("Initial items:", storageInstance.getItems());

storageInstance.addItems("berry");
console.log("Items after adding 'berry':", storageInstance.getItems());

storageInstance.removeItem("banana");
console.log("Items after removing 'banana':", storageInstance.getItems());
