import React from "react"
import { useDispatch, useSelector, select } from 'react-redux'
import { Line, LineChart, AreaChart, XAxis, YAxis, Label, Tooltip, Area, CartesianGrid, ReferenceLine } from "recharts";

const Chart = () => {
    const chartData = useSelector(state => state.chart)
    const currentPrice = useSelector(state => state.price)
    //XAxisTicks =
    //YAXisTicks = 

    console.log("currentPrice in Chart", currentPrice)
    console.log("chartData in Chart", chartData)

    return (
        <AreaChart
            width={600}
            height={400}
            data={chartData}
            margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
        >

            <Tooltip cursor={false} />
            <ReferenceLine y={currentPrice} stroke="#e95656" strokeDasharray="3 3">
                <Label 
                value={currentPrice} 
                position="right"
                style={{ fill: "#e95656", fontSize: "10px" }} />
            </ReferenceLine>


            <CartesianGrid
                stroke="#344968"
                opacity="0.5"
            />
            <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
            </defs>

            <XAxis
                dataKey="label"
                stroke="transparent"
                style={{ fill: "#beccdc", fontSize: "10px" }}
                tickCount={10}
            >
            </ XAxis>

            <YAxis
                dataKey="close"
                domain={["dataMin", "dataMax"]}
                orientation="right"
                stroke="transparent"
                style={{ fill: "#beccdc", fontSize: "10px" }}
                tickCount={10}
            >
            </ YAxis>

            <Area
                isAnimationActive={false}
                dataKey="close"
                connectNulls={true}
                stroke="#7FB3FF"
                fillOpacity={1}
                fill="url(#lineGradient)"
            />
        </AreaChart>
    );
}

export default Chart;