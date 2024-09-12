import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  try {
    throw new Error('Искусственная ошибка для логирования');
  } catch (err) {
    fs.appendFile('errors.log', `${new Date().toISOString()} - ${err.message}\n`, (err) => {
      if (err) console.error('Ошибка записи в файл:', err);
    });

    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});