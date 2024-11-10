// Напишіть функцію getProductDetails,
//     яка приймає ідентифікатор товару productId та дві колбек-функції successCallback
// та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у
// successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback
// і передається повідомлення про помилку.
function getProductDetails(productId, successCallback, errorCallback) {
    setTimeout(() => {
        // Припустимо, що ми отримали деталі товару з якогось джерела
        const productDetails = {
            id: productId,
            name: "Product Name",
            price: 100,
            description: "Product description goes here.",
        };
        // Перевірка, чи товар знайдено
        if (productDetails) {
            // Викликаємо успішний колбек і передаємо деталі товару
            successCallback(productDetails);
        } else {
            // Викликаємо колбек помилки і передаємо повідомлення
            errorCallback("Product not found");
        }
    }, 1000); // Час затримки для емуляції асинхронного запиту
}
// Приклад використання:
const productIdToSearch = "123";
// Функція успішного колбеку
const onSuccess = (details) => {
    console.log("Product details:", details);
};
// Функція колбеку помилки
const onError = (errorMessage) => {
    console.error("Error:", errorMessage);
};
// Виклик функції getProductDetails з передачею колбеків
getProductDetails(productIdToSearch, onSuccess, onError);
