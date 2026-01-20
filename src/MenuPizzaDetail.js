import Marg from './assets/marg-pizza.jpg';
import MeatL from './assets/meat-lovers.jpg';
import Veggie from './assets/veggie-pizza.jpg';
import BBQ from './assets/bbq-delight.jpg';


const PizzaMenu = [
    {
        id: "pizza-1",
        icon: "🍕",
        Img: Marg,
        name: 'Margherita Pizza',
        ingredient: "Tomato, mozzarella, fresh basil",
        Price: 8.99,
    },
    {
        id: "pizza-2",
        icon: "🍕",
        Img: MeatL,
        name: "Meat Lover's Pizza",
        ingredient: "Pepperoni, sausage, bacon, ham",
        Price: 11.99,
    },
    {
        id: "pizza-3",
        icon: "🍕",
        Img: Veggie,
        name: "Vegetarian Pizza",
        ingredient: "Mushrooms, peppers, onions, olives",
        Price: 9.00,

    },
    {
        id: "pizza-4",
        icon: "🍕",
        Img: BBQ,
        name: "BBQ Chicken Pizza",
        ingredient: "Grilled chicken, BBQ sauce, red onion",
        Price: 10.99,
    }
]
export default PizzaMenu;