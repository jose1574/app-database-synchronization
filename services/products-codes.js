const urlBase = "http://localhost:3000/products-codes";
const path = require('path')

const data = {
    main_code: '7897042004904',
    other_code: '2050',
    code_type: 'C'
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

module.exports = { getAll, getOne, create }
