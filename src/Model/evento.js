const {Sequelize, DataTypes} = require("sequelize");
let con = require("../orm");

const Evento = db.define("Evento",
    {
       IdEvento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Evento, 
                key: 'id'
            }
        },
        DataPraticar : {
            type: DataTypes.DATE,
            allowNull: false
        },
        Localizacao : {
            type: DataTypes.STRING,
            allowNull: false
        },
        Times : {
            type: DataTypes.ARRAY,
            allowNull: false
        },
         Esporte: {
            type: DataTypes.Esporte,
            allowNull: false
        },

    }
);