/* eslint-disable object-curly-newline */
import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { getPrefectures } from '../commons/apis/services';
import { useAsync } from '../commons/hooks/useAsync';
import Spinner from './Spinner';

const Chart = () => {
  //   const [selecedPrefectures, setSelectedPrefectures] = React.useState([]);
  const { data, isIdle, isLoading, run } = useAsync();

  React.useEffect(() => {
    run(getPrefectures());
  }, [run]);

  console.log(data);

  const mockData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="chart-container">
      {isIdle || isLoading ? (
        <Spinner />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={mockData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;
