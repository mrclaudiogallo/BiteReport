const Sequelize = require("sequelize");

const sequelize = new Sequelize("rest_reviewsdb", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",

});


module.exports = sequelize;