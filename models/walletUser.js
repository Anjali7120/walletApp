import Sequelize from 'sequelize';

const WalletUser = (sequelize) =>
sequelize.define(
    'wallet_user',
    {
   
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    }
  );

export default WalletUser;


