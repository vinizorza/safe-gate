module.exports = function(sequelize, DataTypes) {
    var Sequelize = sequelize.Sequelize;
  
    var morador = sequelize.define(
      "morador",
      {
        mora_id_morador: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        mora_ds_nome: {
          allowNull: true,
          type: Sequelize.STRING
        },
        mora_ds_telefone: {
            allowNull: true,
            type: Sequelize.STRING
        },
        mora_ds_email: {
            allowNull: true,
            type: Sequelize.STRING
        },
        mora_bl_foto: {
            allowNull: true,
            type: Sequelize.BLOB
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    ); 
    
    morador.associate = function(models) {
        morador.belongsTo(models.apartamento, {
            foreignKey: "apar_id_apartamento",
            allowNull: false
        });
    };

    return morador;
  };