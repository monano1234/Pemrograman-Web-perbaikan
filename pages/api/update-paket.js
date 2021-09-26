//@ts-check

import {db} from "../../lib/db"

const handler = async(req,res) => {
     const {paket, keterangan, harga} = req.body;
     try{
         if (!paket || !keterangan || !harga) {
             return res
                .status(400)
                .json({message : 'Harus Diisi Semua'})
         }
         const results = await db.query(
             `UPDATE hargapaket SET paket= ? , keterangan = ?   , harga = ?
             WHERE paket = ?`,
             [paket, keterangan, harga, paket]
         );

    return res.json(results);
     } catch (e){
         res.status(500).json({message : e.message})
     }
}
export default handler;