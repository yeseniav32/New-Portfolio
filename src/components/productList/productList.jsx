import "./productList.css"
import Product from "../product/product"

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="product-list-text">
                <h1 className="product-list-title">Projects</h1>
                <p className="product-list-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Minima ducimus obcaecati libero! Natus cum qui quaerat officia, 
                    
                </p>
            </div>
            <div className="product-list-list">
                <Product/>
                <Product/>
                <Product/>
                {/* <Product/>
                <Product/>
                <Product/> */}
            </div>
        </div>
    )
}

export default ProductList