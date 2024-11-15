const express = require("express");
const cors = require("cors"); // Импортируем пакет cors
const faker = require("faker");

const app = express();
const PORT = 3000;

// Включаем CORS
app.use(cors());

// Настройка маршрута для статики (папка src)
app.use(express.static("src"));

// Маршрут для получения непрочитанных сообщений
app.get("/messages/unread", (req, res) => {
  const messages = generateMessages();
  res.json({
    status: "ok",
    timestamp: Date.now(),
    messages,
  });
});

// Функция для генерации случайных сообщений
function generateMessages() {
  const numberOfMessages = faker.datatype.number({ min: 1, max: 5 });
  const messages = [];

  for (let i = 0; i < numberOfMessages; i++) {
    messages.push({
      id: faker.datatype.uuid(),
      from: faker.internet.email(),
      subject: faker.lorem.words(3),
      body: faker.lorem.paragraph(),
      received: faker.date.recent().getTime(),
    });
  }

  return messages;
}

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
