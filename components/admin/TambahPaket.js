//@ts-check

import { useState } from "react";
const TambahPaket = () => {

    const [paket, setPaket] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [harga, setHarga] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try{
            const res = await fetch("http://localhost:3000/api/create-paket",{
                method: 'POST',
                headers: {
                        'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    paket,
                    keterangan,
                    harga
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Data Sukses Ditambahkan");
        } catch (e) {
            throw Error(e.message)
        }
    }

    return(
        <div>
                        <div className="container mt-5">
                <form className = "w-50 mx-auto" onSubmit={submitHandler}>
                    <h1>Input Paket Baru</h1>
                    <div className="form-floating">
                    <h5>Paket</h5>
                        <input 
                            className="form-control mb-2"
                            id="paket"
                            type="text" 
                            placeholder = "PAKET"
                            value= {paket}
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
                            value= {keterangan}
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
                            value= {harga}
                            onChange = {(e) => setHarga(e.target.value)}

                        />

                        <label htmlFor="harga"></label>
                    </div>
                    <button className="btn btn-primary d-flex flex-row-reverse" type ="submit">Simpan</button>
                </form>
            </div>
            <p className="float-end"><a href="/layoutadmin">Kembali ke layoutadmin</a></p>
        </div>
    )
}

export default TambahPaket;