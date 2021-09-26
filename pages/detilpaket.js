//@ts-check
import useDataPaket from "../lib/swr-fetcher";

export default function detilpaket() {

    const {data, error} = useDataPaket();

    if(error){return <div>Gagal oiii ......</div>}
    if(!data){return <div>Ntenono hulung .....</div>}
    const {dataPaket} = data
    console.log(data) 
    return (
        <div>
        <ul>
            {
                
                dataPaket.map((hrg,id) => (
                    <>
                    <li>{hrg.paket}</li>
                    <li>{hrg.keterangan}</li>
                    <li>{hrg.harga}</li>
                    </>
                ))
            }
            
        </ul>

        </div>
    )
}