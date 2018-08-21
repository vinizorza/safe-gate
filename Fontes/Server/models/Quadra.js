module.exports = function(sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
  
    var quadra = sequelize.define(
      "quadra",
      {
        quad_id_quadra: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        quad_ds_nome: {
          allowNull: true,
          type: Sequelize.STRING
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );  
  
    return quadra;
  };