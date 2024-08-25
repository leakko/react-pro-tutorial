import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement, useContext } from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const { Provider } = ProductContext;
export const useProductContext = () => useContext(ProductContext);

export interface Props {
    product: Product;
    children?: ReactElement |ReactElement[];
    className?: string;
    style?: CSSProperties;
    value?: number;
    onChange?: ( args: onChangeArgs ) => void;
}


export const ProductCard = ({ children, product, className, style, value, onChange }: Props) => {
    const { counter, increaseBy } = useProduct({ onChange, product, value });

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
