const {Sequelize, DataTypes} = require("sequelize");
let con = require("../orm");
const Posicao = db.define("Posicao",
    {
        PosicaoId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Posicao, 
                key: 'id'
            }
        },
        Nome : {
            type: DataTypes.String,
            allowNull: false
        },
        
    }
);