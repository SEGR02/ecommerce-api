const OrderServices = require("../services/orders.services");
const transporter = require("../utils/mailer");

const getOrdersById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await OrderServices.getOrdersById(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const createOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await OrderServices.getTotalPrice(id);
    const { total_price } = data;
    const field = {};
    field.total_price = total_price;
    field.user_id = id;
    // ? Creando la orden
    const result = await OrderServices.createOrderById(field);
    const order_id = result.id;
    const productInCar = await OrderServices.getProductInCarById(id);
    // ? Llenando la orden
    productInCar.forEach(async (product) => {
      const field = {};
      field.order_id = order_id;
      field.product_id = product.product_id;
      field.quantity = product.quantity;
      field.price = product.price;
      await OrderServices.addProductToOrder(field);
    });
    // ? Limpiando carrito product_in_car
    await OrderServices.cleanCar(id);
    // ? Limpiando car
    await OrderServices.cleanTotalPrice(id);
    res.status(201).json({ message: "Order created" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const orderPaid = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await OrderServices.orderPaid(id);
    const user = await OrderServices.findEmail(id);
    const { email } = user;
    res.json({ message: "Factura pagada exitosamente verifique su email" });
    await transporter.sendMail({
      to: email,
      from: "ian.rosas@academlo.com",
      subjetc: "Confirmation of paid invoice",
      html: `<h1>Su orden numero ${id} ha sido pagada exitosamente</h1> <p>Tu paquete ya ha sido enviado</p><p> Solo haz click en el siguiente <a href='#'' target='new_blanc'> enlace para verificar su seguimiento </a>`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  getOrdersById,
  createOrderById,
  orderPaid,
};
