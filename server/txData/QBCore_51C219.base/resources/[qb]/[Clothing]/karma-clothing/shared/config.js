Config = []

Config = {
    ["CoreFolder"] : 'qb-core', // Here put the folder name of your QBCore Framework
    ["maxoutfits"] : 15, // This is the Max Outfits Avaiable for Players 

    ["FinishedClothingEvent"] : function FinishedSpawnEvent() { // Finished the Creation of the Character
        TriggerEvent("qb-spawn:finishedClothing" , 'Finished')
    },
    ["Notification"] : function DisplayNotification(message, color) {
      /** @param {string} message - Message to be displayed.*/
      /** @param {number} color - (1,2) Error or success.*/
        TriggerEvent("DoLongHudText" , message , color)
    },

    /** @param {string} ClothingInteraction - Here is the interaction with Clothing Stores / Barber Shops / Tattos Shops .*/
    ["ZoneDisplayText"] : function DisplayText(ClothingInteraction) {
      exports['karma-interaction'].showInteraction("E", ClothingInteraction)
    },
    ["ZoneHideText"] : function HideText() {
      exports['karma-interaction'].hideInteraction()
    },

    ["WhiteListClothingItems"] : {
        male: {
            Hat: [
                { componentId: 5 },
                { componentId: 6 },
            ],
            Jacket: [
                { componentId: 5 },
                { componentId: 6 },
            ],
            Undershirt: [
                { componentId: 5 },
                { componentId: 6 },
            ],
            Leg: [
                { componentId: 5 },
                { componentId: 6 },
            ],
        },
        female: {
            Hat: [
                { componentId: 5 },
                { componentId: 6 },
            ],
            Jacket: [
                { componentId: 5 },
                { componentId: 6 },
            ],
            Undershirt: [
                { componentId: 5 },
                { componentId: 6 },
            ],
            Leg: [
                { componentId: 5 },
                { componentId: 6 },
            ],
        },
    },

    ["prices"] : {
        model: 100,
        tattoos: 50,
        eyeColor: 8,
        fade: 12,
        hairColor: 10,
        drawables: {
            Hair: 20,
            Tops: 30,
            Undershirt: 13,
            Leg: 25,
            Shoes: 15,
            Badge: 3,
            Parachute: 10,
            Torso: 2,
            Accessory: 15,
            Mask: 5,
            Kevlar: 9,
            Jacket: 20
        },
        props: {
            Hat: 10,
            Glasses: 5,
            Bracelet: 9,
            Ears: 8,
            Watch: 8
        },
        headblend: {
            ShapeFirst: 5,
            SkinFirst: 7,
            ShapeSecond: 7,
            SkinSecond: 3,
            SkinThird: 3,
            ShapeThird: 2,
            ShapeMix: 2,
            FaceShape: 15,
            ThirdMix: 1,
            SkinMix: 5,
            SkinTone: 20,
        },
        features: {
            Nose: 5,
            nose_length: 0,
            nose_bone_twist: 0,
            nose_bone_curveness: 0,
            nose_tip: 0,
            nose_peak: 0,
            nose_width: 0,
            eyebrow_up_down: 0,
            eyebrow_in_out: 0,
            cheek_bones: 0,
            cheek_sideways_bone_size: 0,
            cheek_bones_width: 0,
            eye_opening: 0,
            lip_thickness: 0,
            jaw_bone_width: 0,
            jaw_bone_shape: 0,
            chin_bone: 0,
            chin_bone_length: 0,
            chin_bone_shape: 0,
            chin_hole: 0,
            neck_thickness: 0,
            Eyes: 7,
            Mouth: 6
        },
        overlays: {
            Blush: 8,
            Lipstick: 6,
            FacialHair: 6,
            Eyebrows: 6,
            Ageing: 6,
            Makeup: 6,
            Blush: 6,
            Complexion: 6,
            SunDamage: 6,
            MolesFreckles: 6,
            ChestHair: 6,
            Blemishes: 5,
            BodyBlemishes: 6,
            AddBodyBlemishes: 6,
            Eyeshadow: 7
        },
    },

    ['ClothingShopZones'] : [{
        id: "casino_clothing",
        vectors: {
            x: 965.5,
           y: 26.63,
           z: 71.47
        },
        length: 1.8,
        width: 2.4,
        options: {
           heading: 315,
           minZ: 71.4,
           maxZ: 73.4
        }
      },
      {
        id: "grapeseed_clothing",
        vectors: {
           x: 1692.16,
           y: 4822.06,
           z: 42.06
        },
        length: 5.2,
        width: 4.4,
        options: {
           heading: 8,
           minZ: 41.09,
           maxZ: 43.69
        }
      },
      {
        id: "vespucci_beach_clothing",
        vectors: {
          x: -1177.32,
          y: -1780.57,
          z: 3.91
        },
        length: 2.4,
        width: 2.6,
        options: {
          heading: 34,
          minZ: 2.09,
          maxZ: 5.69
        }
      },
      {
        id: "davis_firedept_clothing",
        vectors: {
          x: 198.53,
          y: -1647.11,
          z: 29.8
          },
        length: 3.2,
        width: 2,
        options: {
          heading: 50,
          minZ: 28.8,
          maxZ: 31.4
        }
      }, 
      {
        id: "portala_drive_clothing",
        vectors: {
          x: -710.38,
          y: -153.34,
          z: 37.42
        },
        length: 3.6,
        width: 2,
        options: {
          heading: 30,
          minZ: 36.37,
          maxZ: 38.77
        }
      }, 
      {
        id: "prosperity_street_promenade_clothing",
        vectors: {
          x: -1191.46,
          y: -770.67,
          z: 17.32
        },
        length: 6.8,
        width: 6,
        options: {
          heading: 35,
          minZ: 16.32,
          maxZ: 18.52
        }
      },
      {
        id: "sinner_street_clothing",
        vectors: {
          x: 423.71,
          y: -807.34,
          z: 29.49
        },
        length: 4.6,
        width: 4.4,
        options: {
          heading: 0,
          minZ: 28.49,
          maxZ: 31.09
        }
      }, 
      {
        id: "las_lagunas_boulevard_clothing",
        vectors: {
          x: -162.12,
          y: -303.49,
          z: 39.73
        },
        length: 4.8,
        width: 3.4,
        options: {
          heading: 340,
          minZ: 38.73,
          maxZ: 41.13
        }
      }, 
      {
        id: "south_rockford_drive_clothing",
        vectors: {
          x: -820.24,
          y: -1074.56,
          z: 11.33
        },
        length: 4.6,
        width: 5.2,
        options: {
          heading: 30,
          minZ: 10.33,
          maxZ: 12.73
        }
      }, 
      {
        id: "cougar_ave_clothing",
        vectors: {
          x: -1451.41,
          y: -236.7,
          z: 49.8
        },
        length: 5.6,
        width: 3.4,
        options: {
          heading: 319,
          minZ: 48.09,
          maxZ: 51.69
        }
      }, 
      {
        id: "paleto_bay_clothing",
        vectors: {
           x: 2.7,
           y: 6512.82,
           z: 31.88
        },
        length: 5,
        width: 4.2,
        options: {
           heading: 315,
           minZ: 30.09,
           maxZ: 32.69
        }
      },
      {
        id: "harmony_dollarpill_clothing",
        vectors: {
           x: 617.2,
           y: 2762.5,
           z: 42.09
        },
        length: 5.6,
        width: 8.4,
        options: {
           heading: 3,
           minZ: 41.09,
           maxZ: 43.69
        }
      },
      {
        id: "harmony_bank_clothing",
        vectors: {
           x: 1197.9,
           y: 2708.73,
           z: 38.22
        },
        length: 4,
        width: 5,
        options: {
           heading: 0,
           minZ: 37.22,
           maxZ: 39.82
        }
      },
      {
        id: "chumash_clothing",
        vectors: {
          x: -3173.26,
          y: 1045.35,
          z: 20.86
        },
        length: 5.2,
        width: 7,
        options: {
          heading: 335,
          minZ: 19.66,
          maxZ: 22.26
        }
      }, 
      {
        id: "route68_clothing",
        vectors: {
          x: -1099.3,
          y: 2709.9,
          z: 19.12
        },
        length: 4.6,
        width: 4.6,
        options: {
          heading: 43,
          minZ: 17.92,
          maxZ: 21.12
        }
      }, 
      {
        id: "hawick_awe_clothing",
        vectors: {
          x: 122.81,
          y: -222.09,
          z: 54.56
        },
        length: 5.4,
        width: 8,
        options: {
          heading: 340,
          minZ: 53.36,
          maxZ: 56.36
        }
      }, {
        id: "prison_clothing",
        vectors: {
           x: 1738.37,
           y: 2496.74,
           z: 45.82
        },
        length: 4,
        width: 4,
        options: {
           heading: 30,
           minZ: 44.82,
           maxZ: 47.82
        },
        data: {
           isFree: true
        }
      },
      {
        id: "vanilla_unicorn_clothing",
        vectors: {
          x: 107.71,
          y: -1305.32,
          z: 28.77
        },
        length: 3,
        width: 4.2,
        options: {
        heading: 35,
        minZ: 27.77,
        maxZ: 31.17
      }
      },
      {
        id: "southside_clothing",
        vectors: {
          x: 77.83099365234375,
          y: -1392.9818725585938,
          z: 30.026136779785155
        },
        length: 7.8,
        width: 6.7,
        options: {
        heading: 180,
        minZ: 28.32,
        maxZ: 31.82
        }
      }
    ],

    ['BarberShopZones'] : [{
        id: "sandy_shores_barbershop",
        vectors: {
          x: 1931.27,
          y: 3730.69,
          z: 32.84
        },
        length: 4.8,
        width: 4.6,
        options: {
          heading: 30,
          minZ: 31.84,
          maxZ: 34.64
        }
        },
        {
          id: "paleto_barbershop",
          vectors: {
            x: -277.51,
            y: 6227.35,
            z: 31.7
          },
          length: 5.6,
          width: 5,
          options: {
            heading: 45,
            minZ: 30.7,
            maxZ: 33.7
          }
        }, 
        {
          id: "mirror_park_barbershop",
          vectors: {
            x: 1213.32,
            y: -473.15,
            z: 66.21
          },
          length: 6.8,
          width: 5.4,
          options: {
            heading: 75,
            minZ: 65.01,
            maxZ: 68.01
          }
        }, 
        {
          id: "hawick_ave_barbershop",
          vectors: {
            x: -33.67,
            y: -153.46,
            z: 57.08
          },
          length: 5.2,
          width: 7.2,
          options: {
            heading: 70,
            minZ: 55.88,
            maxZ: 58.88
          }
        }, 
        {
          id: "carson_avenue_barbershop",
          vectors: {
            x: 137.73,
            y: -1707.2,
            z: 29.29
          },
          length: 5.6,
          width: 7,
          options: {
            heading: 50,
            minZ: 28.09,
            maxZ: 31.29
          }
        }, 
        {
          id: "bob_mulet_barbershop",
          vectors: {
            x: -813.86,
            y: -184.15,
            z: 37.57
          },
          length: 7.4,
          width: 8.6,
          options: {
            heading: 30,
            minZ: 36.57,
            maxZ: 39.37
          }
        }, 
        {
          id: "vespucci_barbershop",
          vectors: {
            x: -1281.76,
            y: -1117.41,
            z: 6.99
        },
          length: 6,
          width: 7,
          options: {
            heading: 0,
            minZ: 5.99,
            maxZ: 8.99
          }
        }, 
        {
        id: "prison_barbershop",
        vectors: {
          x: 1769.06,
          y: 2588.21,
          z: 45.73
        },
        length: 2.2,
        width: 2.8,
        options: {
          heading: 0,
          minZ: 44.73,
          maxZ: 47.13
        },
        data: {
        isFree: true
        }
    }],

    ['TattooShopZones'] : [{
        id: "vinewood_boulevard_barbershop",
        vectors: {
          x: 323.34,
          y: 180.65,
          z: 103.59
        },
        length: 5.2,
        width: 6.4,
        options: {
          heading: 337,
          minZ: 102.24,
          maxZ: 106.64
        }
        }, 
        {
          id: "bbmc_tattoo",
          vectors: {
            x: -1153.52,
            y: -1426.09,
            z: 3.85
          },
          length: 2.8,
          width: 2.8,
          options: {
            heading: 212,
            minZ: 3.85,
            maxZ: 6.85
          }
        },
        {
        id: "prison_tattoo_parlor",
        vectors: {
          x: 1771.34,
          y: 2583.39,
          z: 45.73
        },
        length: 2,
        width: 2.2,
        options: {
          heading: 0,
          minZ: 44.73,
          maxZ: 46.93
        },
        data: {
        isFree: true
        }
    }],

    ["PedModels"] : {
      male: [
        'mp_m_freemode_01',
        'a_m_m_afriamer_01',
        'a_m_m_beach_01',
        'a_m_m_bevhills_01',
        'a_m_m_business_01',
        'a_m_m_eastsa_01',
        'a_m_m_farmer_01',
        'a_m_m_genfat_01',
        'a_m_m_hillbilly_01',
        'a_m_m_indian_01',
        'a_m_m_skater_01',
        'a_m_m_socenlat_01',
        'a_m_m_stlat_02',
        'a_m_o_genstreet_01',
        'a_m_o_soucent_01',
        'a_m_o_tramp_01',
        'a_m_y_beach_01',
        'a_m_y_business_01',
        'a_m_y_genstreet_01',
        'a_m_y_soucent_01'
      ],
      female: [
        'mp_f_freemode_01',
        'a_f_m_beach_01',
        'a_f_m_bevhills_01',
        'a_f_m_bodybuild_01',
        'a_f_m_business_02',
        'a_f_m_eastsa_01',
        'a_f_m_fatwhite_01',
        'a_f_m_ktown_01',
        'a_f_m_skidrow_01',
        'a_f_m_tourist_01',
        'a_f_m_tramp_01',
        'a_f_o_genstreet_01',
        'a_f_o_indian_01',
        'a_f_o_ktown_01',
        'a_f_o_soucent_01',
        'a_f_y_bevhills_01',
        'a_f_y_bevhills_02',
        'a_f_y_hipster_01',
        'a_f_y_tourist_01',
        'a_f_y_vinewood_01'
      ]
  },
  
    // You can either insert the license or citizenid [One of them or you can use mixed]
    ["WhitelistedPedUsers"] : [
      "license:60xxxxxxxxxxxxxxxxxxxxxxxxx02", // Add here licenses [Geral]
      "license:1cccbaf57105631e882b0094e546dd855bbf3b3b",
      "14340377" // Add here citizenid for QB Core
    ]
}

// MADE BY KARMA DEVELOPMENTS WITH LOVE 
// JOIN ON KARMA DEVELOPMENTS SUPPORT DISCORD : https://discord.gg/wKkJdg3KtE