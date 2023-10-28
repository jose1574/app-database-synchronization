const urlBase = "http://localhost:3000/products-units";
const path = require('path')

const data = {
	unit: "00",
	product_code: "654",
	main_unit: true,
	conversion_factor: 0,
	unit_type: 0,
	show_in_screen: true,
	is_for_buy: true,
	is_for_sale: true,
	unitary_cost: 26.43,
	calculated_cost: 26.43,
	average_cost: 26.43,
	perc_waste_cost: 0,
	perc_handling_cost: 0,
	perc_operating_cost: 0,
	perc_additional_cost: 0,
	maximum_price: 35.78,
	offer_price: 35.78,
	higher_price: 35.78,
	minimum_price: 35.78,
	perc_maximum_price: 35.36,
	perc_offer_price: 35.36,
	perc_higher_price: 35.36,
	perc_minimum_price: 35.36,
	perc_freight_cost: 0,
	perc_discount_provider: 0,
	lenght: 0,
	height: 0,
	width: 0,
	weight: 0,
	capacitance: 0
}



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
