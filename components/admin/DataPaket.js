//@ts-check
import useDataPaket from "../../lib/swr-fetcher"
import Link from 'next/link'
import { mutate } from "swr";
import Router from "next/router";

const DaftarPaket = () =>{

    const {data, error} = useDataPaket();

    if(error){
        return <div> Error Loading</div>
    }
    if(!data){
        return <div> Loading </div>
    }
    
    //console.log(data);

    async function hapusPaket(paket) {
        let res = await fetch(`/api/hapus-paket?paket=${paket}`, {method : 'DELETE'});
        let json = await res.json();
        if (!res.ok) throw Error(json.message);
        mutate('/api/hapus-paket');
        alert('Data berhasil dihapus');
        Router.push('/admin/datapaketadmin')
    }

    return (
        <div style = {{marginLeft : "50px"}}>
            <h3>Data Harga</h3>
                <table className = "table mt-5">
                    <thead>
                        <tr>
                            <th>Paket</th>
                            <th>Keterangan</th>
                            <th>Harga</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                { data.map((hrg,idx) => (
                    <tr key = {idx}>

                        <td>
                            {hrg.paket}
                        </td>

                        <td>
                            {hrg.keterangan}
                        </td>

                        <td>
                            {hrg.harga}
                        </td>
                        <td>
                            <Link href={`/admin/updatepaket?paket=${hrg.paket}&keterangan=${hrg.keterangan}&harga=${hrg.harga}`}>
                                <a>Edit</a>
                            </Link>

                            <button value = {hrg.paket}
                             onClick={(e)=>hapusPaket(e.target)}>Hapus</button>
                        </td>
                    </tr>
                ))
                }
                </tbody>
                </table>
                <p className="float-end"><a href="/layoutadmin">Kembali ke layoutadmin</a></p>
        </div>
        
    )
}
export default DaftarPaket