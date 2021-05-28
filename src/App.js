
import './App.css';
import Layout from '../src/Components/Layout/layout';

import '../src/Components/Map/Map.css'
import Map from './Components/Map/map';

function App() {

  return (
    <div className="App">
      <Layout>
          <div>

          <Map  />
          </div>
      </Layout>
    </div>
  );
}

export default App;
