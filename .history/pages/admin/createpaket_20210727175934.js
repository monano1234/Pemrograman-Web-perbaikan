//@ts-check
import Header from "../components/header";
import TambahPaket  from "../components/admin/TambahPaket";
const createpaket = () =>{

    return(
        <div className = "container mt-5">
            <Header/>
            <TambahPaket/>
        </div>
    )
}

export default createpaket