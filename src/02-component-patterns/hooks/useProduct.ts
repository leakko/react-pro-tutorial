import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    value?: number;
    onChange?: ( args: onChangeArgs ) => void;
}

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {
    const [ counter, setCounter ] = useState(value);
    const isControlled = useRef<boolean>(!!onChange);
    const increaseBy = ( value: number ) => {
        const newValue = Math.max(counter + value, 0);
        if (isControlled.current) return onChange!({ product, count: newValue });

        setCounter(newValue);
    };

    useEffect(() => {
        setCounter(value);
    }, [ value ])

    return { counter, increaseBy }
}
