import dbConfig from "../config/db.config";

import Sequelize from "sequelize";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true
}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import wallet from './wallet';
import walletUser from './walletUser';
import walletTransaction from './walletTransaction';


db.wallet = wallet(sequelize, Sequelize);
db.walletUser = walletUser(sequelize, Sequelize);
db.walletTransaction = walletTransaction(sequelize, Sequelize);
//defining models end

//add relations start
db.walletTransaction.belongsTo(db.wallet, {
  foreignKey: "wallet_id",
  as: "wallets",
});

db.wallet.belongsTo(db.walletUser, {
  foreignKey: "wallet_user_id",
  as: "wallet_user",
});

//add relations end

export default db;
