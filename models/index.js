// import Sequelize from 'sequelize';
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'test_graphql_db',
  'test_graphql_admin',
  'iamapassword',
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);

const db = {
  User: sequelize.import('./user'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;
module.exports = db;
