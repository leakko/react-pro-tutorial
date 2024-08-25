import { ProductCard } from "../components";
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
    const { products, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    Object.values(products).map(product => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            value={product.count}
                            onChange={ onProductCountChange }
                        >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Title className="text-bold" />
                            <ProductCard.Buttons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                {
                    Object.values(products).filter(product => product.count).map(product =>(
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={ onProductCountChange }
                        >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Buttons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
