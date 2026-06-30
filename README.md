# Tala Thai Kitchen — Menu Data

Structured menu for **Tala Thai Kitchen** (טאלה — מטבח תאילנדי), a kosher Thai
restaurant. Built from the restaurant's official menu PDF, with each dish photo
matched to its menu item.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Designed bilingual (HE/EN) menu web page — food + drinks. Published via GitHub Pages. |
| `menu-data.js` | Menu data loaded by the page (`window.MENU`), generated from `menu.json`. |
| `menu.json` | Machine-readable menu (bilingual HE/EN, prices, descriptions, image links, drinks). |
| `MENU.md` | Human-readable menu (food + drinks). |
| `Tala-Menu.pdf` | Illustrated A4 PDF of the full menu (with dish photos). |
| `menu-print.html` | Text-only print layout (no dish photos). |
| `Tala-Menu-Print.pdf` | Text-only A4 PDF for printing customer menus. |
| `images/` | Dish photos + logo. |

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

## Drinks

The drinks menu is built from the restaurant's price list (Excel), grouped into
wine by the glass, spirits (chaser / serve), bottles, and soft drinks.

- **Beers are excluded** (per request, currently without beers).
- **Non-kosher items removed:** Moët & Chandon. (Jägermeister, Chartreuse and
  Montenegro were not in the source list.)
- Wines and liqueurs are included as listed, confirmed by the owner.

## Notes

- Prices are in ILS (₪).
- Mains offer a protein add-on: chicken +15₪ / beef +18₪ / tofu +18₪.
- The dessert page (2 desserts) is intentionally not included.
- `menu-data.js` is generated from `menu.json`. After editing `menu.json`, regenerate it:
  `node -e 'const m=require("./menu.json");require("fs").writeFileSync("menu-data.js","window.MENU = "+JSON.stringify(m,null,2)+";\n")'`
  and rebuild the PDF from `index.html` (print to A4).
