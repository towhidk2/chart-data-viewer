import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import candleData from "./candleData"
import "./LightWeightChart.css";

function CandleChart() {
    const chartContainerRef = useRef();

    useEffect(() => {
        const chart = createChart(chartContainerRef.current);

        // candle stick
        chart.applyOptions({
            layout: {
                background: { color: '#222' },
                textColor: '#DDD',
            },
            grid: {
                vertLines: { color: '#444' },
                horzLines: { color: '#444' },
            },
            width: chartContainerRef.current.clientWidth,
            height: 500,
        })


        const newSeries = chart.addCandlestickSeries();

        newSeries.applyOptions({
            wickUpColor: 'rgb(54, 116, 217)',
            upColor: 'rgb(54, 116, 217)',
            wickDownColor: 'rgb(225, 50, 85)',
            downColor: 'rgb(225, 50, 85)',
            borderVisible: false,
        });

        chart.priceScale("right").applyOptions({
            borderColor: '#71649C',
        });
        
        // Setting the border color for the horizontal axis
        chart.timeScale().applyOptions({
            borderColor: '#71649C',
        });

        // newSeries.setData(lineData);
        newSeries.setData(candleData);


        // zoom 100% 
        chart.timeScale().fitContent();
        
        const handleResize = () => {
            chart.applyOptions({
                width: chartContainerRef.current.clientWidth,
            })
        }
    
        window.addEventListener("resize", handleResize);


        return () => {
            chart.remove();
            window.removeEventListener('resize', handleResize);
        }

    }, []);


    return <div ref={chartContainerRef}></div>;
}


export default CandleChart;