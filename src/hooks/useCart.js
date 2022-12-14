import { useUIContext } from "../context/ui";

function useCart(product){
    const {cart,setCart} = useUIContext();

    const addToCart = () => {
        cart.findIndex(c => c.id === product.id) >= 0
        ? setCart(cart.filter(c => c.id !== product.id))
        : setCart(c => [...c , product]);
    }

    const removeFromCart = () =>{
        // PER TU RREGULLU
        // cart.findIndex(c => c.id === product.id) >= 0
        // ? setCart(cart.filter(c => c.id !== product.id))
        // : setCart(cart.filter(c => c.id !== product.id));
        console.log("removed");
    } 

    const removeAllCart = () =>{
         setCart ([]);
    } 
   
    const addToCartText = 
    cart.findIndex((c) => c.id === product.id) >= 0
    ? "Remove from cart" : "add to cart" ; 

    return ({addToCart , removeFromCart, addToCartText,removeAllCart})
}
export default useCart;
