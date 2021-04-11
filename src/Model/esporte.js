const {Sequelize, DataTypes} = require("sequelize");
let con = require("../orm");

const Esporte = con.define("Esporte",
    {
        EsporteId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Esporte, 
                key: 'id'
            }
        },
        EsporteNome : {
            type: DataTypes.String,
            allowNull: false
        },
        
    }
);
module.exports = Esporte;