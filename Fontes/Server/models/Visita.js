module.exports = function(sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
  
    var visita = sequelize.define(
      "visita",
      {
        visi_id_visita: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        visi_bl_foto: {
          allowNull: true,
          type: Sequelize.BLOB
        }
      },
      {
        timestamps: true,
        freezeTableName: true
      }
    );  
  
    visita.associate = function(models) {
      visita.belongsTo(models.funcionario, {
        foreignKey: "func_id_funcionario",
        allowNull: false
      });
    };

    return visita;
  };