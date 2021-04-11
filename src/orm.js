let Sequelize = require("sequelize");

const con = new Sequelize(
    "postgres://fxyozawexqxxmn:b5cfeedbb8fe4b91c403c62f8e8a94fabb20eaedc4f9aaf8e0de3ca6713d692c@ec2-35-174-35-242.compute-1.amazonaws.com:5432/dletfdn37jdpd",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, 
            }
        }
    });
module.exports = con;