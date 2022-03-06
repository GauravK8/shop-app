'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('product', [
      {
        title: 'boAt Rockerz 255F Pro+ Bluetooth Headset  (Active Black, In the Ear)',
        description:
          'boAt Rockerz 255 Pro+ is a power-packed in-ear wireless neckband headphone that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with Bluetooth V5.0 for instant wireless connectivity. Its super powerful 300mAh battery provides a humongous playtime of up to 8 hours for an extended audio bliss. Its 10mm dynamic drivers help supply superior musical experience to the user with immersive sound. With our ASAP fast charge technology, you can get the headphones fully charged in just 60 minutes. It also offers resistance against water and sweat with IPX7 rated premium build. One can control the playback and calls easily via the provided multifunction controls and even summon respective smart Voice Assistant. Get ready to get enthralled by the pumped up audio and soaring vibe of Rockerz 255 Pro+',
        picture: 'rockerz-255f-pro-rockerz-255-pro-boat-original-imagy42wmmtzjbve.jpeg',
        amount: 1499,
      },
      {
        title: 'OnePlus Bullets Wireless Z Bass Edition Bluetooth Headset  (Bold Black, In the Ear)',
        description:
          'The Bullets Wireless Z Bass Edition will enhance the way you listen to music, with its convenient features such as the Magnetic Control. This pair of earphones supports Bluetooth (v5.0). Oh, and it offers a playback time of up to 17 hours when it is fully charged.',
        picture: 'e304a-oneplus-original-imag2swdgagpmwjc.jpeg',
        amount: 1999,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('product', null, {});
  },
};
