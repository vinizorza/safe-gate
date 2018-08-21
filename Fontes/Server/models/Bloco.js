module.exports = function(sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
  
    var bloco = sequelize.define(
      "bloco",
      {
        bloc_id_bloco: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        bloc_ds_nome: {
          allowNull: true,
          type: Sequelize.STRING
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );  
  
    bloco.associate = function(models) {
        bloco.belongsTo(models.quadra, {
          foreignKey: "quad_id_quadra",
          allowNull: false
        });
      };

    return bloco;
  };