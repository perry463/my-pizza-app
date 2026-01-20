import mojito from './assets/mojito-cocktail.jpg';
import margarita from './assets/margarita-cocktail.jpg';
import oldFashion from './assets/old-fashioned-cocktail.jpg'

const CocktailMenu = [
    {
        id: "cocktail-1",
        icon: '🍸',
        Img: mojito,
        name: "Mojito",
        cocktailInfo1: "Fresh mint, lime,",
        cocktailInfo2: "sparkling soda",
        Price: 8.13
    },
     {
        id: "cocktail-2",
        icon: '🍸',
        Img: margarita,
        name: "Margarita",
        cocktailInfo1: "Tequila, lime, salted rim",
        Price: 9.19
    },
     {
        id: "cocktail-3",
        icon: '🍸',
        Img: oldFashion,
       name: "Old Fashioned",
       cocktailInfo1: "Bourbo, bitters, orange twist",
        Price: 10.03
    }
]
export default CocktailMenu