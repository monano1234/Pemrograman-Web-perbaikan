//@ts-check
import Image from "next/image"
import Header from '../components/header'

export default function LayoutAdmin (){
    <div className ="row featurette">
    <div className="col-lg-4 mt-5">
    <Image src ="/vino.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140"  role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></Image>

      <h2>Admin 1</h2>
      <h4>Yusuf Alvino Yusrifan</h4>
      <p><a className="btn btn-secondary" href="https://wa.me/6282266854471">Hubungi Via WhatsApp &raquo;</a></p>
    </div>
    <div className="col-lg-4 mt-5">
      <Image src ="/ujik.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></Image>

      <h2>Admin 2</h2>
      <h4>Ujik</h4>
      <p><a className="btn btn-secondary" href="https://wa.me/6285954476887">Hubungi Via WhatsApp &raquo;</a></p>
    </div>
    <div className="col-lg-4 mt-5">
    <Image src ="/vicky.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140"  role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></Image>

      <h2>Admin 3</h2>
      <h4>Vicky</h4>
      <p><a className="btn btn-secondary" href="https://wa.me/6285707277917">Hubungi Via WhatsApp &raquo;</a></p>
    </div>
  </div>
}