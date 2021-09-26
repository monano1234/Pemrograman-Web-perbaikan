//@ts-check

import { useState } from "react"

const createpaket = () =>{
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
            <div className="container">
                <form onSubmit={submitHandler}>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            placeholder = "PAKET"
                            className="form-control"
                            id="paket"
                            value= {paket}
                            onChange = {(e) => setPaket(e.target.value)}

                        />

                        <label htmlFor="paket"></label>
                    </div>

                    <div className="form-floating">
                        <input 
                            type="text" 
                            placeholder = "KETERANGAN"
                            className="form-control"
                            id="keterangan"
                            value= {keterangan}
                            onChange = {(e) => setKeterangan(e.target.value)}

                        />

                        <label htmlFor="keterangan"></label>
                    </div>

                    <div className="form-floating">
                        <input 
                            type="text" 
                            placeholder = "HARGA"
                            className="form-control"
                            id="harga"
                            value= {harga}
                            onChange = {(e) => setHarga(e.target.value)}

                        />

                        <label htmlFor="harga"></label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default createpaket