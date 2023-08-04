import Sequelize from 'sequelize';
import config from "../config/db.config";

const sequelize=new Sequelize(config.DB, config.USER, config.PASSWORD,  {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
  define: {
    timestamps: true,
    freezeTableName: true
  },
});

export default sequelize;