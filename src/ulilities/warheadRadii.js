
const warheadRadii = {
    SurfaceExplosion: {
        '20t': {
          overpressure3000psi: 100,
          overpressure200psi: 500,
          overpressure20psi: 1000,
          overpressure5psi: 1500,
          overpressure1psi: 2000,
          ionizing50Sv: 2500,
          ionizing10Sv: 3000,
          ionizing6Sv: 3500,
          ionizing1Sv: 4000,
          Pierwszego: 4500,
          Drugiego: 5000,
          Trzeciego: 5500,
          fireball: 100
      },
      '15kt': {
        overpressure3000psi: 60,
          overpressure200psi: 138,
          overpressure20psi: 380,
          overpressure5psi: 800,
          overpressure1psi: 2050,

          ionizing50Sv: 640,
          ionizing10Sv: 855,
          ionizing6Sv: 920,
          ionizing1Sv: 1180,

          Pierwszego: 2190,
          Drugiego: 1570,
          Trzeciego: 1285,
          fireball: 185
      },
      '100Mt': {
        overpressure3000psi: 1050,
        overpressure200psi: 2600,
        overpressure20psi: 7150,
        overpressure5psi: 15000,
        overpressure1psi: 38700,
        
        ionizing50Sv: 4625,
        ionizing10Sv: 4851,
        ionizing6Sv: 4922,
        ionizing1Sv: 5150,

        Pierwszego: 84550,
        Drugiego: 66551,
        Trzeciego: 54680,
        fireball: 6200
      }
  },
  AirExplosion: {
      '20t': {
          overpressure3000psi: 300,
          overpressure200psi: 600,
          overpressure20psi: 1200,
          overpressure5psi: 1800,
          overpressure1psi: 2400,
          ionizing50Sv: 350,
          ionizing10Sv: 650,
          ionizing6Sv: 2000,
          ionizing1Sv: 4800,
          Pierwszego: 5400,
          Drugiego: 6000,
          Trzeciego: 6600,
          fireball: 200
      },
      '15kt': {
          overpressure3000psi: 0.1,
          overpressure200psi: 138,
          overpressure20psi: 400,
          overpressure5psi: 905,
          overpressure1psi: 2350,

          ionizing50Sv: 625,
          ionizing10Sv: 850,
          ionizing6Sv: 915,
          ionizing1Sv: 1172,

          Pierwszego: 2590,
          Drugiego: 1860,
          Trzeciego: 1523,
          fireball: 140
      },
      '100Mt': {
          overpressure3000psi: 1050,
          overpressure200psi: 2600,
          overpressure20psi: 7150,
          overpressure5psi: 15050,
          overpressure1psi: 38750,
          
          ionizing50Sv: 4625,
          ionizing10Sv: 4851,
          ionizing6Sv: 4922,
          ionizing1Sv: 5150,

          Pierwszego: 84550,
          Drugiego: 66551,
          Trzeciego: 54680,
          fireball: 4740
      }
  }};
export default warheadRadii;
    