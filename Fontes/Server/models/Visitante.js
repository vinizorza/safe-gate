module.exports = function(sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
  
    var visitante = sequelize.define(
      "visitante",
      {
        visi_id_visitante: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        visi_ds_nome: {
          allowNull: true,
          type: Sequelize.STRING
        },
        visi_ds_cpf: {
            allowNull: true,
            type: Sequelize.STRING
        },
        visi_bl_foto: {
            allowNull: true,
            type: Sequelize.BLOB
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );

    return visitante;
  };