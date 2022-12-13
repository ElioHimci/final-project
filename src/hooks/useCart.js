import { useUIContext } from "../context/ui";

function useCart(product){
    const {cart,setCart} = useUIContext();

    const addToCart = () => {
        cart.findIndex(c => c.id === product.id) >= 0
        ? setCart(cart.filter(c => c.id !== product.id))
        : setCart(c => [...c , product]);
    }

    const removeFromCart = () =>{
        cart.findIndex((c) => c.id === product.id) >= 0
        ? setCart(cart.filter(c => c.id !== product.id))
        : setCart ([])
    } 
   
    const addToCartText = 
    cart.findIndex((c) => c.id === product.id) >= 0
    ? "Remove from cart" : "add to cart" ; 

    return ({addToCart , removeFromCart, addToCartText})
}
export default useCart;
