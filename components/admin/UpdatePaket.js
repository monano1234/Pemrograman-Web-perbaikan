//@ts-check

import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect, useState } from "react";

const UpdatePaket = () => {
    
    //Deklarasi State
    const [_paket, setPaket] = useState('');
    const [_keterangan, setKeterangan] = useState('');
    const [_harga, setHarga] = useState('');

    //Mengambil data yang dikirim melalui router
    const router = useRouter()
    const {paket, keterangan, harga} = router.query;

    useEffect(() => {
        if (typeof paket =='string'){
            setPaket(paket)
        }
    
        if (typeof keterangan =='string'){
            setKeterangan(keterangan)
        }
    
        if (typeof harga =='string'){
            setHarga(harga)
        }
    },[paket,keterangan,harga]);
    

    const submitHandler = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch("http://localhost:3000/api/update-paket",{
                method: 'PATCH',
                headers: {
                        'Content-Type' : 'application/json'
                },
                    body: JSON.stringify({
                    paket : _paket,
                    keterangan : _keterangan,
                    harga : _harga,
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Data Sukses Ditambahkan");
            Router.push('/admin/datapaketadmin')
        } catch (e) {
            throw Error(e.message)
        }

    }

    return (
        <div>
             <div className="container mt-5">
                <form className = "w-50 mx-auto" onSubmit={submitHandler}>
                    <h1>Edit Paket</h1>
                    <div className="form-floating">
                    <h5>Paket</h5>
                        <input 
                            className="form-control mb-2"
                            id="paket"
                            type="text" 
                            placeholder = "PAKET"
                            value= {_paket}
                            onChange = {(e) => setPaket(e.target.value)}

                        />

                        <label htmlFor="paket"></label>
                    </div>

                    <div className="form-floating">
                    <h5>Keterangan</h5>
                        <input 
                            type="text" 
                            placeholder = "KETERANGAN"
                            className="form-control mb-2"
                            id="keterangan"
                            value= {_keterangan}
                            onChange = {(e) => setKeterangan(e.target.value)}

                        />

                        <label htmlFor="keterangan"></label>
                    </div>

                    <div className="form-floating">
                        <h5>Harga</h5>
                        <input 
                            type="text" 
                            placeholder = "HARGA"
                            className="form-control mb-2"
                            id="harga"
                            value= {_harga}
                            onChange = {(e) => setHarga(e.target.value)}

                        />

                        <label htmlFor="harga"></label>
                    </div>
                    <button className="btn btn-primary d-flex flex-row-reverse" type ="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePaket