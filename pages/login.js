import Link from 'next/link'

export default function Login() {
  return (
    <center>
    <div className="footer" >
    <main className="form-signin">
  <form>
    <img className="mb-4" src="/logo.jpeg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <Link href ="/#"className="mt-5 mb-3 text-muted">&copy; Back to home</Link>
  </form>

</main>

<style type="text/css">
  {
    "  .bd-placeholder-img {font-size: 1.125rem;text-anchor: middle;-webkit-user-select: none; -moz-user-select: none; user-select: none;}"
    }
{
  "@media (min-width: 768px) {.bd-placeholder-img-lg {font-size: 3.5rem;}}"
}
  {
    "body {height: 100%;}"
  }
  {
    "body { display: flex; align-items: center; padding-top: 40px; padding-bottom: 40px; background-color: #f5f5f5;}"
  }
  {
    ".form-signin {width: 100%; max-width: 330px; padding: 15px; margin: auto;}"
  }
  {
    ".form-signin .checkbox {font-weight: 400;}"
  }
  {
    ".form-signin .form-floating:focus-within {z-index: 2;"
  }
  {
    ".form-signin input [type = 'email'] {  margin-bottom: -1px; border-bottom-right-radius: 0; border-bottom-left-radius: 0;}"
  }
  {
    ".form-signin input[type='pasword'] {margin-bottom: 10px; border-top-left-radius: 0; border-top-right-radius: 0;"
  }
</style>

</div>
</center>
  )
}
