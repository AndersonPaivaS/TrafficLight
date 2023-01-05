import './App.css'
import TrafficLight from './components/TrafficLight'
import { TrafficLightProvider } from './context/trafficLightContext'

function App() {

  return (
    <div className="App">
      <TrafficLightProvider>
        <TrafficLight />
      </TrafficLightProvider>
      
    </div>
  )
}

export default App
