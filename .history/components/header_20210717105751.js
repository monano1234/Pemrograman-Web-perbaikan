import Image from "next/image"
export default function header(){
    return(
        <div>
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">JivinClean</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/dtharga">Daftar Harga Cuci</a>
                </li>
      
              </ul>
              <form className="d-flex">
                <Image src="/logo.jpeg"  width="50" height="50"></Image>
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">Login</a>
                </li>
                </ul>
              </form>
            </div>
            </div>
        </nav>
      </header>
      </div>
    )
}