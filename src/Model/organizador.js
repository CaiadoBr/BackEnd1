const {Sequelize, DataTypes} = require("sequelize");
let con = require("../orm");
const Organizador = db.define("Organizador",
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