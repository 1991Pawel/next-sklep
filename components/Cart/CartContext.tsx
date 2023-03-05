import { createContext ,useState,ReactNode} from "react";
import { useContext } from "react";

interface CartItem {
    price:number;
    title:string,
  }

  interface CartState {
    items:CartItem[];
  }

export const CartStateContext = createContext<CartState | null>(null);


export const CartStateContextPovider = ({children}:{children:ReactNode}) => {
    const [cartItems,setCartItems] = useState<CartItem[]>([{
        price:21,
        title:'Koszulka'
    }]);



    return (
        <CartStateContext.Provider value={{items:cartItems}}>
        {children}
        </CartStateContext.Provider>
    )


}

export const useCartState = () => {
    const cartState = useContext(CartStateContext);
    if(!cartState) {
        throw new Error("You forgot CartStateContextProvider");
    }
    return cartState;
}
