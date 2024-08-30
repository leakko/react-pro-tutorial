import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, useContext } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const { Provider } = ProductContext;
export const useProductContext = () => useContext(ProductContext);

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    value?: number;
    onChange?: ( args: onChangeArgs ) => void;
    initialValues?: InitialValues;
}


export const ProductCard = ({ children, product, className, style, value, initialValues, onChange }: Props) => {
    const { counter, maxCount, isMaxCountReached,increaseBy, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            product,
            counter,
            maxCount,
            increaseBy
        }}>
            <div className={ `${styles.productCard} ${className}` } style={style}>
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }
            </div>
        </Provider>
    )
}
