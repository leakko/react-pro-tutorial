import { useProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import { CSSProperties, useCallback } from "react";

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
    const { increaseBy, counter, maxCount } = useProductContext();

    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style} >
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}> { counter } </div>
            <button
                onClick={() => !isMaxReached() && increaseBy(+1)}
                className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
            >
                +
            </button>
        </div>
    )
}