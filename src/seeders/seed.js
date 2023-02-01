const models = require("../models");
const db = require("../utils/database");

const users = [
  {
    email: "sebas@gmail.com",
    password: "1234",
  },
  {
    email: "gene@gmail.com",
    password: "4321",
  },
];

const car = [
  {
    user_id: 1,
    totalPrice: 0,
  },
  {
    user_id: 2,
    totalPrice: 0,
  },
];

const product = [
  {
    name: "Shampoo",
    price: 10,
    availableQty: 100,
    userId: 1,
  },
  {
    name: "Jabon",
    price: 3,
    availableQty: 500,
    userId: 2,
  },
];

const order = [
  {
    totalPrice: 6,
    userId: 1,
  },
  {
    totalPrice: 20,
    userId: 2,
  },
];

const product_in_order = [
  {
    orderId: 1,
    productId: 2,
    quantity: 2,
    price: 3,
  },
  {
    orderId: 2,
    productId: 1,
    quantity: 2,
    price: 10,
  },
];

const product_in_car = [
  {
    carId: 1,
    productId: 2,
    quantity: 2,
    price: 3,
  },
  {
    carId: 2,
    productId: 1,
    quantity: 2,
    price: 10,
  },
];

db.sync({ force: true })
  .then(() => {
    console.log("db synced");

    users.forEach((user) => models.users.create(user));

    setTimeout(() => {
      car.forEach((car) => models.car.create(car));
    }, 100);
    setTimeout(() => {
      product.forEach((product) => models.product.create(product));
    }, 200);
    setTimeout(() => {
      order.forEach((order) => models.order.create(order));
    }, 300);
    setTimeout(() => {
      product_in_order.forEach((productInOrder) =>
        models.product_in_order.create(productInOrder)
      );
    }, 400);
    setTimeout(() => {
      product_in_car.forEach((productInCar) =>
        models.product_in_car.create(productInCar)
      );
    }, 500);
  })
  .catch((error) => console.log(error));
