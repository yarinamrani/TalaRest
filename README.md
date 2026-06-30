# Tala Thai Kitchen — Menu Data

Structured menu for **Tala Thai Kitchen** (טאלה — מטבח תאילנדי), a kosher Thai
restaurant. Built from the restaurant's official menu PDF, with each dish photo
matched to its menu item.

## Files

| File | Purpose |
| --- | --- |
| `menu.json` | Machine-readable menu (bilingual HE/EN, prices, descriptions, image links). |
| `MENU.md` | Human-readable menu with each dish matched to its photo. |
| `images/` | Dish photos, named after their dish. |

## Photo ↔ dish matching

Each photo was matched to the written menu item it shows:

| Image | Dish |
| --- | --- |
| `som-tum-papaya-salad.jpg` | סלט פאפאיה / Papaya Salad (Som Tum) |
| `pomelo-mango-fish-salad.jpg` | סלט פומלה / מנגו ודג מטוגן / Pomelo–Mango Salad with Fried Fish |
| `nam-tok-beef.jpg` | נאם טוק בקר / Nam Tok Beef Salad |
| `thai-spring-rolls.jpg` | אגרול תאילנדי / Thai Spring Rolls |
| `glass-noodle-salad.jpg` | סלט אטריות שעועית / Glass Noodle Salad |
| `chicken-satay.jpg` | צ'יקן סאטה / Chicken Satay |
| `pad-thai.jpg` | פאד תאי / Pad Thai |
| `pad-krapow.jpg` | פאד קפאו / Pad Krapow |
| `cashew-stir-fry.jpg` | מוקפץ קשיו / Cashew Stir-Fry |
| `red-curry.jpg` | קארי אדום / Red Curry |
| `thai-fried-rice.jpg` | קאו פאד / Khao Pad (Thai Fried Rice) |

### Menu items without a photo

`מיאנג קאם סלמון נא` (Miang Kham Salmon), `קארי ירוק` (Green Curry),
`אטריות ביצים מוקפצות` (Stir-Fried Egg Noodles), `מרק טום יאם` (Tom Yam Soup).

## Notes

- Prices are in ILS (₪).
- Mains offer a protein add-on: chicken +15₪ / beef +18₪ / tofu +18₪.
- The dessert page (2 desserts) is intentionally not included.
