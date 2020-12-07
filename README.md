Bishal Bazaar Javascript E-commerce project tutorial

1. Create Folder Structure

   1. Create root folder as bishalBazaar
   2. Add frontend and backend folders inside bishalBazaar
   3. Create src folder inside frontend
   4. Create index.html with heading-1 Bishal Bazaar inside src folder
   5. Open terminal and go to frontend folder
   6. Run npm init inside frontend
   7. Run npm install -D live-server (here, -D means Development dependencies )
   8. Add "start" command as "live-server src --verbose" in scripts section inside package.json
   9. Run npm start

2. Design Website

   1. Create a css folder inside src folder
   2. Create style.css file inside css folder
   3. Link style.css to index.html
   4. Create div.grid-container
   5. Create header, main, and footer
   6. Style html, body, grid-container, header, main, and footer

3. Create Static Home Screen

   1. Inside main section, create ul.products
   2. Create <li></li> inside ul.products
   3. Create div.product inside <li></li>
   4. Add .product-image, .product-name, product-brand, .product-price
   5. Style ul.products and internal divs
   6. Duplicate 2 times to show 3 products

4. Render Dynamic Home Screen

   1. Create data.js
   2. export an array of 6 products
   3. Create Screens/HomeScreen.js
   4. Export HomeScreen as an object with render() method
   5. Implement render()
   6. Import data.js
   7. Return products mapped to <li></li> inside an <ul></ul>
   8. Export HomeScreen
   9. Create app.js
   10. Link it to index.html as module
   11. Set <main></main> id to main-container inside index.html
   12. Create router() function inside app.js
   13. Set main-container innerHTML to HomeScreen.render()
   14. Set load event of window to router() function

5. Build URL Router

   1. Create routes as route:screen object for home screen in app.js
   2. Create ProductScreen.js in screens folder
   3. Export ProductScreen as an object with render() method
   4. Create utils.js inside js folder
   5. Export parseRequestURL() method
   6. Set URL as hash address split by slash
   7. Return resource, id and verb of url
   8. Update router() method inside app.js
   9. Set request as parseRequestURL()
   10. Build paresedUrl and compare with routes
   11. If route exists render it, else render Error404
   12. Create screens/Error404.js and render error message

6. Create Node.JS Server

   1. Create backend folder inside root folder
   2. Create server.js file inside backend folder
   3. Run npm init in root bishalBazaar folder
   4. npm install express
   5. Create server.js
   6. Add start command as node backend/server.js
   7. require express
   8. Move data.js from frontend to backend
   9. Change "export default" to "module.exports =" inside data.js
   10. Create route from /api/products
   11. return products in data.js
   12. Add "start" command with "node backend/server.js" in the packaged.json located at the root folder (not in the frotend folder)
   13. run npm start

7. Load Products From Backend

   1. Edit HomeScreen.js
   2. Make render async
   3. Fetch products from '/api/products' in render()
   4. Make router() async and call await HomeScreen.render() in app.js
   5. Use cors on backend

8. Add Webpack

   1. Go to frontend folder from terminal. (cd frontend)
   2. npm install -D webpack webpack-cli webpack-dev-server
   3. Unistall live-server. (npm unistall live-server)
   4. Update package.json inside frontend folder
   5. Add "start": "webpack-dev-server --mode development --watch-content-base --open"
   6. Move index.html, style.css, and images to frontend folder
   7. Rename app.js to index.js
   8. Update index.html
   9. Add <script src="main.js"></script> before </body>
   10. Start the server. (npm start)
   11. Install axios library inside frontend folder. (npm install axios)
   12. Change fetch to axios in HomeScreen

9. Install Babel For ES6 Syntax

   1. npm install -D @babel/core @babel/cli @babel/node @babel/preset-env
   2. Create .babelrc and set presets to @babel/preset-env in the root folder
   3. npm install -D nodemon
   4. Set start: nodemon --watch backend --exec babel-node backend/server.js in package.json located in the root folder
   5. Convert require to import in server.js
   6. npm start

10. Enable Code Linting

    1. npm install -D eslint
    2. Install VSCode eslint extension
    3. Create .eslintrc and set module.exports for env to node in the root folder
    4. Set VSCode setting for editor.codeActionsOnSave source.fixAll.eslint to true
    5. Check result for linting error
    6. npm install -D eslint-config-airbnb-base eslint-plugin-import
    7. Set extends to airbnb-base
    8. Set parserOptions to ecmaVersion 11 and sourceType to module
    9. Set rules for no-console to 0 to ignore linting error

11. Install VSCode Extension

    1. JavaScript (ES6) code snippets
    2. ES7 React/Redux/GraphQL/React-Native snippets
    3. Prettier - Code formatter
    4. npm install -D eslint-config-prettier in the root folder
    5. Add 'prettier' in the extends section in .eslintrc.js
    6. HTML&LESS grammar injections

12. Create Rating Component

    1. Create components/Rating.js
    2. Create div.rating
    3. Link to fontawesome.css in index.html
    4. Define Rating object with render()
    5. If !props.value return empty div
    6. Else use fa fa-star, fa-start-half-o and fa-star-o
    7. Last span for props.text || ''
    8. Style div.rating, span and last span
    9. Edit HomeScreen
    10. Add div.product-rating and use Rating component

13. Product Screen

    1. Get product id from request in product screen
    2. Implement /api/product/:id api
    3. Send AJAX request to product api

14. Product Screen UI

    1. Create back to result link
    2. Create div.results with 3 columns
    3. Column 1 for product image
    4. Column 2 for product information
    5. Column 3 for prodcut action
    6. Style .details and all columns
    7. Create add to cart button with add-button id

15. Product Screen Action

    1. after_render() to add event to the button
    2. Add event handler for the button
    3. Redirect user to cart/:product_id
    4. Implement after_render in index.js

16. Add To Cart Action

    1. create CartScreen.js
    2. parseRequestUrl
    3. getProduct(request.id)
    4. addToCart
    5. getCartItems
    6. cartItems.find
    7. if existItem update qty
    8. else add item
    9. setCartItems

17. Cart Screen UI
    1. Define cartItems = getCartItems() inside CartScreen.js
    2. Create 2 columns for cart items and cart action
    3. cartItems.length === 0 ? cart is empty
    4. Show item image, name, quantity and price
    5. Cart action
    6. Subtotal
    7. Proceed to Checkout button
    8. Add CSS style