import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemList/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "categories",
        path: "/category/:categoryName",
        Element: ItemListContainer
    },
    {
        id: "detalle",
        path: "/item/:id",
        Element: ItemDetailContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    }

]