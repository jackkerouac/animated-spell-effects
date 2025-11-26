Hooks.once('sequencer.ready', () => {
        const DATABASE = {
    "air": {
        "gust": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/air/air_gust_CIRCLE_01.webm"
            }
        },
        "whisps": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/air/air_whisps_CIRCLE_01.webm"
            }
        },
        "black": {
            "smoke": {
                "ray": {
                    "01": "modules/animated-spell-effects/spell-effects/air/black_smoke_RAY_01.webm"
                }
            }
        },
        "clouds": {
            "lightning": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/air/clouds_lightning_CIRCLE_01.webm"
                },
                "square": {
                    "02": "modules/animated-spell-effects/spell-effects/air/clouds_lightning_SQUARE_02.webm"
                }
            }
        },
        "dust": {
            "blast": {
                "cone": {
                    "01": "modules/animated-spell-effects/spell-effects/air/dust_blast_CONE_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/air/dust_blast_CONE_02.webm"
                }
            },
            "explosions": {
                "circle": "modules/animated-spell-effects/spell-effects/air/dust_explosions_CIRCLE.webm"
            }
        },
        "magical": {
            "smoke": {
                "column": {
                    "circle": "modules/animated-spell-effects/spell-effects/air/magical_smoke_column_CIRCLE.webm"
                }
            }
        },
        "rotating": {
            "smoke": {
                "eye": {
                    "circle": "modules/animated-spell-effects/spell-effects/air/rotating_smoke_eye_CIRCLE.webm"
                }
            }
        },
        "shockwave": {
            "01": {
                "transcentre": "modules/animated-spell-effects/spell-effects/air/shockwave_01_transcentre.webm"
            },
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/air/shockwave_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/air/shockwave_CIRCLE_02.webm"
            }
        },
        "smoke": {
            "blast": {
                "ray": {
                    "01": "modules/animated-spell-effects/spell-effects/air/smoke_blast_RAY_01.webm"
                }
            },
            "cone": "modules/animated-spell-effects/spell-effects/air/smoke_CONE.webm",
            "explosion": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/air/smoke_explosion_CIRCLE_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/air/smoke_explosion_CIRCLE_02.webm",
                    "03": "modules/animated-spell-effects/spell-effects/air/smoke_explosion_CIRCLE_03.webm",
                    "04": "modules/animated-spell-effects/spell-effects/air/smoke_explosion_CIRCLE_04.webm",
                    "05": "modules/animated-spell-effects/spell-effects/air/smoke_explosion_CIRCLE_05.webm"
                }
            },
            "pillar": {
                "square": {
                    "01": "modules/animated-spell-effects/spell-effects/air/smoke_pillar_SQUARE_01.webm"
                }
            }
        },
        "storm": {
            "ball": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_02.webm",
                    "03": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_03.webm",
                    "04": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_04.webm",
                    "05": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_05.webm"
                }
            }
        },
        "wind": {
            "blast": {
                "ray": {
                    "01": "modules/animated-spell-effects/spell-effects/air/wind_blast_RAY_01.webm"
                }
            }
        }
    },
    "earth": {
        "earth-cracks": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/earth/earth-cracks_SQUARE_01.webm"
            }
        },
        "earth-hole": {
            "rectangle": {
                "01": "modules/animated-spell-effects/spell-effects/earth/earth-hole_RECTANGLE_01.webm"
            }
        },
        "earth-ploughed": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/earth/earth-ploughed_SQUARE_01.webm"
            }
        }
    },
    "energy": {
        "disintegration": {
            "beam": {
                "ray": {
                    "01": "modules/animated-spell-effects/spell-effects/energy/disintegration_beam_RAY_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/energy/disintegration_beam_RAY_02.webm"
                }
            },
            "bomb": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/energy/disintegration_bomb_CIRCLE_01.webm"
                }
            }
        },
        "ball": {
            "circle": {
                "02": "modules/animated-spell-effects/spell-effects/energy/energy_ball_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/energy/energy_ball_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/energy/energy_ball_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/energy/energy_ball_CIRCLE_05.webm"
            }
        },
        "beam": {
            "purple": {
                "03": "modules/animated-spell-effects/spell-effects/energy/energy_beam_purple_03.webm"
            },
            "ray": {
                "10": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_10.webm",
                "11": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_11.webm",
                "01": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_06.webm",
                "07": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_07.webm",
                "08": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_08.webm",
                "09": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_09.webm"
            }
        },
        "blast": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_06.webm",
                "07": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_07.webm",
                "08": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_08.webm",
                "09": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_09.webm"
            }
        },
        "circle": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/energy/energy_circle_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/energy/energy_circle_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/energy/energy_circle_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/energy/energy_circle_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/energy/energy_circle_CIRCLE_05.webm"
            }
        },
        "explosion": {
            "02": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_02.webm",
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_01.webm",
                "03": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_06.webm"
            }
        },
        "impact": {
            "01": "modules/animated-spell-effects/spell-effects/energy/energy_impact_01.webm"
        },
        "lightning": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/energy/energy_lightning_RAY_01.webm"
            }
        },
        "portal": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/energy/energy_portal_CIRCLE_01.webm"
            },
            "strange": {
                "circle": "modules/animated-spell-effects/spell-effects/energy/energy_portal_strange_CIRCLE.webm"
            }
        },
        "quickburst": {
            "03": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_03.webm",
            "05": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_05.webm",
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_CIRCLE_01.webm",
                "04": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_CIRCLE_04.webm",
                "06": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_CIRCLE_06.webm",
                "07": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_CIRCLE_07.webm"
            }
        },
        "shield": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/energy/energy_shield_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/energy/energy_shield_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/energy/energy_shield_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/energy/energy_shield_CIRCLE_04.webm"
            }
        },
        "throw": {
            "ray": {
                "10": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_10.webm",
                "01": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_06.webm",
                "07": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_07.webm",
                "08": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_08.webm",
                "09": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_09.webm"
            }
        },
        "flash": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/energy/flash_CIRCLE_01.webm"
            }
        }
    },
    "fire": {
        "embers": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/fire/embers_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/embers_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/embers_CIRCLE_03.webm"
            }
        },
        "explosion": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_06.webm"
            },
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_SQUARE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_SQUARE_02.webm"
            }
        },
        "fire-ball": {
            "circle": {
                "03": "modules/animated-spell-effects/spell-effects/fire/fire-ball_CIRCLE_03.webm"
            }
        },
        "ball": {
            "circle": {
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_05.webm",
                "07": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_07.webm",
                "08": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_08.webm"
            },
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_ball_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_ball_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/fire_ball_RAY_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/fire/fire_ball_RAY_04.webm"
            },
            "rotating": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/fire/fire_ball_rotating_CIRCLE_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/fire/fire_ball_rotating_CIRCLE_02.webm",
                    "03": "modules/animated-spell-effects/spell-effects/fire/fire_ball_rotating_CIRCLE_03.webm",
                    "04": "modules/animated-spell-effects/spell-effects/fire/fire_ball_rotating_CIRCLE_04.webm"
                }
            },
            "square": {
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_ball_SQUARE_02.webm"
            },
            "yellow": "modules/animated-spell-effects/spell-effects/fire/fire_ball_yellow.webm"
        },
        "beam": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_beam_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_beam_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/fire_beam_RAY_03.webm"
            }
        },
        "bird": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_bird_CIRCLE_01.webm"
            }
        },
        "blast": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_blast_RAY_01.webm"
            },
            "real": {
                "ray": {
                    "01": "modules/animated-spell-effects/spell-effects/fire/fire_blast_real_RAY_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/fire/fire_blast_real_RAY_02.webm"
                }
            },
            "zigzag": {
                "ray": {
                    "01": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_02.webm",
                    "03": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_03.webm",
                    "04": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_04.webm",
                    "05": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_05.webm"
                }
            }
        },
        "bolt": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_bolt_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_bolt_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/fire_bolt_RAY_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/fire/fire_bolt_RAY_04.webm"
            }
        },
        "breath": {
            "cone": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_breath_CONE_01.webm"
            }
        },
        "circle": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_05.webm"
            }
        },
        "cone": {
            "cone": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_05.webm"
            }
        },
        "dragon": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_dragon_SQUARE_01.webm"
            }
        },
        "pheonix": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_pheonix_SQUARE_01.webm"
            }
        },
        "skull": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_skull_SQUARE_01.webm"
            }
        },
        "square": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_square_SQUARE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_square_SQUARE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/fire_square_SQUARE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/fire/fire_square_SQUARE_04.webm"
            }
        },
        "sword": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_sword_SQUARE_01.webm"
            }
        },
        "wall": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_05.webm"
            },
            "rectangle": {
                "06": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RECTANGLE_06.webm",
                "07": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RECTANGLE_07.webm"
            }
        },
        "solar": {
            "ball": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/fire/solar_ball_CIRCLE_01.webm"
                }
            }
        },
        "sparks": {
            "impact": {
                "square": {
                    "01": "modules/animated-spell-effects/spell-effects/fire/sparks_impact_SQUARE_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/fire/sparks_impact_SQUARE_02.webm"
                }
            }
        }
    },
    "gunshots": {
        "gunshot": {
            "15ft": {
                "1000x400": "modules/animated-spell-effects/spell-effects/gunshots/gunshot_15ft_1000x400.webm"
            },
            "45ft": {
                "2200x400": "modules/animated-spell-effects/spell-effects/gunshots/gunshot_45ft_2200x400.webm"
            },
            "60ft": {
                "2800x400": "modules/animated-spell-effects/spell-effects/gunshots/gunshot_60ft_2800x400.webm"
            },
            "90ft": {
                "4000x400": "modules/animated-spell-effects/spell-effects/gunshots/gunshot_90ft_4000x400.webm"
            }
        },
        "pistol": {
            "30ft": {
                "1600x400": "modules/animated-spell-effects/spell-effects/gunshots/pistol_30ft_1600x400.webm"
            }
        }
    },
    "ice": {
        "frost-rectangle": {
            "01": "modules/animated-spell-effects/spell-effects/ice/frost-RECTANGLE_01.webm"
        },
        "frost-square": {
            "01": "modules/animated-spell-effects/spell-effects/ice/frost-SQUARE_01.webm"
        },
        "frost": {
            "beam": {
                "ray": {
                    "01": "modules/animated-spell-effects/spell-effects/ice/frost_beam_RAY_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/ice/frost_beam_RAY_02.webm"
                }
            },
            "cone": {
                "01": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_06.webm",
                "07": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_07.webm"
            }
        },
        "ball": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/ice/ice_ball_RAY_01.webm"
            }
        },
        "shield": {
            "rotating": {
                "square": {
                    "01": "modules/animated-spell-effects/spell-effects/ice/ice_shield_rotating_SQUARE_01.webm"
                }
            }
        }
    },
    "lightning": {
        "electricity": {
            "portal": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/lightning/electricity_portal_CIRCLE_01.webm"
                }
            },
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/electricity_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/lightning/electricity_RAY_02.webm"
            }
        },
        "blast": {
            "multicolour": {
                "ray": {
                    "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_blast_multicolour_RAY_01.webm"
                }
            },
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_blast_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/lightning/lightning_blast_RAY_02.webm"
            }
        },
        "blue": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_blue_RAY_01.webm"
            },
            "rectangle": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_blue_RECTANGLE_01.webm"
            }
        },
        "explosion": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_explosion_CIRCLE_01.webm"
            }
        },
        "flash": {
            "rectangle": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_flash_RECTANGLE_01.webm"
            },
            "square": {
                "03": "modules/animated-spell-effects/spell-effects/lightning/lightning_flash_SQUARE_03.webm"
            }
        },
        "green": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_green_RAY_01.webm"
            },
            "rectangle": {
                "02": "modules/animated-spell-effects/spell-effects/lightning/lightning_green_RECTANGLE_02.webm"
            }
        },
        "multicolour": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_multicolour_RAY_01.webm"
            }
        },
        "purple": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_purple_RAY_01.webm"
            },
            "rectangle": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_purple_RECTANGLE_01.webm"
            }
        },
        "rainbowray": {
            "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_rainbowRAY_01.webm"
        },
        "red": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_red_RAY_01.webm"
            },
            "rectangle": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_red_RECTANGLE_01.webm"
            }
        },
        "slam": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_slam_RAY_01.webm"
            }
        },
        "yellow": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_yellow_RAY_01.webm"
            },
            "rectangle": {
                "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_yellow_RECTANGLE_01.webm"
            }
        }
    },
    "magic": {
        "explosion": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_06.webm",
                "08": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_08.webm"
            }
        },
        "arrow": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_06.webm"
            }
        },
        "ball": {
            "circle": {
                "10": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_10.webm",
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_06.webm",
                "07": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_07.webm",
                "08": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_08.webm",
                "09": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_09.webm"
            }
        },
        "beam": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_06.webm"
            }
        },
        "blast": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_blast_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_blast_RAY_02.webm"
            }
        },
        "circle": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_circle_CIRCLE_01.webm"
            }
        },
        "dust": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_05.webm"
            }
        },
        "fire": {
            "01": "modules/animated-spell-effects/spell-effects/magic/magic_fire_01.webm",
            "02": "modules/animated-spell-effects/spell-effects/magic/magic_fire_02.webm"
        },
        "forcefield": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_forcefield_SQUARE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_forcefield_SQUARE_02.webm"
            }
        },
        "impact": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_impact_CIRCLE_01.webm"
            }
        },
        "missle": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_06.webm",
                "07": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_07.webm",
                "08": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_08.webm",
                "09": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_09.webm"
            },
            "red": {
                "ray": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    "modules/animated-spell-effects/spell-effects/magic/magic_missle_red_RAY_10.webm",
                    "modules/animated-spell-effects/spell-effects/magic/magic_missle_red_RAY_11.webm"
                ]
            }
        },
        "portal": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_portal_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_portal_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_portal_CIRCLE_03.webm"
            }
        },
        "shield": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_05.webm"
            },
            "equip": {
                "square": {
                    "01": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_02.webm",
                    "03": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_03.webm",
                    "04": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_04.webm",
                    "05": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_05.webm"
                }
            },
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_shield_SQUARE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_shield_SQUARE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_shield_SQUARE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_shield_SQUARE_04.webm"
            },
            "strange": {
                "square": {
                    "01": "modules/animated-spell-effects/spell-effects/magic/shield_strange_SQUARE_01.webm"
                }
            }
        },
        "shockwave": {
            "circle": {
                "10": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_10.webm",
                "11": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_11.webm",
                "12": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_12.webm",
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_06.webm",
                "07": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_07.webm",
                "08": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_08.webm",
                "09": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_09.webm"
            }
        },
        "sparks": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_sparks_SQUARE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_sparks_SQUARE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_sparks_SQUARE_03.webm"
            }
        },
        "spiral": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_spiral_RAY_01.webm"
            }
        },
        "wild": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_06.webm"
            },
            "ray": {
                "02": "modules/animated-spell-effects/spell-effects/magic/magic_wild_RAY_02.webm"
            }
        },
        "triple": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/magic/triple_CIRCLE_01.webm"
            }
        }
    },
    "misc": {
        "bat": {
            "loop": {
                "square": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/bat_loop_SQUARE_01.webm"
                }
            }
        },
        "colour": {
            "spray": {
                "cone": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/colour_spray_CONE_01.webm"
                }
            }
        },
        "hand": {
            "blue": {
                "square": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/hand_blue_SQUARE_01.webm"
                }
            },
            "green": {
                "square": {
                    "02": "modules/animated-spell-effects/spell-effects/misc/hand_green_SQUARE_02.webm"
                }
            },
            "purple": {
                "square": {
                    "03": "modules/animated-spell-effects/spell-effects/misc/hand_purple_SQUARE_03.webm"
                }
            },
            "red": {
                "square": {
                    "04": "modules/animated-spell-effects/spell-effects/misc/hand_red_SQUARE_04.webm"
                }
            },
            "yellow": {
                "square": {
                    "05": "modules/animated-spell-effects/spell-effects/misc/hand_yellow_SQUARE_05.webm"
                }
            }
        },
        "healing": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/misc/healing_SQUARE_01.webm"
            }
        },
        "lathander": {
            "symbol": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/lathander_symbol_CIRCLE_01.webm"
                }
            }
        },
        "middlefinger": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/misc/middlefinger_SQUARE_01.webm"
            }
        },
        "pentagram": {
            "blue": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/pentagram_blue_CIRCLE_01.webm"
                }
            },
            "green": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/pentagram_green_CIRCLE_01.webm"
                }
            },
            "purple": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/pentagram_purple_CIRCLE_01.webm"
                }
            },
            "red": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/pentagram_red_CIRCLE_01.webm"
                }
            },
            "yellow": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/pentagram_yellow_CIRCLE_01.webm"
                }
            }
        },
        "runes": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/misc/runes_CIRCLE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/misc/runes_CIRCLE_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/misc/runes_CIRCLE_03.webm",
                "04": "modules/animated-spell-effects/spell-effects/misc/runes_CIRCLE_04.webm",
                "05": "modules/animated-spell-effects/spell-effects/misc/runes_CIRCLE_05.webm",
                "06": "modules/animated-spell-effects/spell-effects/misc/runes_CIRCLE_06.webm"
            },
            "four": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/runes_four_CIRCLE_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/misc/runes_four_CIRCLE_02.webm"
                }
            },
            "wild": {
                "blue": {
                    "circle": {
                        "01": "modules/animated-spell-effects/spell-effects/misc/runes_wild_blue_CIRCLE_01.webm"
                    }
                },
                "green": {
                    "circle": {
                        "02": "modules/animated-spell-effects/spell-effects/misc/runes_wild_green_CIRCLE_02.webm"
                    }
                },
                "purple": {
                    "circle": {
                        "03": "modules/animated-spell-effects/spell-effects/misc/runes_wild_purple_CIRCLE_03.webm"
                    }
                },
                "red": {
                    "circle": {
                        "04": "modules/animated-spell-effects/spell-effects/misc/runes_wild_red_CIRCLE_04.webm"
                    }
                },
                "yellow": {
                    "circle": {
                        "05": "modules/animated-spell-effects/spell-effects/misc/runes_wild_yellow_CIRCLE_05.webm"
                    }
                }
            },
            "zap": {
                "blue": {
                    "circle": {
                        "01": "modules/animated-spell-effects/spell-effects/misc/runes_zap_blue_CIRCLE_01.webm"
                    }
                },
                "green": {
                    "circle": {
                        "02": "modules/animated-spell-effects/spell-effects/misc/runes_zap_green_CIRCLE_02.webm"
                    }
                },
                "purple": {
                    "circle": {
                        "03": "modules/animated-spell-effects/spell-effects/misc/runes_zap_purple_CIRCLE_03.webm"
                    }
                },
                "red": {
                    "circle": {
                        "04": "modules/animated-spell-effects/spell-effects/misc/runes_zap_red_CIRCLE_04.webm"
                    }
                },
                "yellow": {
                    "circle": {
                        "05": "modules/animated-spell-effects/spell-effects/misc/runes_zap_yellow_CIRCLE_05.webm"
                    }
                }
            }
        },
        "skull": {
            "blast": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/skull_blast_CIRCLE_01.webm",
                    "02": "modules/animated-spell-effects/spell-effects/misc/skull_blast_CIRCLE_02.webm",
                    "03": "modules/animated-spell-effects/spell-effects/misc/skull_blast_CIRCLE_03.webm",
                    "04": "modules/animated-spell-effects/spell-effects/misc/skull_blast_CIRCLE_04.webm",
                    "05": "modules/animated-spell-effects/spell-effects/misc/skull_blast_CIRCLE_05.webm"
                }
            }
        },
        "smoke": {
            "vortex": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/smoke_vortex_CIRCLE_01.webm"
                }
            }
        },
        "sprig": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/misc/sprig_SQUARE_01.webm"
            }
        },
        "tentacles": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/misc/tentacles_CIRCLE_01.webm"
            },
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/misc/tentacles_RAY_01.webm"
            }
        },
        "trident": {
            "blue": {
                "circle": {
                    "01": "modules/animated-spell-effects/spell-effects/misc/trident_blue_CIRCLE_01.webm"
                }
            },
            "green": {
                "circle": {
                    "02": "modules/animated-spell-effects/spell-effects/misc/trident_green_CIRCLE_02.webm"
                }
            },
            "purple": {
                "circle": {
                    "03": "modules/animated-spell-effects/spell-effects/misc/trident_purple_CIRCLE_03.webm"
                }
            },
            "red": {
                "circle": {
                    "04": "modules/animated-spell-effects/spell-effects/misc/trident_red_CIRCLE_04.webm"
                }
            },
            "white": {
                "circle": {
                    "05": "modules/animated-spell-effects/spell-effects/misc/trident_white_CIRCLE_05.webm"
                }
            },
            "yellow": {
                "circle": {
                    "06": "modules/animated-spell-effects/spell-effects/misc/trident_yellow_CIRCLE_06.webm"
                }
            }
        },
        "web": {
            "spider": {
                "blue": {
                    "circle": {
                        "01": "modules/animated-spell-effects/spell-effects/misc/web_spider_blue_CIRCLE_01.webm"
                    }
                },
                "green": {
                    "circle": {
                        "02": "modules/animated-spell-effects/spell-effects/misc/web_spider_green_CIRCLE_02.webm"
                    }
                },
                "purple": {
                    "circle": {
                        "03": "modules/animated-spell-effects/spell-effects/misc/web_spider_purple_CIRCLE_03.webm"
                    }
                },
                "realistic": {
                    "circle": {
                        "01": "modules/animated-spell-effects/spell-effects/misc/web_spider_realistic_CIRCLE_01.webm"
                    }
                },
                "red": {
                    "circle": {
                        "04": "modules/animated-spell-effects/spell-effects/misc/web_spider_red_CIRCLE_04.webm"
                    }
                },
                "yellow": {
                    "circle": {
                        "05": "modules/animated-spell-effects/spell-effects/misc/web_spider_yellow_CIRCLE_05.webm"
                    }
                }
            }
        },
        "wings": {
            "rectangle": {
                "01": "modules/animated-spell-effects/spell-effects/misc/wings_RECTANGLE_01.webm"
            }
        }
    },
    "scifi": {
        "antimatter": {
            "beam": {
                "01": "modules/animated-spell-effects/spell-effects/scifi/antimatter_beam_01.webm"
            }
        },
        "arrow": {
            "straight": {
                "01": "modules/animated-spell-effects/spell-effects/scifi/arrow_straight_01.webm"
            }
        },
        "bullet": {
            "barrage": {
                "01": "modules/animated-spell-effects/spell-effects/scifi/bullet_barrage_01.webm"
            }
        },
        "laser": {
            "barrage": {
                "01": "modules/animated-spell-effects/spell-effects/scifi/laser_barrage_01.webm"
            }
        },
        "projector": {
            "rays": {
                "01": "modules/animated-spell-effects/spell-effects/scifi/projector_rays_01.webm"
            }
        },
        "shotgun": {
            "blast": {
                "01": "modules/animated-spell-effects/spell-effects/scifi/shotgun_blast_01.webm"
            }
        },
        "slash": {
            "01": "modules/animated-spell-effects/spell-effects/scifi/slash_01.webm"
        }
    },
    "water": {
        "blast": {
            "ray": {
                "01": "modules/animated-spell-effects/spell-effects/water/water_blast_RAY_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/water/water_blast_RAY_02.webm",
                "03": "modules/animated-spell-effects/spell-effects/water/water_blast_RAY_03.webm"
            }
        },
        "fall": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/water/water_fall_SQUARE_01.webm"
            }
        },
        "fountain": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/water/water_fountain_SQUARE_01.webm"
            }
        },
        "portal": {
            "circle": {
                "01": "modules/animated-spell-effects/spell-effects/water/water_portal_CIRCLE_01.webm"
            }
        },
        "splash": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/water/water_splash_SQUARE_01.webm",
                "02": "modules/animated-spell-effects/spell-effects/water/water_splash_SQUARE_02.webm"
            }
        },
        "swirl": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/water/water_swirl_SQUARE_01.webm"
            }
        },
        "wave": {
            "square": {
                "01": "modules/animated-spell-effects/spell-effects/water/water_wave_SQUARE_01.webm"
            }
        }
    }
};
        Sequencer.Database.registerEntries('animated-spell-effects', DATABASE);
});