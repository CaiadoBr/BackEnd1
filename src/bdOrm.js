const con = require("./orm");
const esporte = require("./model/esporte");

async function criarBanco() {
    await con.sync();
}

async function inserir() {
    await esporte.create({nome:"Soccer"})
}

async function consultar() {
    let res = await esporte.findAll();
    console.log(res);
}

criarBanco();