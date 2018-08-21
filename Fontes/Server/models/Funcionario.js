module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.Sequelize;

  var funcionario = sequelize.define(
    "funcionario",
    {
      func_id_funcionario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      func_ds_email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      func_ds_senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      func_ds_nome: {
        allowNull: true,
        type: Sequelize.STRING
      },
      func_nm_telefone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      func_nm_cpf: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING
      },
      func_ds_funcao: {
        allowNull: true,
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );


  return funcionario;
};