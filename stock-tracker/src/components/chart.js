import React from "react"
import { useDispatch, useSelector, select } from 'react-redux'
import { Line, LineChart, XAxis, YAxis } from "recharts";

const Chart = (data) => {

    return (
        <LineChart width={600}
            height={400}
            data={data}
            margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
        >

            <XAxis type="number" dataKey="minute" domain={["dataMin", "dataMax"]}>
                <Label
                    value={"Date"}
                    position="bottom"
                    style={{ textAnchor: "middle" }}
                />
            </ XAxis>

            <YAxis>
                <Label
                    value={"Price"}
                    position="left"
                    angle={-90}
                    style={{ textAnchor: "middle" }}
                />
            </ YAxis>

            <Line
                dataKey="price"
            />

        </LineChart>
    );
}

export default Chart;