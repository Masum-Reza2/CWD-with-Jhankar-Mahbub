import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    //  my codes applying pagination
    const [itemsPerPage, setItemsPerpage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    /**
     * todo 1 : Get the total number of products.
     * todo 2 : number of items per page dynamic.
     * todo 3 : total pages dynamic.
     * todo 4 : creating array and buttons.
     */
    const { count } = useLoaderData();
    // console.log(count)
    const totalPages = Math.ceil(count / itemsPerPage);

    // way-1
    // const pages = [];
    // for (let i = 0; i < totalPages; i++) {
    //     pages.push(i);
    // }

    //  way-2
    const pagination = [...Array(totalPages).keys()]
    // console.log(pagination)

    // my functions
    const handleItemsPerPage = e => {
        const val = Number.parseFloat(e.target.value)
        setItemsPerpage(val);
        setCurrentPage(1);
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [itemsPerPage, currentPage]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd._id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product._id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link className='proceed-link' to="/orders">
                            <button className='btn-proceed'>Review Order</button>
                        </Link>
                    </Cart>
                </div>

            </div>
            <div className='pagination'>
                <p>Current Page : {currentPage}</p>
                <button onClick={handlePrev}>Prev</button>
                {
                    pagination.map((page, index) => <button
                        className={currentPage === (page + 1) ? 'selected' : ''}
                        onClick={() => setCurrentPage(page + 1)}
                        key={index}>
                        {page + 1}
                    </button>)
                }
                <button onClick={handleNext}>Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
        </>
    );
};

export default Shop;