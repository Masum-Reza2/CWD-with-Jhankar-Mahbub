import './App.css'
import AxiosChart from './components/AXIOS/AxiosChart'
import CustomNavbar from './components/DaisyNavbar/CustomNavbar'
import NavBar from './components/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/RECHART/LineChart'

function App() {

  return (
    <>
      <NavBar />
      <CustomNavbar />
      <PriceOptions />

      {/* Charts and its usage > important */}
      <LineChart />
      <AxiosChart />
    </>
  )
}

export default App