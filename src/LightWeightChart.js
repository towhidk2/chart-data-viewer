import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import chartData from "./Data"
import "./LightWeightChart.css";

function LightWeightChart() {
    const chartContainerRef = useRef();

    useEffect(() => {
        const chart = createChart(chartContainerRef.current);
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

         // zoom 100% 
        chart.timeScale().fitContent();
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
        newSeries.setData(chartData);

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


export default LightWeightChart;