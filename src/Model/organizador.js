const {Sequelize, DataTypes} = require("sequelize");
let con = require("../orm");
const Organizador = con.define("Organizador",
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Organizador, 
                key: 'id'
            }
        },
    
    }
);