import { useState } from 'react';
import { products } from '../data/products';
import { ProductInCart, onChangeArgs } from '../interfaces/interfaces';

const initialProducts: { [key: string]: ProductInCart } = {};
products.forEach(product => initialProducts[product.id] = {...product, count: 0});

export const useShoppingCart = () => {
	const [products, setProducts] = useState<{ [key: string]: ProductInCart }>(initialProducts);
    
    const onProductCountChange = ({ count, product }: onChangeArgs) => {
        setProducts(oldShoppingCart => {
            const { [product.id]: changedProduct, ...rest } = oldShoppingCart;
            const newShoppingCart = {
                ...rest,
                [changedProduct.id]: {...changedProduct, count: Math.max(count, 0)}
            };
            return newShoppingCart;
        })
	}

	return { products, onProductCountChange }
}