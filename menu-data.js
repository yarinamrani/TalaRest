window.MENU = {
  "restaurant": {
    "name_en": "Tala Thai Kitchen",
    "name_he": "טאלה - מטבח תאילנדי",
    "kosher": true,
    "currency": "ILS",
    "currency_symbol": "₪",
    "source": "Tala Thai Kitchen menu PDF (starters & mains). Page 3 holds 2 desserts and is intentionally not included here.",
    "notes": [
      "Protein add-on for main dishes: chicken +15₪ / beef +18₪ / tofu +18₪ (תוספת חלבון לבחירה)."
    ]
  },
  "categories": [
    {
      "id": "starters",
      "name_he": "ראשונות",
      "name_en": "Starters",
      "items": [
        {
          "id": "som-tum",
          "name_he": "סלט פאפאיה",
          "name_en": "Papaya Salad (Som Tum)",
          "description_he": "פאפאיה ירוקה, גזר, עגבניות שרי, שום וצ'ילי ברוטב תאילנדי מסורתי. לבחירה: חריף / חריף מאוד.",
          "description_en": "Green papaya, carrot, cherry tomatoes, garlic and chili in a traditional Thai dressing. Choice of: spicy / very spicy.",
          "price": 54,
          "spicy": true,
          "image": "images/som-tum-papaya-salad.jpg"
        },
        {
          "id": "pomelo-mango-fish",
          "name_he": "סלט פומלה / מנגו בעונה ודג מטוגן",
          "name_en": "Pomelo / Seasonal Mango Salad with Fried Fish",
          "description_he": "פומלה טרייה או מנגו בעונה, עשבי תיבול, בצל סגול, קשיו ודג בטמפורה.",
          "description_en": "Fresh pomelo or seasonal mango, fresh herbs, red onion, cashews and tempura fish.",
          "price": 68,
          "spicy": false,
          "image": "images/pomelo-mango-fish-salad.jpg"
        },
        {
          "id": "nam-tok-beef",
          "name_he": "נאם טוק בקר",
          "name_en": "Nam Tok Beef Salad",
          "description_he": "פרוסות שייטל צרובות, עשבי תיבול, בצל סגול, צ'ילי קלוי, ליים וסויה. מוגש בליווי סטיקי רייס.",
          "description_en": "Seared sirloin slices, fresh herbs, red onion, roasted chili, lime and soy. Served with sticky rice.",
          "price": 74,
          "spicy": true,
          "image": "images/nam-tok-beef.jpg"
        },
        {
          "id": "thai-spring-roll",
          "name_he": "אגרול תאילנדי",
          "name_en": "Thai Spring Rolls",
          "description_he": "רול פריך במילוי כרוב, גזר, סלרי, נבטים ואטריות זכוכית. בליווי רוטב חמוץ-מתוק.",
          "description_en": "Crispy roll filled with cabbage, carrot, celery, sprouts and glass noodles. Served with sweet-and-sour sauce.",
          "price": 46,
          "spicy": false,
          "image": "images/thai-spring-rolls.jpg"
        },
        {
          "id": "miang-kham-salmon",
          "name_he": "מיאנג קאם סלמון נא",
          "name_en": "Miang Kham Raw Salmon",
          "description_he": "סלמון נא עם בצל ירוק, בצל אדום, אטריות שעועית, עשבי תיבול וליים. בליווי רוטב בוטנים, על מצע חסה אייסברג.",
          "description_en": "Raw salmon with green onion, red onion, bean noodles, fresh herbs and lime. With peanut sauce, on a bed of iceberg lettuce.",
          "price": 58,
          "spicy": false,
          "image": null
        },
        {
          "id": "glass-noodle-salad",
          "name_he": "סלט אטריות שעועית",
          "name_en": "Glass Noodle Salad (Yum Woon Sen)",
          "description_he": "אטריות שעועית, עלי סלרי, נענע, בצל סגול, עגבנייה, גזר ומלפפון, רוטב חריף-חמוץ-מתוק.",
          "description_en": "Glass (bean) noodles, celery leaves, mint, red onion, tomato, carrot and cucumber, in a spicy-sour-sweet sauce.",
          "price": 62,
          "spicy": true,
          "image": "images/glass-noodle-salad.jpg"
        },
        {
          "id": "chicken-satay",
          "name_he": "צ'יקן סאטה",
          "name_en": "Chicken Satay",
          "description_he": "ארבעה שיפודי פרגית על מצע עלי חסה, בליווי רוטב בוטנים ובצל מוחמץ בצד.",
          "description_en": "Four chicken thigh skewers on a bed of lettuce, with peanut sauce and pickled onion on the side.",
          "price": 58,
          "spicy": false,
          "image": "images/chicken-satay.jpg"
        }
      ]
    },
    {
      "id": "mains",
      "name_he": "עיקריות",
      "name_en": "Mains",
      "protein_addon_he": "תוספת חלבון לבחירה: עוף 15 ₪ / בקר 18 ₪ / טופו 18 ₪.",
      "protein_addon_en": "Protein add-on of choice: chicken +15₪ / beef +18₪ / tofu +18₪.",
      "items": [
        {
          "id": "pad-thai",
          "name_he": "פאד תאי",
          "name_en": "Pad Thai",
          "description_he": "אטריות אורז מוקפצות עם ביצה, גזר, כרוב לבן, נבטים, בצל ירוק, בוטנים, צ'ילי יבש גרוס וליים. קיימת אופציה ללא גלוטן.",
          "description_en": "Stir-fried rice noodles with egg, carrot, white cabbage, sprouts, green onion, peanuts, ground dried chili and lime. Gluten-free option available.",
          "price": 68,
          "spicy": false,
          "gluten_free_option": true,
          "image": "images/pad-thai.jpg"
        },
        {
          "id": "pad-krapow",
          "name_he": "פאד קפאו",
          "name_en": "Pad Krapow",
          "description_he": "בשר טחון מוקפץ עם בזיליקום תאילנדי, בצל סגול, שעועית ירוקה, שום וצ'ילי. בליווי אורז יסמין וביצת עין.",
          "description_en": "Stir-fried minced meat with Thai basil, red onion, green beans, garlic and chili. Served with jasmine rice and a fried egg.",
          "price": 84,
          "spicy": true,
          "image": "images/pad-krapow.jpg"
        },
        {
          "id": "cashew-stir-fry",
          "name_he": "מוקפץ קשיו",
          "name_en": "Cashew Stir-Fry",
          "description_he": "פלפלים צבעוניים, בצל לבן, בצל ירוק, שום וקשיו קלוי, ברוטב חמוץ-מתוק.",
          "description_en": "Bell peppers, white onion, green onion, garlic and roasted cashews, in a sweet-and-sour sauce.",
          "price": 78,
          "spicy": false,
          "image": "images/cashew-stir-fry.jpg"
        },
        {
          "id": "green-curry",
          "name_he": "קארי ירוק",
          "name_en": "Green Curry",
          "description_he": "חלב קוקוס, חציל תאילנדי, בזיליקום ועשבי תיבול.",
          "description_en": "Coconut milk, Thai eggplant, basil and fresh herbs.",
          "price": 74,
          "spicy": true,
          "image": null
        },
        {
          "id": "red-curry",
          "name_he": "קארי אדום",
          "name_en": "Red Curry",
          "description_he": "קארי תאילנדי אדום, חלב קוקוס, ירקות טריים.",
          "description_en": "Thai red curry, coconut milk, fresh vegetables.",
          "price": 74,
          "spicy": true,
          "image": "images/red-curry.jpg"
        },
        {
          "id": "khao-pad",
          "name_he": "קאו פאד",
          "name_en": "Khao Pad (Thai Fried Rice)",
          "description_he": "אורז מוקפץ בסגנון תאילנדי, ירקות, ביצה ובצל ירוק.",
          "description_en": "Thai-style fried rice, vegetables, egg and green onion.",
          "price": 66,
          "spicy": false,
          "image": "images/thai-fried-rice.jpg"
        },
        {
          "id": "fried-egg-noodles",
          "name_he": "אטריות ביצים מוקפצות",
          "name_en": "Stir-Fried Egg Noodles",
          "description_he": "אטריות ביצים מוקפצות עם כרוב, גזר, פטריות ובצל ירוק ברוטב סויה מתקתק.",
          "description_en": "Stir-fried egg noodles with cabbage, carrot, mushrooms and green onion in sweet soy sauce.",
          "price": 68,
          "spicy": false,
          "image": null
        },
        {
          "id": "tom-yam",
          "name_he": "מרק טום יאם",
          "name_en": "Tom Yam Soup",
          "description_he": "מרק תאילנדי חריף-חמצמץ, למון גראס, פטריות, ליים וצ'ילי.",
          "description_en": "Spicy-and-sour Thai soup, lemongrass, mushrooms, lime and chili.",
          "price": 62,
          "spicy": true,
          "image": null
        }
      ]
    }
  ],
  "drinks": {
    "name_he": "תפריט שתייה",
    "name_en": "Drinks",
    "note_he": "המחירים בש\"ח (₪)",
    "sections": [
      {
        "id": "wine-glass",
        "name_he": "יין בכוס",
        "name_en": "Wine by the Glass",
        "type": "price",
        "groups": [
          {
            "label_he": "לבן",
            "label_en": "White",
            "items": [
              {
                "name": "שרדונה וילה קייפ",
                "price": 49
              },
              {
                "name": "שבלי אלברט בישו",
                "price": 65
              },
              {
                "name": "גוורץ לה פיאצה",
                "price": 46
              },
              {
                "name": "סובניון בלאן לה וי",
                "price": 54
              }
            ]
          },
          {
            "label_he": "אדום",
            "label_en": "Red",
            "items": [
              {
                "name": "לוריא טרסה",
                "price": 60
              },
              {
                "name": "וילה קייפ קברנה סוביניון",
                "price": 47
              },
              {
                "name": "קסטל לה וי אדום",
                "price": 54
              }
            ]
          },
          {
            "label_he": "רוזה",
            "label_en": "Rosé",
            "items": [
              {
                "name": "וויספרינג אנג'ל רוזה פרובאנס 2023",
                "price": 61
              },
              {
                "name": "רוזה טי אמו",
                "price": 54
              }
            ]
          },
          {
            "label_he": "מבעבע",
            "label_en": "Sparkling",
            "items": [
              {
                "name": "קאווה איבריקה יבש",
                "price": 41
              }
            ]
          }
        ]
      },
      {
        "id": "spirits",
        "name_he": "שתייה חריפה",
        "name_en": "Spirits",
        "type": "chaser_serve",
        "col_he": [
          "",
          "צ׳ייסר",
          "מנה"
        ],
        "groups": [
          {
            "label_he": "וודקה",
            "label_en": "Vodka",
            "items": [
              {
                "name": "אבסולוט",
                "chaser": 25,
                "serve": 43
              },
              {
                "name": "בלוגה",
                "chaser": 32,
                "serve": 65
              },
              {
                "name": "וודקה סטולי",
                "chaser": 32,
                "serve": 56
              },
              {
                "name": "וואן גוך (אננס/אסאי/ליצ'י/אבטיח)",
                "chaser": 32,
                "serve": 56
              }
            ]
          },
          {
            "label_he": "ג'ין",
            "label_en": "Gin",
            "items": [
              {
                "name": "ג'ין מאלפי",
                "chaser": 35,
                "serve": 59
              },
              {
                "name": "ג'ין מאלפי רוזה",
                "chaser": 35,
                "serve": 62
              },
              {
                "name": "ג'ין מאלפי לימון",
                "chaser": 35,
                "serve": 62
              },
              {
                "name": "גין ביפיטאר",
                "chaser": 26,
                "serve": 45
              },
              {
                "name": "ג'ין ביפיטר 24",
                "chaser": 28,
                "serve": 47
              },
              {
                "name": "הנדריקס",
                "chaser": 34,
                "serve": 64
              }
            ]
          },
          {
            "label_he": "רום",
            "label_en": "Rum",
            "items": [
              {
                "name": "רום הוואנה קלאב 3 שנים",
                "chaser": 29,
                "serve": 49
              },
              {
                "name": "קפטן מורגן ספייס",
                "chaser": 29,
                "serve": 49
              }
            ]
          },
          {
            "label_he": "טקילה",
            "label_en": "Tequila",
            "items": [
              {
                "name": "אמיסריו",
                "chaser": 25,
                "serve": 52
              },
              {
                "name": "פטרון אנייחו",
                "chaser": 52,
                "serve": 85
              },
              {
                "name": "דון חוליו בלאנקו",
                "chaser": 42,
                "serve": 67
              },
              {
                "name": "קלאסה אזול רפוסדו",
                "chaser": 110,
                "serve": 250
              }
            ]
          },
          {
            "label_he": "וויסקי",
            "label_en": "Whisky",
            "items": [
              {
                "name": "ג'יימסון",
                "chaser": 36,
                "serve": 58
              },
              {
                "name": "גלן מורנג'י X",
                "chaser": 32,
                "serve": 54
              },
              {
                "name": "שיבאס ריגל 12",
                "chaser": 42,
                "serve": 64
              },
              {
                "name": "שיבאס ריגאל 15 XV",
                "chaser": 44,
                "serve": 67
              },
              {
                "name": "שיבאס ריגל 18",
                "chaser": 46,
                "serve": 73
              },
              {
                "name": "שיבס רויאל סאלוט 21",
                "chaser": 48,
                "serve": 82
              },
              {
                "name": "גלנליווט 12",
                "chaser": 43,
                "serve": 66
              },
              {
                "name": "רד לייבל",
                "chaser": 36,
                "serve": 58
              },
              {
                "name": "ג'ק דניאלס",
                "chaser": 36,
                "serve": 56
              },
              {
                "name": "ג'וני ווקר שחור",
                "chaser": 40,
                "serve": 62
              },
              {
                "name": "ג'ק דניאלס דבש",
                "chaser": 35,
                "serve": 55
              },
              {
                "name": "מקאלן 12",
                "chaser": 52,
                "serve": 82
              }
            ]
          },
          {
            "label_he": "אניס",
            "label_en": "Arak & Anise",
            "items": [
              {
                "name": "ערק נח 12",
                "chaser": 30,
                "serve": 50
              },
              {
                "name": "ערק נח לימונים",
                "chaser": 25,
                "serve": 44
              },
              {
                "name": "ערק עלית",
                "chaser": 28,
                "serve": 48
              },
              {
                "name": "מיני אוזו",
                "chaser": 25,
                "serve": 44
              },
              {
                "name": "ערק אשקלון",
                "chaser": 25,
                "serve": 44
              }
            ]
          },
          {
            "label_he": "אפרטיף",
            "label_en": "Aperitif",
            "items": [
              {
                "name": "אפרול",
                "chaser": 25,
                "serve": 46
              },
              {
                "name": "קמפרי",
                "chaser": 25,
                "serve": 48
              }
            ]
          },
          {
            "label_he": "ליקר",
            "label_en": "Liqueur",
            "items": [
              {
                "name": "לימונצ'לו",
                "chaser": 26,
                "serve": 41
              },
              {
                "name": "פידג'",
                "chaser": 26,
                "serve": 41
              },
              {
                "name": "טריפל סק קאנטרו",
                "chaser": 32,
                "serve": 54
              }
            ]
          }
        ]
      },
      {
        "id": "bottles",
        "name_he": "בקבוקים",
        "name_en": "Bottles",
        "type": "price",
        "groups": [
          {
            "label_he": "לבן",
            "label_en": "White",
            "items": [
              {
                "name": "שרדונה וילה קייפ",
                "price": 205
              },
              {
                "name": "שבלי אלברט בישו",
                "price": 255
              },
              {
                "name": "גוורץ לה פיאצה",
                "price": 185
              },
              {
                "name": "סובניון בלאן לה וי",
                "price": 215
              }
            ]
          },
          {
            "label_he": "אדום",
            "label_en": "Red",
            "items": [
              {
                "name": "לוריא טרסה",
                "price": 238
              },
              {
                "name": "וילה קייפ קברנה סוביניון",
                "price": 205
              },
              {
                "name": "קסטל לה וי אדום",
                "price": 210
              }
            ]
          },
          {
            "label_he": "רוזה",
            "label_en": "Rosé",
            "items": [
              {
                "name": "וויספרינג אנג'ל רוזה פרובאנס 2023",
                "price": 229
              },
              {
                "name": "רוזה טי אמו",
                "price": 210
              },
              {
                "name": "רוזה קסטל",
                "price": 246
              }
            ]
          },
          {
            "label_he": "מבעבע",
            "label_en": "Sparkling",
            "items": [
              {
                "name": "קאווה בוטגה גולד",
                "price": 249
              },
              {
                "name": "קאווה בוטגה רוז גולד",
                "price": 249
              },
              {
                "name": "קאווה איבריקה יבש",
                "price": 160
              }
            ]
          },
          {
            "label_he": "וודקה",
            "label_en": "Vodka",
            "items": [
              {
                "name": "בלוגה טרנס אטלנטיק",
                "price": 1150
              },
              {
                "name": "אבסולוט",
                "price": 750
              },
              {
                "name": "בלוגה",
                "price": 990
              },
              {
                "name": "וודקה סטולי",
                "price": 850
              },
              {
                "name": "וואן גוך (אננס/אסאי/ליצ'י/אבטיח)",
                "price": 850
              }
            ]
          },
          {
            "label_he": "ג'ין",
            "label_en": "Gin",
            "items": [
              {
                "name": "ג'ין מאלפי",
                "price": 900
              },
              {
                "name": "ג'ין מאלפי רוזה",
                "price": 920
              },
              {
                "name": "ג'ין מאלפי לימון",
                "price": 920
              },
              {
                "name": "גין ביפיטאר",
                "price": 550
              },
              {
                "name": "הנדריקס",
                "price": 890
              }
            ]
          },
          {
            "label_he": "טקילה",
            "label_en": "Tequila",
            "items": [
              {
                "name": "אמיסריו",
                "price": 550
              },
              {
                "name": "פטרון אנייחו",
                "price": 1190
              },
              {
                "name": "דון חוליו בלאנקו",
                "price": 750
              },
              {
                "name": "טקילה דון חוליו 1942",
                "price": 2200
              },
              {
                "name": "קלאסה אזול רפוסדו",
                "price": 3900
              }
            ]
          },
          {
            "label_he": "וויסקי",
            "label_en": "Whisky",
            "items": [
              {
                "name": "ג'יימסון",
                "price": 790
              },
              {
                "name": "שיבאס ריגל 12",
                "price": 890
              },
              {
                "name": "שיבאס ריגל 18",
                "price": 1290
              },
              {
                "name": "שיבס רויאל סאלוט 21",
                "price": 1090
              },
              {
                "name": "גלנליווט 12",
                "price": 890
              },
              {
                "name": "רד לייבל",
                "price": 750
              },
              {
                "name": "ג'ק דניאלס",
                "price": 950
              },
              {
                "name": "ג'וני ווקר שחור",
                "price": 950
              },
              {
                "name": "ג'ק דניאלס דבש",
                "price": 650
              },
              {
                "name": "מקאלן 12",
                "price": 1590
              }
            ]
          },
          {
            "label_he": "אניס",
            "label_en": "Arak & Anise",
            "items": [
              {
                "name": "ערק נח 12",
                "price": 600
              },
              {
                "name": "ערק נח לימונים",
                "price": 600
              },
              {
                "name": "ערק עלית",
                "price": 550
              },
              {
                "name": "מיני אוזו",
                "price": 500
              },
              {
                "name": "ערק אשקלון",
                "price": 500
              }
            ]
          },
          {
            "label_he": "אפרטיף",
            "label_en": "Aperitif",
            "items": [
              {
                "name": "אפרול",
                "price": 550
              },
              {
                "name": "קמפרי",
                "price": 590
              }
            ]
          },
          {
            "label_he": "ליקר",
            "label_en": "Liqueur",
            "items": [
              {
                "name": "לימונצ'לו",
                "price": 550
              }
            ]
          }
        ]
      },
      {
        "id": "soft",
        "name_he": "שתייה קלה",
        "name_en": "Soft Drinks",
        "type": "price",
        "groups": [
          {
            "label_he": "",
            "label_en": "",
            "items": [
              {
                "name": "פפסי",
                "price": 15
              },
              {
                "name": "פפסי מקס",
                "price": 15
              },
              {
                "name": "סבן אפ",
                "price": 15
              },
              {
                "name": "דיאט סבן אפ",
                "price": 15
              },
              {
                "name": "פרייה",
                "price": 14
              },
              {
                "name": "סן בנדטו פלסטיק",
                "price": 13
              },
              {
                "name": "סן פלגרינו 750 מל",
                "price": 26
              },
              {
                "name": "ענבים",
                "price": 14
              },
              {
                "name": "מים בטעמים",
                "price": 14
              },
              {
                "name": "תפוזים/לימונדה",
                "price": 14
              },
              {
                "name": "XL משקה אנרגיה",
                "price": 16
              },
              {
                "name": "תוספת ערבוב למשקה (לימונדה/חמוציות/טוניק/ראשן)",
                "price": 8
              },
              {
                "name": "תוספת ערבוב למשקה - משקה אנרגיה",
                "price": 16
              },
              {
                "name": "פיוזטי אפרסק",
                "price": 15
              },
              {
                "name": "מים מינרלים",
                "price": 13
              }
            ]
          }
        ]
      }
    ]
  }
};
