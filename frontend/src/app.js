import HomeScreen from './screens/HomeScreen.js'
// router function
const router = () => {
    // get access to main-container
    const main = document.getElementById("main-container");
    main.innerHTML = HomeScreen.render();
};
window.addEventListener('load',router);
 