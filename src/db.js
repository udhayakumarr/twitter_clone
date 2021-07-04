var faker = require("faker");

module.exports = () => {
  const data = { tweets: [] };
  for (let i = 0; i < 101; i++) {
    data.tweets.push({
      id: i,
      user: {
        name: faker.name.findName(),
        avatarUrl: faker.image.avatar(),
        tagName: `@${faker.name.lastName()}`,
      },
      message: faker.lorem.paragraph(),
      image: i === 0 || i % 5 === 0 ? faker.image.imageUrl() : null,
    });
  }
  return data;
};
