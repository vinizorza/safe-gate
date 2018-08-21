module.exports = function(sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
  
    var visita_visitante = sequelize.define(
      "visita_visitante",
      {
        visi_id_visita_visitante: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );  
  
    visita_visitante.associate = function(models) {
        visita_visitante.belongsTo(models.visita, {
            foreignKey: "visi_id_visita",
            primaryKey: true,
            allowNull: false
        });

        visita_visitante.belongsTo(models.visitante, {
            foreignKey: "visi_id_visitante",
            primaryKey: true,
            allowNull: false
        });
    };

    return visita_visitante;
  };