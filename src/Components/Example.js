import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
  {
    date: '10th may',
    uv: 4000,
    pv: 2400,
    perfomance: 100,
  },
  {
    date: '11th may',
    uv: 3000,
    pv: 1398,
     perfomance: 100,
  },
  {
    date: '12th may',
    uv: 2000,
    pv: 9800,
     perfomance: 800,
  },
  {
    date: '13th may',
    uv: 2780,
    pv: 3908,
     perfomance: 500,
  },
  {
    date: '14th may',
    uv: 1890,
    pv: 4800,
     perfomance: 100,
  },
  {
    date: '15th may',
    uv: 2390,
    pv: 3800,
     perfomance: 300,
  },
  {
    date: '16th may',
    uv: 3490,
    pv: 4300,
     perfomance: 200,
  },
];

const cardinal = curveCardinal.tension(0.2);

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-different-shapes-6lwnhy';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" > 
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
