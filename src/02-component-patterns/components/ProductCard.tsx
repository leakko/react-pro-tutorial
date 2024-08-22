import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement, useContext } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const { Provider } = ProductContext;
export const useProductContext = () => useContext(ProductContext);

export interface Props {
    product: Product;
    children?: ReactElement |ReactElement[];
    className?: string;
    style?: CSSProperties;
}


export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }}>
            <div className={ `${styles.productCard} ${className}` } style={style}>
                { children }
            </div>
        </Provider>
    )
}
