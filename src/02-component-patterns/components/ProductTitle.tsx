import { useProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title = '' }) => {
    const { product } = useProductContext();
    return (
        <span className={styles.productDescription}>{ title || product.title }</span>
    )
}