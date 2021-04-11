
const {Sequelize, DataTypes} = require("sequelize");
let con = require("../orm");


const Time = con.define("Time",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome : {
            type: DataTypes.STRING,
            allowNull: false
        },
        ListaJogadores : DataTypes.Array
    }
);

module.exports = Time;