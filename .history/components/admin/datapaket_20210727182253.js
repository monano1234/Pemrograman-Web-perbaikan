//@ts-check
import useDataPaket from "../../lib/swr-fetcher"

export default function DaftarPaket(){

    const {data, error} = useDataPaket();

    if(error){
        return <div> Error Loading</div>
    }
    if(!data){
        return <div> Loading </div>
    }
    
    console.log(data);

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
                            <link href='/admin/UpdatePaket?'></link>
                        </td>
                    </tr>
                ))
                }
                </tbody>
                </table>
                
        </div>
        
    )
}