
const warheadRadii = {
    SurfaceExplosion: {
        '20t': {
          overpressure3000psi: 2,
          overpressure200psi: 15,
          overpressure20psi: 42,
          overpressure5psi: 88,
          overpressure1psi: 226, 

          ionizing20Sv: 207,
          ionizing6Sv: 289,
          ionizing1Sv: 443,
          ionizing01Sv: 698,

          Pierwszego: 181,
          Drugiego: 125,
          Trzeciego: 105,
          fireball: 7
      },
      '15kt': {
        overpressure3000psi: 60,
          overpressure200psi: 138,
          overpressure20psi: 380,
          overpressure5psi: 800,
          overpressure1psi: 2050,

          ionizing20Sv: 761,
          ionizing6Sv: 922,
          ionizing1Sv: 1180,
          ionizing01Sv: 1540,

          Pierwszego: 2190,
          Drugiego: 1570,
          Trzeciego: 1285,
          fireball: 185
      },
      '100Mt': {
        overpressure3000psi: 1088,
        overpressure200psi: 2641,
        overpressure20psi: 7150,
        overpressure5psi: 15000,
        overpressure1psi: 38700,
        
        ionizing20Sv: 4757,
        ionizing6Sv: 4920,
        ionizing1Sv: 5146,
        ionizing01Sv: 5544,

        Pierwszego: 84550,
        Drugiego: 66551,
        Trzeciego: 54680,
        fireball: 6200
      }
  },
  AirExplosion: {
      '20t': {
          overpressure3000psi: 0,
          overpressure200psi: 0,
          overpressure20psi: 0,
          overpressure5psi: 25,
          overpressure1psi: 400, 
          
          ionizing20Sv: 180,
          ionizing6Sv: 267,
          ionizing1Sv: 430,
          ionizing01Sv: 689,

          Pierwszego: 185,
          Drugiego: 105,
          Trzeciego: 65,
          fireball: 10
      },
      '15kt': {
          overpressure3000psi: 0.1,
          overpressure200psi: 143,
          overpressure20psi: 400,
          overpressure5psi: 905,
          overpressure1psi: 2350,

          ionizing20Sv: 753,
          ionizing6Sv: 916,
          ionizing1Sv: 1174,
          ionizing01Sv: 1535,

          Pierwszego: 2590,
          Drugiego: 1860,
          Trzeciego: 1523,
          fireball: 144
      },
      '100Mt': {
          overpressure3000psi: 1050,
          overpressure200psi: 2600,
          overpressure20psi: 7150,
          overpressure5psi: 15050,
          overpressure1psi: 38750,
          
          ionizing20Sv: 4757,
          ionizing6Sv: 4919,
          ionizing1Sv: 5146,
          ionizing01Sv: 5544,

          Pierwszego: 84550,
          Drugiego: 66551,
          Trzeciego: 54680,
          fireball: 6225
      }
  }};
export default warheadRadii;
    