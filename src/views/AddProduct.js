import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [venderName, setVenderName] = useState('');
  const [loading, setLoading] = useState(false);

  const mySubmitHandler = (event) => {
    event.preventDefault();

    const newProduct = {
      product_code: code,
      name: name,
      brand: brand,
      type: type,
      vender_name: venderName,
    };
    setLoading(true);
    axios
      .post(
        `https://salty-meadow-43376.herokuapp.com/products/postproduct`,
        newProduct
      )
      .then((res) => {
        setCode('');
        setName('');
        setBrand('');
        setType('');
        setVenderName('');
        console.log(res);
        console.log(res.data);
        setLoading(false);
      });
  };

  if (!loading)
    return (
      <div className="container p-3 my-3 border">
        <form
          onSubmit={(e) => {
            mySubmitHandler(e);
          }}
          style={{ width: '80%', marginLeft: '5%', marginRight: '5%' }}
        >
          <div className="pt-4 pb-4">
            <h1>Add New Product</h1>
          </div>
          <div className="form-group row pt-2 pb-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Product Code :
            </label>
            <div className="col-sm-10">
              <input
                value={code}
                type="text"
                name="productCode"
                className="form-control"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row pt-2 pb-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Product Name :
            </label>
            <div className="col-sm-10">
              <input
                value={name}
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row pt-2 pb-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Product Brand :
            </label>
            <div className="col-sm-10">
              <input
                value={brand}
                type="text"
                name="brand"
                className="form-control"
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row pt-2 pb-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Product Type :
            </label>
            <div className="col-sm-10">
              <input
                value={type}
                type="text"
                name="type"
                className="form-control"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row pt-2 pb-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Vender Name :
            </label>
            <div className="col-sm-10">
              <input
                value={venderName}
                type="text"
                name="venderName"
                className="form-control"
                onChange={(e) => {
                  setVenderName(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: '2%' }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  else
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    );
};

export default AddProduct;
