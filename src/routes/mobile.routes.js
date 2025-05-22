import { Router } from "express";
import {getProducto, getProductoById, createProducto, updateProducto, deleteProducto} from "../controllers/mobile.controller.js";

const router= Router()

router.get('/telefonos',getProducto)
router.get('/telefonos/:id',getProductoById)

router.post('/telefonos',createProducto)
router.put('/telefonos/:id', updateProducto)
router.delete('/telefonos/:id',deleteProducto)

export default router;
