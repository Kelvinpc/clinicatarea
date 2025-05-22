import {pool} from  "../db.js"

export const getProducto = async(req, res) => {


    try{
        const [rows] = await pool.query("SELECT * FROM telefonos")
        res.json(rows)
    }catch{
        return res.status(500).json({
            message:"No existe el producto"
        })
    }
}

export const getProductoById = async(req,res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM telefonos WHERE id = ?", [req.params.id])
        if(rows.lengt <= 0)return res.status(400).json({
            message: 'No existe producto con esta ID'
        })

        res.json(rows)

    }catch(error){
        return res.status(500).json({
            message:"No exixste el producto"
        })
    }
}

export const createProducto = async (req, res) => {
    try{
        const {nomproducto, modeloproducto, descripcionproducto, marca, memoriagb, ramgb, precioproducto, cantidadproducto, imageproducto, disponibilidadproducto} = req.body

        const [rows] = await pool.query("INSERT INTO telefonos (nomproducto, modeloproducto, descripcionproducto, marca, memoriagb, ramgb, precioproducto, cantidadproducto, imageproducto, disponibilidadproducto)VALUES(?,?,?,?,?,?,?,?,?,?)",
            [nomproducto, modeloproducto, descripcionproducto, marca, memoriagb, ramgb, precioproducto, cantidadproducto, imageproducto, disponibilidadproducto])
            res.send({
                id:rows.idsertId,
                nomproducto,
                modeloproducto,
                descripcionproducto,
                marca,
                memoriagb,
                ramgb,
                precioproducto,
                cantidadproducto,
                imageproducto,
                disponibilidadproducto
            })
    }catch(error){
        return res.status(500).json({
            message:'No se pudo crear el producto'
        })
    }
}

export const updateProducto = async(req, res)=> {

    try{
        const id = req.params.id
        const {nomproducto, modeloproducto, descripcionproducto, marca, memoriagb, ramgb, precioproducto, cantidadproducto, imageproducto, disponibilidadproducto} = req.body

        const querySQL = `
        UPDATE telefonos SET 
        nomproducto = ?,
        modeloproducto = ?,
        descripcionproducto = ?,
        marca = ?,
        memoriagb = ?,
        ramgb = ?,
        precioproducto = ?,
        cantidadproducto = ?,
        imageproducto = ?,
        disponibilidadproducto = ?
        WHERE id = ?
        `

        const [result] = await pool.query(querySQL, [nomproducto, modeloproducto, descripcionproducto, marca, memoriagb, ramgb, precioproducto, cantidadproducto, imageproducto, disponibilidadproducto])

        if(result.affectedRows ==0){
            return res.status(404).json({
                message:'El ID no existe'
            })
        }
    }catch(error){
        return res.status(500).json({
            message:'No se pudo actualizar el producto'
        })
    }

}



export const deleteProducto = async(req,res) => {

    try{
        const [result] = await pool.query("DELETE FROM peliculas WHERE id=?", [req.params.id])
        if(result.affectedRows <= 0)
            return res.status(404).json({
        message:'No existe registro con este ID'
    })

    res.sendStatus(204)

    }catch(error){
        return res.status(500).json({
            message:'No se pudo eliminar'
        })
    }
}



// nomproducto
// modeloproducto
// descripcionproducto
// marca
// memoriagb
// ramgb
// precioproducto
// cantidadproducto
// imageproducto
// disponibilidadproducto
