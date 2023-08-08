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
  
      balance:  {
        type: Sequelize.DECIMAL(10,4),
      },
      transaction_id:  {
        type: Sequelize.STRING,
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




