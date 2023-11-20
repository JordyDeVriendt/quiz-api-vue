const express = require("express");
const app = express();
const PORT = 3000;
const faker = require("faker");

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const user = {
  id: faker.random.uuid(),
  username: "demo123",
  email: "demo123@outlook.com",
  password: "demo123",
};

function generateQuizz() {
  const quiz = {
    id: faker.random.uuid(),
    title: faker.lorem.words(3),
    author: user.id,
    questions: [
      {
        id: faker.random.uuid(),
        question_text: faker.lorem.sentence(),
        options: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
        correct_answer: faker.random.number({ min: 0, max: 2 }),
      },
      {
        id: faker.random.uuid(),
        question_text: faker.lorem.sentence(),
        options: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
        correct_answer: faker.random.number({ min: 0, max: 2 }),
      },
      {
        id: faker.random.uuid(),
        question_text: faker.lorem.sentence(),
        options: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
        correct_answer: faker.random.number({ min: 0, max: 2 }),
      },
    ],
  };

  return quiz;
}

function generateQuizzes(count) {
  const quizzesList = [];
  for (let i = 0; i < count; i++) {
    const quiz = generateQuizz();
    quizzesList.push(quiz);
  }

  return quizzesList;
}

const users = [user];
const quizzes = generateQuizzes(10);

app.get("/quizzes", (req, res) => {
  res.status(200).send(quizzes);
});

app.get("/users", (req, res) => {
  res.status(200).send(users);
});
