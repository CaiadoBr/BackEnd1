const {Sequelize, DataTypes} = require("sequelize");
let con = require("../orm");

const Jogador = con.define("Jogador",
    {
        MatriculaId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Jogador, 
                key: 'id'
            }
        },
        Nome : {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email : {
            type: DataTypes.STRING,
            allowNull: false
        },
        Senha : {
            type: DataTypes.STRING,
            allowNull: false
        },
        Telefone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }
);