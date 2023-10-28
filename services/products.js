const urlBase = "http://localhost:3000/products";
const path = require('path')

const data = {
  code: "1001123",
  description: "otro cambio",
  short_name: "UN NOMBRE CORTO DE PRUEBA 400",
  mark: "",
  model: "",
  referenc: "",
  department: '01',
  days_warranty: 0,
  sale_tax: "EX",
  buy_tax: "EX",
  rounding_type: 2,
  costing_type: 0,
  discount: 0,
  max_discount: 0,
  minimal_sale: 0,
  maximal_sale: 0,
  status: "01",
  origin: "01",
  take_department_utility: true,
  allow_decimal: true,
  edit_name: false,
  sale_price: 0,
  product_type: "T",
  technician: "00",
  request_technician: true,
  serialized: false,
  request_details: false,
  request_amount: false,
  coin: "01",
  allow_negative_stock: false,
  use_scale: false,
  add_unit_description: false,
  use_lots: false,
  lots_order: 0,
  minimal_stock: 0,
  notify_minimal_stock: false,
  size: "",
  color: "",
  extract_net_from_unit_cost_plus_tax: true,
  maximum_stock: 0,
};



const getAll = async () => {
  return new Promise((resolve, reject) => {
    fetch(urlBase)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(err => reject(err));
  })
}

const getOne = async (id) => {
  return new Promise((resolve, reject) => {
    fetch(path.join(urlBase, "/", id))
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  })
}

const create = async (body) => {
  return new Promise((resolve, reject) => {
    fetch(urlBase, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })
}


module.exports = {getAll, getOne, create }
