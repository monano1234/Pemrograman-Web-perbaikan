//@ts-check
import Header from "../components/header"
export default function LayoutAdmin(){
    return (
        <div>
        <div className="container mt-5" style = {{marginLeft : "50px"}}>
            <Header/> 
            <a href="/admin/datapaketadmin" className="btn btn-success btn-lg mt-5">Update Data Paket</a><br></br>
            <a href="/admin/createpaket" className="btn btn-success btn-lg mt-5">Tambah Data Paket</a>
            
        </div>
        </div>
    )
}