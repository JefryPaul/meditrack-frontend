import Header from "./Components/Header"
import Admin from "./Pages/Admin"
import History from "./Pages/History"
import LandingPage from "./Pages/LandingPage"
import Preview from "./Pages/Preview"
import SelectMedicines from "./Pages/SelectMedicines"
import UserView from "./Pages/Userview" 
import { Routes, Route } from 'react-router-dom'; 
import Footer from "./Components/Footer"


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='admin' element={<Admin />} />
        <Route path='view' element={<UserView />} />
        <Route path='select'element={<SelectMedicines />} />
        <Route path='preview' element={<Preview />} /> 
        <Route path='history' element={<History />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
