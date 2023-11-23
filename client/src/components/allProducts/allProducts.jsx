import style from "./allProducts.module.css";
import { Link } from "react-router-dom";

function AllProducts() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Link Link to={"/tienda"} className={style.link}>
          <h2 className={style.title}>Todos nuestros Productos</h2>
        </Link>
      </div>
    </div>
  );
}

export default AllProducts;
