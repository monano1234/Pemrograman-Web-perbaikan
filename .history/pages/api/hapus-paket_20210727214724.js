//@ts-check

import {db} from "../../lib/db"

const handler = async(req,res) => {
     const {paket} = req.body;
     try{
         if (!paket) {
             return res
                .status(400)
                .json({message : '`paket` tidak ada'})
         }
         const results = await db.query(`
         DELETE FROM blogpertama 
         WHERE paket =?`
         ,
         paket
         );


    res.json(results);
     } catch (e){
         res.status(500).json({message : e.message})
     }
}
export default handler;