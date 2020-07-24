
import React, {useState, useEffect} from "react"
import './components.css';
import { getPriceTicks, getTimeTicks } from '../util.js'
import { useDispatch, useSelector, select } from 'react-redux'
import { Line, LineChart, AreaChart, XAxis, YAxis, Label, Tooltip, Area, CartesianGrid, ReferenceLine, ResponsiveContainer } from "recharts";
import { Row, Col } from '../styled-components/wrappers.js'
import { ChartButton } from '../styled-components/buttons.js'



const Chart = () => {
    const chartData = useSelector(state => state.chart)
    const coldchartData = useSelector(state => state.coldChart)
    const currentPrice = useSelector(state => state.price)
    const [active,setActive] = useState(0);
    const [currentChart,setCurrentChart] = useState(chartData);
    const [lineDisplay,setLineDisplay] = useState('block')
    const [XTicks,setXTicks] = useState();
    const [YTicks,setYTicks] = useState([0]);
   
    useEffect(()=>{
        if(active===0){
            setCurrentChart(chartData)
            setYTicks(getPriceTicks(chartData, 10))
            setXTicks(getTimeTicks(chartData, 0))
            setLineDisplay('block')
            
        }
        if(active===1){
            setCurrentChart(coldchartData.fiveday)
            setYTicks(getPriceTicks(coldchartData.fiveday, 10))
            setXTicks(getTimeTicks(coldchartData.fiveday, 1))
            setLineDisplay('none')
            
        }
        if(active===2){
            setCurrentChart(coldchartData.onemonth)
            setYTicks(getPriceTicks(coldchartData.onemonth, 10))
            setXTicks(getTimeTicks(coldchartData.onemonth, 2))
            setLineDisplay('none')
            
        }
        if(active===3){
            setCurrentChart(coldchartData.oneyear)
            setYTicks(getPriceTicks(coldchartData.oneyear, 10))
            setXTicks(getTimeTicks(coldchartData.oneyear, 3))
            setLineDisplay('none')
            
        }
        if(active===4){
            setCurrentChart(coldchartData.fiveyear)
            setYTicks(getPriceTicks(coldchartData.fiveyear, 10))
            setXTicks(getTimeTicks(coldchartData.fiveyear, 4))
            setLineDisplay('none')
            
        }
        if(active===5){
            setCurrentChart(coldchartData.max)
            setYTicks(getPriceTicks(coldchartData.max, 10))
            setXTicks(getTimeTicks(coldchartData.max, 5))
            setLineDisplay('none')
           
        }
    },[active, coldchartData])

    return (

        <div>
          <Row columnGap='0px' justifyContent='flex-end'>
            <ChartButton onClick={()=>setActive(0)} isActive={active===0}> 1D </ChartButton>
            <ChartButton onClick={()=>setActive(1)} isActive={active===1} disabled={coldchartData.oneday===undefined}> 5D </ChartButton>
            <ChartButton onClick={()=>setActive(2)} isActive={active===2} disabled={coldchartData.oneday===undefined}> 1M </ChartButton>
            <ChartButton onClick={()=>setActive(3)} isActive={active===3} disabled={coldchartData.oneday===undefined}> 1Y </ChartButton>
            <ChartButton onClick={()=>setActive(4)} isActive={active===4} disabled={coldchartData.oneday===undefined}> 5Y </ChartButton>
            <ChartButton onClick={()=>setActive(5)} isActive={active===5} disabled={coldchartData.oneday===undefined}> MAX </ChartButton>
          </ Row> 
          
          <ResponsiveContainer width="99%" aspect={2}>
            <AreaChart
                width={500}
                height={500}
                data={currentChart}
                margin={{ top: 30, left: 30, bottom: 30 }}
            >
 
                    <Tooltip cursor={false} />
                    <ReferenceLine y={currentPrice} stroke="#e95656" strokeDasharray="3 3" display={lineDisplay}>
                        <Label
                            value={'     ' + currentPrice}
                            position="right"
                            style={{ fill: "#e95656", fontSize: "13px"  }} 
                            display={lineDisplay}/>
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
                        style={{ fill: "#beccdc", fontSize: "13px" }}
                        // Following line avoids times like "9:17 AM" to be ticks
                        ticks={XTicks}
                        interval={"preserveStart"}
                    >
                    </ XAxis>
 
                    <YAxis
                        dataKey="close"
                        domain={ [ Number(YTicks[0]), Number(YTicks[YTicks.length - 1]) ] }
                        orientation="right"
                        stroke="transparent"
                        style={{ fill: "#beccdc", fontSize: "13px" }}
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
        </div>
        
        

    );
}

export default Chart;