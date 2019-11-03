import apiMenu from "./apiMenu.json" ;
//https://codesandbox.io/s/vVoQVk78
//https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/shopping-cart
const MenuAPI = {
    allPrimiPiatti: function() {return apiMenu.primi},
    allPizza: function() { return apiMenu.pizze },
    allPanini: function() { return apiMenu.panini }
}
export default MenuAPI;