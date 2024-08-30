import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    value?: number;
    onChange?: ( args: onChangeArgs ) => void;
    initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {
    const [ counter, setCounter ] = useState<number>(initialValues?.count || value);
    const lastValue = useRef<number>(value);
    const isControlled = useRef<boolean>(!!onChange);

    const increaseBy = ( value: number ) => {
        const positiveCount = Math.max(counter + value, 0);
        const newValue = Math.min(positiveCount, initialValues?.maxCount || positiveCount);
        if (isControlled.current) return onChange!({ product, count: newValue });

        setCounter(newValue);
    };

    const reset = () => {
        setCounter(initialValues?.count || value );
    }

    useEffect(() => {
        if (lastValue.current === value) return;
        setCounter(value);
        lastValue.current = value;
    }, [ value ])

    return { 
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        increaseBy,
        reset
    }
}
