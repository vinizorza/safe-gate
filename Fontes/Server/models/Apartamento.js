module.exports = function(sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
  
    var apartamento = sequelize.define(
      "apartamento",
      {
        apar_id_apartamento: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        apar_nm_numero: {
          allowNull: true,
          type: Sequelize.INTEGER
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );  
  
    apartamento.associate = function(models) {
      apartamento.belongsTo(models.bloco, {
        foreignKey: "bloc_id_bloco",
        allowNull: false
      });
    };

    apartamento.associate = function(models) {
      apartamento.belongsTo(models.proprietario, {
        foreignKey: "prop_id_proprietario",
        allowNull: false
      });
    };

    return apartamento;
  };