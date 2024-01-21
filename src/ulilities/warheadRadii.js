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
          ionizing0025Sv: 883,

          Pierwszego: 181,
          Drugiego: 125,
          Trzeciego: 105,
          fireball: 7
      },
      '300t': {
        overpressure3000psi: 16,
        overpressure200psi: 38,
        overpressure20psi: 103,
        overpressure5psi: 216,
        overpressure1psi: 557, 

        ionizing20Sv: 348,
        ionizing6Sv: 460,
        ionizing1Sv: 658,
        ionizing01Sv: 965,
        ionizing0025Sv: 1181,

        Pierwszego: 446,
        Drugiego: 312,
        Trzeciego: 257,
        fireball: 39
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
          ionizing0025Sv: 1794,

          Pierwszego: 2190,
          Drugiego: 1570,
          Trzeciego: 1285,
          fireball: 185
      },
      '100kt': {
        overpressure3000psi: 109,
        overpressure200psi: 264,
        overpressure20psi: 715,
        overpressure5psi: 1502,
        overpressure1psi: 3864,

        ionizing20Sv: 1076,
        ionizing6Sv: 1261,
        ionizing1Sv: 1544,
        ionizing01Sv: 1927,
        ionizing0025Sv: 2197,

        Pierwszego: 5020,
        Drugiego: 3638,
        Trzeciego: 2973,
        fireball: 395
    },
    '300kt': {
        overpressure3000psi: 156,
        overpressure200psi: 381,
        overpressure20psi: 1030,
        overpressure5psi: 2167,
        overpressure1psi: 5576,

        ionizing20Sv: 1288,
        ionizing6Sv: 1483,
        ionizing1Sv: 1776,
        ionizing01Sv: 2174,
        ionizing0025Sv: 2453,

        Pierwszego: 8045,
        Drugiego: 5882,
        Trzeciego: 4805,
        fireball: 613
    },
      '800kt': {
        overpressure3000psi: 217,
        overpressure200psi: 527,
        overpressure20psi: 1428,
        overpressure5psi: 3004,
        overpressure1psi: 7727,

        ionizing20Sv: 1485,
        ionizing6Sv: 1692,
        ionizing1Sv: 1992,
        ionizing01Sv: 2398,
        ionizing0025Sv: 2680,

        Pierwszego: 12215,
        Drugiego: 9013,
        Trzeciego: 7380,
        fireball: 906
    },
    '5Mt': {
        overpressure3000psi: 400,
        overpressure200psi: 974,
        overpressure20psi: 2631,
        overpressure5psi: 5548,
        overpressure1psi: 14228,
        
        ionizing20Sv: 1910,
        ionizing6Sv: 2122,
        ionizing1Sv: 2431,
        ionizing01Sv: 2838,
        ionizing0025Sv: 3133,

        Pierwszego: 26544,
        Drugiego: 19812,
        Trzeciego: 16169,
        fireball: 1885
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
        ionizing0025Sv: 5944,

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
          ionizing0025Sv: 876,

          Pierwszego: 185,
          Drugiego: 105,
          Trzeciego: 65,
          fireball: 10
      },
      '300t': {
        overpressure3000psi: 0,
        overpressure200psi: 0,
        overpressure20psi: 80,
        overpressure5psi: 314,
        overpressure1psi: 845, 

        ionizing20Sv: 331,
        ionizing6Sv: 448,
        ionizing1Sv: 651,
        ionizing01Sv: 959,
        ionizing0025Sv: 1176,

        Pierwszego: 519,
        Drugiego: 357,
        Trzeciego: 288,
        fireball: 29
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
          ionizing0025Sv: 1789,

          Pierwszego: 2590,
          Drugiego: 1860,
          Trzeciego: 1523,
          fireball: 144
      },
      '100kt': {
        overpressure3000psi: 107,
        overpressure200psi: 269,
        overpressure20psi: 733,
        overpressure5psi: 1612,
        overpressure1psi: 4147,

        ionizing20Sv: 1076,
        ionizing6Sv: 1261,
        ionizing1Sv: 1544,
        ionizing01Sv: 1927,
        ionizing0025Sv: 2197,

        Pierwszego: 5920,
        Drugiego: 4298,
        Trzeciego: 3511,
        fireball: 355
    },
    '300kt': {
      overpressure3000psi: 160,
      overpressure200psi: 385,
      overpressure20psi: 1047,
      overpressure5psi: 2277,
      overpressure1psi: 5837,

      ionizing20Sv: 1281,
      ionizing6Sv: 1483,
      ionizing1Sv: 1776,
      ionizing01Sv: 2174,
      ionizing0025Sv: 2450,

      Pierwszego: 9463,
      Drugiego: 6936,
      Trzeciego: 5672,
      fireball: 572
    },
      '800kt': {
        overpressure3000psi: 223,
        overpressure200psi: 533,
        overpressure20psi: 1443,
        overpressure5psi: 3112,
        overpressure1psi: 7976,

        ionizing20Sv: 1485,
        ionizing6Sv: 1692,
        ionizing1Sv: 1992,
        ionizing01Sv: 2398,
        ionizing0025Sv: 2680,

        Pierwszego: 14340,
        Drugiego: 10606,
        Trzeciego: 8661,
        fireball: 868
    },
    '5Mt': {
      overpressure3000psi: 410,
      overpressure200psi: 978,
      overpressure20psi: 2648,
      overpressure5psi: 5640,
      overpressure1psi: 14505,
      
      ionizing20Sv: 1910,
      ionizing6Sv: 2122,
      ionizing1Sv: 2431,
      ionizing01Sv: 2836,
      ionizing0025Sv: 3130,

      Pierwszego: 31052,
      Drugiego: 23222,
      Trzeciego: 18985,
      fireball: 1850
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
          ionizing0025Sv: 5944,

          Pierwszego: 84550,
          Drugiego: 67329,
          Trzeciego: 54680,
          fireball: 6225
      }
  }};
export default warheadRadii;