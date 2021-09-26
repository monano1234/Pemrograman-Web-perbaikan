// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  res.status(200).json(
    {dataPaket:[
                  {paket :'1. Fast Clean', keterangan :'Midsole, Upper, Tongue', harga:'Rp.15.000,-'},
                  {paket :'2. Paket Cuci Hemat', keterangan : 'Midsole, Upper, Tongue', harga :'Rp.35.000,-' },
                  {paket :'3. Semir Sepatu Hitam', keterangan : 'Bisa ditunggu', harga : 'Rp,10.000,-'}
                ]
              }
    )
};
