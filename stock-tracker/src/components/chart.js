import React from "react"
import { useDispatch, useSelector, select } from 'react-redux'
import { Line, LineChart, XAxis, YAxis, Label } from "recharts";

const Chart = () => {
    const chartData = useSelector(state => state.chart)
    console.log("chartData in Chart", chartData)
    return (
        <LineChart width={600}
            height={400}
            data={chartData}
            margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
        >

            <XAxis dataKey="label">
                <Label
                    value={"Date"}
                    position="bottom"
                    style={{ textAnchor: "middle" }}
                />
            </ XAxis>

            <YAxis dataKey="close" domain={["dataMin", "dataMax"]}>
                <Label
                    value={"Price"}
                    position="left"
                    angle={-90}
                    style={{ textAnchor: "middle" }}
                />
            </ YAxis>

            <Line dataKey="close"/>

        </LineChart>
    );
}

export default Chart;