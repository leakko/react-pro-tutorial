import { useProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export const ProductImage = ({ img = '' }) => {
    const { product } = useProductContext();
    const imgToShow: string = img || product.img || noImage;

    return (
        <img className={styles.productImg} src={ imgToShow} alt="Product" />
    )
}