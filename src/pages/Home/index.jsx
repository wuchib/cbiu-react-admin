import Test from "../Board";
import { Outlet } from 'react-router-dom'
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
            <hr/>
            <Outlet>
                <Test />
            </Outlet>
        </div>
    )
}

export default Home;