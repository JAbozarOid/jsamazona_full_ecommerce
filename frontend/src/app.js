import Error404Screen from './screens/Error404Screen.js';
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen'
import { parseRequestUrl } from './utils.js';

// it's an object that navigate the home screen to detail screem
// the "/" means the home screen
const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
}

// router function
const router = () => {
    // when user click on the items in home screen it's navigate to details screen
    const request = parseRequestUrl();
    const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

    //compare data in parseUrl and routes
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    // get access to main-container
    const main = document.getElementById("main-container");
    //main.innerHTML = HomeScreen.render();
    main.innerHTML = screen.render();


};
window.addEventListener('load',router);

// for router screen
window.addEventListener('hashchange', router);
 