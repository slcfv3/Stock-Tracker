import React from "react"
import { useDispatch, useSelector, select } from 'react-redux'
import { Line, LineChart, AreaChart, XAxis, YAxis, Label, Tooltip, Area, CartesianGrid, ReferenceLine } from "recharts";
import { Tabs } from 'antd';
import './components.css';
//import 'antd/dist/antd.css';
import { getPriceTicks } from '../util.js'

const Chart = () => {
    const chartData = useSelector(state => state.chart)
    const coldchartData = useSelector(state => state.coldChart)
    const currentPrice = useSelector(state => state.price)
    let YTicks1 = [];
    let YTicks2 = [];
    let YTicks3 = [];
    let YTicks4 = [];
    let YTicks5 = [];
    let YTicks6 = [];
    console.log('oneday in chartjs'+JSON.stringify(chartData))
    if (chartData !== undefined && chartData.length !== 0) {
        YTicks1 = getPriceTicks(chartData, 10)
    }
    if (coldchartData.fiveday !== undefined && coldchartData.fiveday.length !== 0) {
        YTicks2 = getPriceTicks(coldchartData.fiveday, 10)
    }
    if (chartData.onemonth !== undefined && chartData.onemonth.length !== 0) {
        YTicks3 = getPriceTicks(chartData.onemonth, 10)
    }
    if (chartData.oneyear !== undefined && chartData.oneyear.length !== 0) {
        YTicks4 = getPriceTicks(chartData.oneyear, 10)
    }
    if (chartData.fiveyear !== undefined && chartData.fiveyear.length !== 0) {
        YTicks5 = getPriceTicks(chartData.fiveyear, 10)
    }
    if (chartData.max !== undefined && chartData.max.length !== 0) {
        YTicks6 = getPriceTicks(chartData.max, 10)
    }
    const { TabPane } = Tabs;
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="1D" key="1">
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
                        // Following line avoids times like "9:17 AM" to be ticks
                        ticks={["09:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 PM", "12:30 PM", "1 PM", "1:30 PM", "2 PM", "2:30 PM", "3 PM", "3:30 PM", "4 PM", "4:30 PM", "5 PM", "5:30 PM"]}
                        interval={"preserveStart"}
                    >
                    </ XAxis>

                    <YAxis
                        dataKey="close"
                        domain={ [ Number(YTicks1[0]), Number(YTicks1[YTicks1.length - 1]) ] }
                        orientation="right"
                        stroke="transparent"
                        style={{ fill: "#beccdc", fontSize: "7px" }}
                        //tickCount={10}
                        ticks={YTicks1}
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
            </TabPane>
            <TabPane tab="5D" key="2">
            <AreaChart
                    width={600}
                    height={400}
                    data={coldchartData.fiveday}
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
                        // Following line avoids times like "9:17 AM" to be ticks
                        ticks={["09:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 PM", "12:30 PM", "1 PM", "1:30 PM", "2 PM", "2:30 PM", "3 PM", "3:30 PM", "4 PM", "4:30 PM", "5 PM", "5:30 PM"]}
                        interval={"preserveStart"}
                    >
                    </ XAxis>

                    <YAxis
                        dataKey="close"
                        domain={ [ Number(YTicks2[0]), Number(YTicks1[YTicks2.length - 1]) ] }
                        orientation="right"
                        stroke="transparent"
                        style={{ fill: "#beccdc", fontSize: "7px" }}
                        //tickCount={10}
                        ticks={YTicks2}
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
            </TabPane>
            <TabPane tab="1M" key="3">
            <AreaChart
                    width={600}
                    height={400}
                    data={coldchartData.onemonth}
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
                        // Following line avoids times like "9:17 AM" to be ticks
                        ticks={["09:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 PM", "12:30 PM", "1 PM", "1:30 PM", "2 PM", "2:30 PM", "3 PM", "3:30 PM", "4 PM", "4:30 PM", "5 PM", "5:30 PM"]}
                        interval={"preserveStart"}
                    >
                    </ XAxis>

                    <YAxis
                        dataKey="close"
                        domain={ [ Number(YTicks3[0]), Number(YTicks1[YTicks3.length - 1]) ] }
                        orientation="right"
                        stroke="transparent"
                        style={{ fill: "#beccdc", fontSize: "7px" }}
                        //tickCount={10}
                        ticks={YTicks3}
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
            </TabPane>
            <TabPane tab="1Y" key="4">
            <AreaChart
                    width={600}
                    height={400}
                    data={coldchartData.oneyear}
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
                        // Following line avoids times like "9:17 AM" to be ticks
                        ticks={["09:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 PM", "12:30 PM", "1 PM", "1:30 PM", "2 PM", "2:30 PM", "3 PM", "3:30 PM", "4 PM", "4:30 PM", "5 PM", "5:30 PM"]}
                        interval={"preserveStart"}
                    >
                    </ XAxis>

                    <YAxis
                        dataKey="close"
                        domain={ [ Number(YTicks4[0]), Number(YTicks1[YTicks4.length - 1]) ] }
                        orientation="right"
                        stroke="transparent"
                        style={{ fill: "#beccdc", fontSize: "7px" }}
                        //tickCount={10}
                        ticks={YTicks4}
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
            </TabPane>
            <TabPane tab="5Y" key="5">
            <AreaChart
                    width={600}
                    height={400}
                    data={coldchartData.fiveyear}
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
                        // Following line avoids times like "9:17 AM" to be ticks
                        ticks={["09:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 PM", "12:30 PM", "1 PM", "1:30 PM", "2 PM", "2:30 PM", "3 PM", "3:30 PM", "4 PM", "4:30 PM", "5 PM", "5:30 PM"]}
                        interval={"preserveStart"}
                    >
                    </ XAxis>

                    <YAxis
                        dataKey="close"
                        domain={ [ Number(YTicks5[0]), Number(YTicks1[YTicks5.length - 1]) ] }
                        orientation="right"
                        stroke="transparent"
                        style={{ fill: "#beccdc", fontSize: "7px" }}
                        //tickCount={10}
                        ticks={YTicks5}
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
            </TabPane>
            <TabPane tab="MAX" key="6">
            <AreaChart
                    width={600}
                    height={400}
                    data={coldchartData.max}
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
                        // Following line avoids times like "9:17 AM" to be ticks
                        ticks={["09:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 PM", "12:30 PM", "1 PM", "1:30 PM", "2 PM", "2:30 PM", "3 PM", "3:30 PM", "4 PM", "4:30 PM", "5 PM", "5:30 PM"]}
                        interval={"preserveStart"}
                    >
                    </ XAxis>

                    <YAxis
                        dataKey="close"
                        domain={ [ Number(YTicks6[0]), Number(YTicks1[YTicks6.length - 1]) ] }
                        orientation="right"
                        stroke="transparent"
                        style={{ fill: "#beccdc", fontSize: "7px" }}
                        //tickCount={10}
                        ticks={YTicks6}
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
            </TabPane>
        </Tabs>
        
    );
}

export default Chart;