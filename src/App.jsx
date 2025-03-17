import DefaultLayout from "../layouts/DefaultLayout"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Movies from "../pages/Movies"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={Movies} />


          </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
