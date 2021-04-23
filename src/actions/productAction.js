export const fetchProduct = () => {
  axios
    .get('https://salty-meadow-43376.herokuapp.com/products/all')
    .then((res) => {
      if (res.status === 200) {
        setProductList(res.data['data']);
      }
    });
};
