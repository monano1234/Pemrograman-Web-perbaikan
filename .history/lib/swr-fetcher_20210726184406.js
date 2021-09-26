import useSWR from "swr";


async function fetcher(url) {
    const res = await fetch(url);
    return res.json();
    
}

export default function useDataPaket(){
    const url = 'http://localhost:3000/api/hello'
    const {data,error} = useSWR(url,fetcher)

    return {data, error}
}