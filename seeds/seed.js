const seedUsers = require('./user-seeds');
const seedBlog = require('./blog-seeds');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----USERS SYNCED -----\n');
  await seedBlog();
  console.log('\n----EVENTS SYNCED -----\n');

  
  process.exit(0);
};

seedDatabase();

