# Giovanna’s Wishlist

Standalone static wishlist. Open index.html or serve this folder with a static web server. No dependencies or build step.

Product links, exact sizes, one-time purchase prices and photos checked on Amazon on October 31, 2026. Prices may change.

Jonathan’s website is a separate repository and is not modified.

## Cart and live updates
The public page uses Giovanna’s editor API only. The cart uses the independent `giovanna-wishlist-cart` local storage key; it never reads Jonathan’s gifts or cart. Selected IDs survive reloads, and live gift changes refresh prices and remove deleted products from the cart. The embedded cart code is sourced from `cart.js`. Keep the inline copy updated when editing it.

Ratings and notes belong to Giovanna and are edited through her password editor. Alternative products are saved in each gift’s `options` array (up to five). Public cards preserve size/color details, remember choices with `giovanna-wishlist-option-<id>`, and use the chosen alternative in the cart. Wishlist totals count first choices once.
