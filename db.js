const {faker} = require("@faker-js/faker");

module.exports = () => {
  const data = { articles: [] }

  for (let i = 0; i < 10; i++) {
    data.articles.push({ id: i,
      price: {regular: faker.finance.amount(10, 5000, 2), sale: faker.finance.amount(10, 5000, 2)},
      rating: faker.finance.amount(0, 5, 1),
      img: 'https://picsum.photos/300/150',
      tags: [{name: 'Days', value: faker.random.numeric(2)},
        {name: 'Countries', value: faker.random.numeric(2)}],
      title: faker.commerce.productName(),
      url: faker.internet.url()
    })
  }
  return data
}
