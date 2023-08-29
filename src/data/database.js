

export const FRUITS = 'fruit';
export const VEGETABLES = 'vegetables';

export const CATEGORIES = [FRUITS,VEGETABLES];

export const PRODUCTS = [
    {
        id:1,
        name : 'Apple',
        category : FRUITS,
        price : 200
    },
    {
        id:2,
        name : 'Orange',
        category : FRUITS,
        price : 300
    },
    {
        id:3,
        name : 'Onion',
        category : VEGETABLES,
        price : 100
    },
    {
        id:4,
        name : 'Tomato',
        category : VEGETABLES,
        price : 250
    }
]

export const DATABASE = {
    categories : CATEGORIES,
    products : PRODUCTS
}