import DefaultLayout from "../layouts/DefaultLayout"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Movies from "../pages/Movies"
import MoviePage from "../pages/MoviePage"
import GlobalContext from '../contexts/globalContext'; 
import { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css' 




function App() {

  const [ isLoading, setIsLoading ] = useState(false) 


  return (
    <>
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={MoviePage} />


          </Route>

        </Routes>

      </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
