// import logo from './logo.svg';
import './App.css';
import CandleChart from "./CandleChart"
import LineChart from "./LineChart";
import TradingViewWidget from "./TradingViewWidget";


function App() {
    return (
        <div>
            {/* <h1 style={{color: "white", textAlign: "center"}}>LightWeight Chart</h1> */}
            {/* <CandleChart /> */}
            {/* <LineChart /> */}
            <TradingViewWidget />
        </div>
    );
}

export default App;
