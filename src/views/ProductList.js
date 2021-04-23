import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [productList, setProductList] = useState();

  const fetchProduct = () => {
    axios
      .get('https://salty-meadow-43376.herokuapp.com/products/all')
      .then((res) => {
        if (res.status === 200) {
          setProductList(res.data['data']);
        }
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const removeProductById = (productId, e) => {
    const url = `https://salty-meadow-43376.herokuapp.com/products/deleteByID`;
    let data = {
      data: {
        id: productId,
      },
    };

    axios
      .delete(url, data)
      .then(() => {
        setProductList();
        fetchProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container p-3 my-3 border">
        <h1 className="pb-4">Product list</h1>
        {productList ? (
          <div className="row">
            {productList?.map((product) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12 mr-auto"
                key={product._id}
              >
                <div className="card" style={{ marginTop: '20px' }}>
                  <div className="card-header">
                    <span className="float-start">{product.type}</span>
                    <span className="float-end">{product.product_code}</span>
                  </div>
                  <img
                    src="/images/plus.png"
                    className="card-img-top"
                    alt="productImage"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-text">Brand: {product.brand}</p>
                    <button
                      className="btn btn-danger float-end"
                      onClick={(e) => removeProductById(product._id, e)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
