module.exports = function(sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
  
    var veiculo = sequelize.define(
      "veiculo",
      {
        veic_id_veiculo: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        veic_ds_tipo: {
          allowNull: true,
          type: Sequelize.STRING
        },
        veic_ds_marca: {
            allowNull: false,
            type: Sequelize.STRING
        },
        veic_ds_modelo: {
            allowNull: false,
            type: Sequelize.STRING
        },
        veic_ds_placa: {
            allowNull: false,
            type: Sequelize.STRING
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );  
  
    veiculo.associate = function(models) {
      veiculo.belongsTo(models.visita, {
        foreignKey: "visi_id_visita",
        allowNull: true
      });
    };

    veiculo.associate = function(models) {
        veiculo.belongsTo(models.morador, {
            foreignKey: "mora_id_morador",
            allowNull: true
        });
    };

    return veiculo;
  };