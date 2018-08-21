module.exports = function(sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
  
    var proprietario = sequelize.define(
      "proprietario",
      {
        prop_id_proprietario: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        prop_ds_nome: {
          allowNull: true,
          type: Sequelize.STRING
        },
        prop_ds_telefone: {
            allowNull: true,
            type: Sequelize.STRING
        },
        prop_ds_email: {
            allowNull: true,
            type: Sequelize.STRING
        },
        prop_nm_cpf: {
            allowNull: true,
            type: Sequelize.INTEGER
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );  

    return proprietario;
  };