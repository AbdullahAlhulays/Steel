# SteelLine

SteelLine is a React + Vite storefront for custom steel signs.

## Store Workflow

The site is built around this order path:

1. Choose one of the five main categories.
2. View only the products or previous work examples under that category.
3. Open a product details page by product ID.
4. Select color, width, length, and the custom fields required for that product.
5. Send a complete WhatsApp order message.

## Main Categories

- لوحات عنوانك الوطني
- لوحات أرقام المنازل
- لوحات الاسم مع العنوان الوطني
- لوحات خاصة بالشركات
- لوحات فنية

## Editing Products

Products, categories, images, available colors, size options, and product-specific fields are stored in:

`src/data/products.js`

To add multiple products or uploaded work examples under a category, add more product objects with the same `category` value and a unique `id`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
