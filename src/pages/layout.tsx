import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return <>
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/add">Add User</Link>
            </nav>
            <div style={{ padding: 10, background: 'yellow', height: 400, width: 600 }}>
                <Outlet/>
            </div>
        </div>
    </>
}