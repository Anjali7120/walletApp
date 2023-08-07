const WalletTransaction = (sequelize ,Sequelize) =>
{
return sequelize.define(
    'wallet_transaction',
    {
      wallet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "wallet",
          key: "id",
        },
      },
      amount: {
        type: Sequelize.DECIMAL(10,4),
      },
  
      remarks: {
        type: Sequelize.STRING,
      },
  
      status:  {
        type: Sequelize.ENUM,
        values: ['successfull', 'rejected'],
        defaultValue: 'successfull',
      },
  
      type: {
        type: Sequelize.ENUM,
        values: ['debit', 'credit']
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
export default WalletTransaction;




