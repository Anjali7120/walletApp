import Wallet from './wallet';
import WalletTransaction from './walletTransaction';
import WalletUser from './walletUser';

const models = (sequelize) => {
  
  const WalletModel = Wallet(sequelize);
  const WalletTransactionModel =WalletTransaction(sequelize);
  const WalletUserModel = WalletUser(sequelize);
 
  return {    
    WalletUserModel,
    WalletTransactionModel,
    WalletModel
  };
};
export default models;
