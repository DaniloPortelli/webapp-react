import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import Loader from '../components/Loader' 
import { useContext } from 'react' 
import GlobalContext from "../contexts/globalContext"

export default function DefaultLayout () {

    const {isLoading} = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>

            { isLoading && <Loader/> } 
        </>
    )
}