//@ts-check
import useDataPaket from "../lib/swr-fetcher";

export default function detilpaket() {

    const {data, error} = useDataPaket();

    if(error){return <div>Gagal oiii ......</div>}
    if(!data){return <div>Ntenono hulung .....</div>}

    

    return (
        <div>
        

        </div>
    )
}