import { ColorType, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import lineData from "./lineData"
import "./LightWeightChart.css";

function LineChart() {
    const chartContainerRef = useRef();

    useEffect(() => {
        const chart = createChart(chartContainerRef.current);

        // candle stick
        chart.applyOptions({
            layout: {
                background: { type: ColorType.Solid, color: "white" },
            },
            width: chartContainerRef.current.clientWidth,
            height: 500,
        })


        const newSeries = chart.addAreaSeries();

        newSeries.applyOptions({
            lineColor: "#2962FF",
            topColor: "#2962FF",
            bottomColor: "rgba(41, 98, 255, 0.28)"
        });



        chart.priceScale("right").applyOptions({
            borderColor: '#71649C',
        });
        
        // Setting the border color for the horizontal axis
        chart.timeScale().applyOptions({
            borderColor: '#71649C',
        });

        // newSeries.setData(lineData);
        newSeries.setData(lineData);


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


export default LineChart;