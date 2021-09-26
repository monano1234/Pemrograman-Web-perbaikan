import Image from "next/image"
import Header from '../components/header'
export default function Home() {
  return (
    <div>
      <Header/>
<main>
  <div className="container mt-5">
    <div className ="row featurette">
      <div className="col-lg-4 mt-5">
      <Image src ="/saya.jpeg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></Image>

      <h2>Pembuat</h2>
        <h4>Anom Purboyo</h4>
        <p><p><h5></h5></p></p>
      </div>
      <div className="col-lg-4 mt-5">
        <Image src ="/dewi.jpeg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></Image>

        <h2>Admin</h2>
        <h4>Dewi Kumaratih</h4>
        <p><h5></h5></p>
      </div>
    </div>


  

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Tentang Y_C_B <span className="text-muted"></span></h2>
        <p className="lead">Y_C_B dibentuk pada tanggal 26 September 2021. Berkat bantuan dari teman ~ teman dari kampus Y_C_B 
        dapat dibuat meski banyak sekali kendala dan lamanya dalam proses pembuatannya. Hasil jadinya memang terasa banyak kemiripan
        tetapi ada beberapa yang mengerjakan sendiri dan ada juga yang dibantu bersama teman, bisa dibilang faktor utama dari kendala dan
        hampir kemiripan tersebut disebabkan karena VSCode selalu suka error yang menyebabkan kebanyakan file original saya sendiri tidak 
        dapat dilanjutkan(ada 3 file origin yang gagal produksi). Jadi kepada yang terhomat Bapak/Ibu diampu matkul Pemrograman web saya 
        mohon untuk dimaklumi, saya harap untuk tugas perbaikan ini saya bisa mendapatkan nilai antara C ~ BC sudah cukup bagi saya.</p>
      </div>

      <div className="col-md-5" >

        <Image src="/laundri.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></Image>
     
      </div>
    </div>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">Alamat Toko Laundry Y_C_B <span className="text-muted"></span></h2>
        <p className="lead">Toko Laundry Y_C_B berada di kota Kabupaten banyuwangi, 
        beralamat di Jln. Ikan Paus Karangrejo Banyuwangi, 
        Jawa Timur. Kurang lebih selengkapnya silakan hubungi pihak yang terkait.</p>
      </div>
      <div className="col-md-5 order-md-1">
      <Image src="/alamat.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></Image>
      </div>
    </div>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Kritik Dan Saran<span className="text-muted"></span></h2>
        <p className="lead">Untuk masukan atau saran anda dapat menulisnya <a href="/komentar">Disini</a> dimohon untuk menggunakan bahasa yang baik dan sopan.</p>
      </div>
      <div className="col-md-5">
      <Image src="/kritik.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></Image>
      </div>
    </div>

    <hr className="featurette-divider"/>

 

 


  <footer className="container">
    <p className="float-end"><a href="#">Back to top</a></p>
    <p>&copy; Dibantu Oleh &middot; <a>Teman ~ Teman Di Kampus</a></p>
  </footer>
  </div>
</main>



    <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    </div>

  )
}





