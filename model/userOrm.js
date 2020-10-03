const { findAllUsers, insertUserQuery } = require('./userQueries');
const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

const inserUserToDb = async (username) => {
  try {
    const [result] = await connection.query(insertUserQuery, username);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchUsers,
  inserUserToDb,
};
