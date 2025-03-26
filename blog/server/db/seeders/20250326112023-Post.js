'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          title: 'CSS GRID',
          description: 'Css CSS GRID GIRD',
          isLiked: false,
        },
        {
          title: 'CSS FLEX',
          description: 'FlEX flex FlEx',
          isLiked: false,
        },
        {
          title: 'CSS BOX',
          description: 'Box BOX box BOX',
          isLiked: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
