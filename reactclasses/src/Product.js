function Product({ id, name, aprice, dprice }) {
  return (
    <>
      <h2>Id:{id}</h2>
      <h2>Name:{name}</h2>
      <h2>Actual Price:{aprice}</h2>
      <h2>Offer Price:{dprice}</h2>
    </>
  );
}
export default Product;
