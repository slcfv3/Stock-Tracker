/*
import React, { useState, useEffect } from "react"
import './components.css';
import { getPriceTicks, getTimeTicks } from '../util.js'
import { useSelector } from 'react-redux'
import { AreaChart, XAxis, YAxis, Label, Tooltip, Area, CartesianGrid, ReferenceLine, ResponsiveContainer } from "recharts";
import { Row } from '../styled-components/wrappers.js'
import { ChartButton } from '../styled-components/buttons.js'
import Chart from './chart'

const ResponsiveChart = () => {
    const chartData = useSelector(state => state.chart)
    const coldchartData = useSelector(state => state.coldChart)
    const currentPrice = useSelector(state => state.price)
    const [active, setActive] = useState('1D');
    const [currentChart, setCurrentChart] = useState(chartData);
    const [lineDisplay, setLineDisplay] = useState('block')
    const [XTicks, setXTicks] = useState();
    const [YTicks, setYTicks] = useState([0]);

    useEffect(() => {
        if (active === '1D') {
            setCurrentChart(chartData)
            setYTicks(getPriceTicks(chartData, 10))
            setXTicks(getTimeTicks(chartData, '1D'))
            if (chartData[0] === undefined) {
                setLineDisplay('none')
            } else {
                setLineDisplay('block')
            }
        }
        if (active === '5D') {
            setCurrentChart(coldchartData.fiveday)
            setYTicks(getPriceTicks(coldchartData.fiveday, 10))
            setXTicks(getTimeTicks(coldchartData.fiveday, '5D'))
            setLineDisplay('none')

        }
        if (active === '1M') {
            setCurrentChart(coldchartData.onemonth)
            setYTicks(getPriceTicks(coldchartData.onemonth, 10))
            setXTicks(getTimeTicks(coldchartData.onemonth, '1M'))
            setLineDisplay('none')

        }
        if (active === '1Y') {
            setCurrentChart(coldchartData.oneyear)
            setYTicks(getPriceTicks(coldchartData.oneyear, 10))
            setXTicks(getTimeTicks(coldchartData.oneyear, '1Y'))
            setLineDisplay('none')

        }
        if (active === '5Y') {
            setCurrentChart(coldchartData.fiveyear)
            setYTicks(getPriceTicks(coldchartData.fiveyear, 10))
            setXTicks(getTimeTicks(coldchartData.fiveyear, '5Y'))
            setLineDisplay('none')

        }
        if (active === 'MAX') {
            setCurrentChart(coldchartData.max)
            setYTicks(getPriceTicks(coldchartData.max, 10))
            setXTicks(getTimeTicks(coldchartData.max, 'MAX'))
            setLineDisplay('none')
        }
    }, [active, coldchartData])

    return (
        <div>

            <Row columnGap='0px' justifyContent='flex-end'>
                <ChartButton onClick={() => setActive('1D')} isActive={active === '1D'}> 1D </ChartButton>
                <ChartButton onClick={() => setActive('5D')} isActive={active === '5D'} disabled={coldchartData.oneday === undefined}> 5D </ChartButton>
                <ChartButton onClick={() => setActive('1M')} isActive={active === '1M'} disabled={coldchartData.oneday === undefined}> 1M </ChartButton>
                <ChartButton onClick={() => setActive('1Y')} isActive={active === '1Y'} disabled={coldchartData.oneday === undefined}> 1Y </ChartButton>
                <ChartButton onClick={() => setActive('5Y')} isActive={active === '5Y'} disabled={coldchartData.oneday === undefined}> 5Y </ChartButton>
                <ChartButton onClick={() => setActive('MAX')} isActive={active === 'MAX'} disabled={coldchartData.oneday === undefined}> MAX </ChartButton>
            </ Row>

            <ResponsiveContainer width="99%" aspect={2}>
                <Chart props={}/>
            </ResponsiveContainer>
        </div>
    )
}
*/