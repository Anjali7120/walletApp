const Wallet = (sequelize,Sequelize) =>
{
return sequelize.define(
    'wallet',
    {
   
      wallet_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "wallet_user",
          key: "id",
        },
      },
      balance: {
        type: Sequelize.DECIMAL(10,4),
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    }
  );
  }
export default Wallet;


