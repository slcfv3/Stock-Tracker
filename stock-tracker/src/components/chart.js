import React from "react"
import { useDispatch, useSelector, select } from 'react-redux'
import { Line, LineChart, AreaChart, XAxis, YAxis, Label, Tooltip, Area, CartesianGrid, ReferenceLine, ResponsiveContainer } from "recharts";
import { getPriceTicks } from '../util.js'

const Chart = () => {
    const chartData = useSelector(state => state.chart)
    const currentPrice = useSelector(state => state.price)
    let YTicks = [];

    if (chartData !== undefined && chartData.length !== 0) {
        YTicks = getPriceTicks(chartData, 10)
    }

    return (
        <ResponsiveContainer width="99%" aspect={2}>
            <AreaChart
                width={500}
                height={500}
                data={chartData}
                margin={{ top: 30, left: 30, bottom: 30 }}
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
                    // Following line avoids times like "9:17 AM" to be ticks
                    ticks={["09:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 PM", "12:30 PM", "1 PM", "1:30 PM", "2 PM", "2:30 PM", "3 PM", "3:30 PM", "4 PM", "4:30 PM", "5 PM", "5:30 PM"]}
                    interval={"preserveStart"}
                >
                </ XAxis>

                <YAxis
                    dataKey="close"
                    domain={[Number(YTicks[0]), Number(YTicks[YTicks.length - 1])]}
                    orientation="right"
                    stroke="transparent"
                    style={{ fill: "#beccdc", fontSize: "10px" }}
                    //tickCount={10}
                    ticks={YTicks}
                //interval={0}
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
        </ResponsiveContainer>
    );
}

export default Chart;