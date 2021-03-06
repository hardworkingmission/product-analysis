import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, AreaChart, Area, BarChart, Bar, PieChart, Pie, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
    const [chartData,setChartData]=useState()
    useEffect(()=>{
        fetch('data.json')
            .then(res=>res.json())
            .then(data=>setChartData(data))

    },[])
    //data extection for pieChart
    let data1=chartData?.map(data=>({
        month:data.month,
        investment:data.investment
    }))
    let data2=chartData?.map(data=>({
        month:data.month,
        revenue:data.revenue
    }))
    // console.log(data1)
    // console.log(data2)
    return (
        <div className='lg:w-5/6 md:w-5/6 w-full mx-auto mt-3 py-2'>
            <div className="line-charts md:flex">
                <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full ">
                {/* MONTH WISE SELL line chart*/}
                    <h1 className='text-center text-pink-600 font-bold my-2'>MONTH WISE SELL</h1>
                    <ResponsiveContainer width="95%" height={400}>
                        <LineChart
                        width={400} height={250} data={chartData}
                        >
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                            <XAxis dataKey="month" />
                            
                            <Legend/>
                            <YAxis/>
                            <Tooltip/>
                        </LineChart>
                    </ResponsiveContainer>    
                </div>
                <div className="lg:w-6/12 md:w-full sm:w-full w-full flex flex-col items-center">
                {/* INVESTMENT Vs REVENUE  area chart*/}
                    <h1 className='text-center text-pink-600 font-bold my-2'>INVESTMENT Vs REVENUE</h1>
                    <ResponsiveContainer width="95%" height={400}>
                        <AreaChart width={500} height={250} data={chartData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>  
                </div>
            </div>
            <div className="bar-charts my-3 md:flex py-2">
                <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full">
                {/* INVESTMENT Vs REVENUE barchart */}
                    <h1 className='text-center text-pink-600 font-bold my-2'>INVESTMENT Vs REVENUE</h1>
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart width={530} height={250} data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full">
                    {/* INVESTMENT Vs REVENUE piechart */}
                    <h1 className='text-center text-pink-600 font-bold my-2'>INVESTMENT Vs REVENUE</h1>
                    <ResponsiveContainer width="95%" height={400}>
                        <PieChart width={530} height={250}>
                            <Pie data={data1} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            <Pie data={data2} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;