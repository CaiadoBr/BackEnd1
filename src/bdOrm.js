const con = require("./orm");
const esporte = require("./model/esporte");

async function criarBanco() {
    await con.sync();
}

async function inserir() {
    await Professor.create({nome:"Beltrano"})
}

async function consultar() {
    let res = await Professor.findAll();
    console.log(res);
}

consultar();