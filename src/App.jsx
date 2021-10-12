import './App.css';
import Layout from './utils/Layout'
import {Router} from '@reach/router'
import Home from './Pages/Home'
import Devices from './Pages/Devices'
import Prices from './Pages/Prices'

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Devices path="/devices" />
      <Prices path="/prices" />
    </Router>
  </Layout>
)

export default App;
