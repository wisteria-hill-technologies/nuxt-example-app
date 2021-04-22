# nuxt-example-app

### Simplified Re-creation of Aesop Ecommerce Site Product Details Page

#### Original page
https://www.aesop.com/uk/p/skin/cleanse/in-two-minds-facial-cleanser/

### Re-creation of the page - Results
Deployed to Heroku

https://nuxt-noby-app-001.herokuapp.com/

### Tech Stack Used
- nuxt.js
- vue.js
- vuex for State management  
- Tailwind CSS
- nuxt.js api functionality
- Heroku for deployment

### How to run this app locally
1. git clone this repo.
2. yarn
3. yarn run dev for dev spin.
4. yarn build for building the app for deployment
5. yarn start to run the build app.

### UI
Functionalities replicated:
- Product Size switcher/selector
- Shopping Cart - add/remove from cart, change quantity
- Open and close cart
- Key ingredients side slider and its animation
- Basic responsiveness of the page
- Simplified version and slider of accompaniments section

### Content and Data Flow
- Data flow and statemanagement is done via components event emit as well as vuex between distant components.
- Product data and navbar link (texts) are fetched via simple api endpoints created, and prepared as a static data on the server side before rendering. (See the server-middleware folder)

### Some Thoughts
I have used react for some years (I love it), and haven't used vue.js before. But, it was very interesting to try vue.js and I think I learned a lot in a few days during which I built this.
I am starting to like nuxt.js and vue.js a lot for ease of use.

notes:

- No animation or styling libraries were used except for Tailwind
- No footer or hamburger icon was added due to time constraints.
- Some animations were added as examples.
