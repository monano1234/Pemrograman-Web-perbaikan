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
         const results = await db.query(`
         INSERT INTO hargapaket (paket, keterangan, harga) VALUES (?,?,?)`,[paket, keterangan, harga]
         );
    await db.end;

    return res.json(results);
     } catch (e){
         res.status(500).json({message : e.message})
     }
}
export default handler;