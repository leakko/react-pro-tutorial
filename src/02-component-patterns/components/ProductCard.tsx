import { useProduct } from '../hooks/useProduct';
import { createContext, useContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const { Provider } = ProductContext;
export const useProductContext = () => useContext(ProductContext);

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }}>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
}
