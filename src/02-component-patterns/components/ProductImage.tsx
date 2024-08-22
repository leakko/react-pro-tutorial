import { useProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { CSSProperties } from "react";

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
    const { product } = useProductContext();
    const imgToShow: string = img || product.img || noImage;

    return (
        <img className={`${styles.productImg} ${className}`} src={ imgToShow} alt="Product" style={style} />
    )
}