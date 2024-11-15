import { interval } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, map, catchError } from "rxjs/operators";

// URL для получения сообщений
const url = "https://pollingserver.onrender.com/messages/unread";

// Интервал опроса (например, каждые 5 секунд)
const pollingInterval = 2000;

// Элемент контейнера для отображения сообщений
const messagesContainer = document.getElementById("messages-container");

// Флаг для проверки наличия сообщения об ошибке
let hasError = false;

// Функция для добавления сообщения об ошибке в контейнер
function showErrorNotification() {
  if (!hasError) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-notification");
    errorDiv.textContent = "Ошибка при получении сообщений. Сервер недоступен.";
    messagesContainer.prepend(errorDiv);
    hasError = true; // Устанавливаем флаг
  }
}

// Функция для удаления сообщения об ошибке
function hideErrorNotification() {
  const existingError = document.querySelector(".error-notification");
  if (existingError) {
    existingError.remove();
    hasError = false; // Сбрасываем флаг
  }
}

// Функция для добавления сообщения в контейнер
function addMessageToContainer(message) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  const fromDiv = document.createElement("div");
  fromDiv.classList.add("from");
  fromDiv.textContent =
    message.from.length > 15 ? message.from.slice(0, 15) + "..." : message.from;
  messageDiv.append(fromDiv);

  const subjectDiv = document.createElement("div");
  subjectDiv.classList.add("subject");
  subjectDiv.textContent =
    message.subject.length > 15
      ? message.subject.slice(0, 15) + "..."
      : message.subject;
  messageDiv.append(subjectDiv);

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("date");

  // Используем текущее локальное время клиента
  const receivedDate = new Date();
  dateDiv.textContent = `${String(receivedDate.getHours()).padStart(
    2,
    "0"
  )}:${String(receivedDate.getMinutes()).padStart(2, "0")} ${String(
    receivedDate.getDate()
  ).padStart(2, "0")}.${String(receivedDate.getMonth() + 1).padStart(
    2,
    "0"
  )}.${receivedDate.getFullYear()}`;

  messageDiv.append(dateDiv);

  // Добавляем новое сообщение в начало контейнера
  messagesContainer.prepend(messageDiv);
}

// Реактивный поток для периодического опроса
interval(pollingInterval)
  .pipe(
    switchMap(() => ajax.getJSON(url)),
    map((response) => response.messages),
    catchError((error) => {
      showErrorNotification(); // Показать уведомление об ошибке
      return []; // Возвращаем пустой массив, чтобы подписка не прерывалась
    })
  )
  .subscribe((messages) => {
    if (messages.length > 0) {
      hideErrorNotification(); // Убираем уведомление, если запрос успешен
      messages.forEach(addMessageToContainer);
    }
  });
