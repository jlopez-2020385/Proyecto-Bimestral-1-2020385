import { Router } from "express";
import {addProduct,ProductCategory,listProduct,updateProduct,inventarioProduct,ventasProduct,deleteProduct,updateByProduct} from "./product.controller.js";

const router = Router();

router.post("/addProduct", addProduct);

router.get("/Productproducto/:producto", ProductCategory);

router.get("/listProduct", listProduct);

router.put("/updateProduct/:id", updateProduct);

router.post("/inventarioProduct", inventarioProduct);

router.get("/ventasProduct", ventasProduct);

router.delete("/deleteProduct/:id", deleteProduct);

router.put("/updateByProduct/:id", updateByProduct);

export default router;
