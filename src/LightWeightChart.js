import { ColorType, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import "./LightWeightChart.css";

function LightWeightChart() {
    const chartContainerRef = useRef();

    useEffect(() => {
        // const lineData = [
        //     { time: '2018-12-22', value: 32.51 },
        //     { time: '2018-12-23', value: 31.11 },
        //     { time: '2018-12-24', value: 27.02 },
        //     { time: '2018-12-25', value: 27.32 },
        //     { time: '2018-12-26', value: 25.17 },
        //     { time: '2018-12-27', value: 28.89 },
        //     { time: '2018-12-28', value: 25.46 },
        //     { time: '2018-12-29', value: 23.92 },
        //     { time: '2018-12-30', value: 22.68 },
        //     { time: '2018-12-31', value: 22.67 },
        // ];

        const candleData = [
            { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, 
            { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, 
            { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, 
            { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, 
            { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, 
            { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, 
            { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, 
            { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, 
            { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, 
            { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }
        ]

        const chart = createChart(chartContainerRef.current);

        chart.applyOptions({
            // layout: {
            //     background: { type: ColorType.Solid, color: "white" }
            // },
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

        // const newSeries = chart.addAreaSeries({
        //     lineColor: "red",
        //     topColor: "#2962FF",
        //     bottomColor: "rgba(41, 98, 255, 0.28)"
        // });

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
        newSeries.setData(candleData);



        return () => [chart.remove()];

    }, []);



    


    return (

        <div ref={chartContainerRef}></div>
    )
}


export default LightWeightChart;