let mains =
    [{
        name: 'Chicken Burger',
        type: 'Burger',
        description: 'Chicken burger on a sesame seed bun',
        price: 83,
        dietary: ['halal',]

    },
    {
        name: 'Avocado Salad',
        type: 'Salad',
        description: 'Fre ShA VAcado accompnied with delicious chick peas, juicy baby tomatoes and lettuce',
        price: 70,
        dietary: ['halal', 'vegan', 'vegetarian', 'pescitarian', 'gluten free']

    },
    {
        name: 'Prego Pasta',
        type: 'Pasta',
        description: 'Homemade Prego Pasta ',
        price: 90,
        dietary: ['halal', 'vegetarian', 'pescitarian']

    },
    {
        name: 'Beef Burger',
        type: 'Burger',
        description: 'Beef burger on sesame seed bun',
        price: 85,
        dietary: ['halal']

    },
    {
        name: 'Hawaiian Pizza',
        type: 'Pizza',
        description: 'Pizza with Tomato sauce, pineapple and cheese',
        price: 85,
        dietary: ['halal']

    },
    {
        name: 'Margherita Pizza',
        type: 'Pizza',
        description: 'Pizza with Tomato sauce and cheese',
        price: 85,
        dietary: ['halal', 'vegetarian']

    },
    ]
let sidesArr = [
    {
        name: 'Chips',
        type: 'Carbohydrates',
        price: '28',
        dietary: ['halal', 'vegan', 'vegetarian', 'pescitarian',]
    },
    {
        name: 'Chickpeas',
        type: 'Protein',
        price: '28',
        dietary: ['halal', 'vegan', 'vegetarian', 'pescitarian', 'gluten free']
    },
    {
        name: 'Salad',
        type: 'salad',
        price: '25',
        dietary: ['halal', 'vegan', 'vegetarian', 'pescitarian', 'gluten free']
    },
    {
        name: 'Sweet potato fries',
        type: 'Carbohydrates',
        price: '30',
        dietary: ['halal', 'vegan', 'vegetarian', 'pescitarian', 'gluten free']
    },
    {
        name: 'Rice',
        type: 'Carbohydrates',
        price: '22',
        dietary: ['halal', 'vegan', 'vegetarian', 'pescitarian', 'gluten free']
    },
]
let drinksArr = [{
    name: 'Water',
    dietary: ['water', 'non-alcoholic'],
    price: 0

},
{
    name: 'Devils peak Lager',
    dietary: ['alcoholic'],
    price: 38


},
{

    name: 'Sprite',
    dietary: ['soft', 'non-alcoholic'],
    price: 25

},
{

    name: 'Coca-cola',
    dietary: ['soft', 'non-alcoholic'],
    price: 25

},
{

    name: 'Cosmopolitan',
    dietary: ['alcoholic'],
    price: 25

},
{

    name: 'Virgin Cosmopolitan',
    dietary: ['non-alcoholic'],
    price: 25

},
{

    name: 'Fanta',
    dietary: ['soft', 'non-alcoholic'],
    price: 25

},
{

    name: 'Americano',
    dietary: ['warm', 'non-alcoholic'],
    price: 32

},
{

    name: 'Apple juice',
    dietary: ['juice', 'non-alcoholic'],
    price: 20

},
]
let menuObj = { mains, sidesArr, drinksArr }

export { menuObj }