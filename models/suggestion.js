const suggestion = (sequelize, DataTypes) => {
  const Suggestion = sequelize.define('suggestion', {
    text: DataTypes.STRING,
  });

  return Suggestion;
};

module.exports = suggestion;
