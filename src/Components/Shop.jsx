import {Link, Outlet} from 'react-router-dom'

function Shop() {
  return (
    <>
        <h1>SHOP</h1>
        <Link to="1">DETAIL LINK</Link>
        <Outlet />
    </>
  )
}

export default Shop