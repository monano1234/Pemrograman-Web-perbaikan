import useSWR from "swr";


async function fetcher(url) {
    const res = await fetcher(url);
    return res.json();
    
}

function paket() {
    const url = 'http://localhost:3000/api/hello'
    const {data,error} = useSWR(url,fetcher)
    if(error){
        return <div> Error Loading</div>
    }
    if(data){
        return <div> Loading </div>
    }
    const{dataPaket} = data;
    console.log(dataPaket);
    return (
        <div>

        </div>
    )
}

export default paket;