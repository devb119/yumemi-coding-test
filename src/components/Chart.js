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
import { getPrefectures, getPopulations } from '../commons/apis/services';
import { useAsync } from '../commons/hooks/useAsync';
import Spinner from './Spinner';
import { genRandomColors } from '../commons/utils';
import './style.css';

const randomColors = genRandomColors();

const Chart = () => {
  //   const [selecedPrefectures, setSelectedPrefectures] = React.useState([]);
  const { data: prefData, isIdle, isLoading, isSuccess, run } = useAsync();
  const [pop, setPop] = React.useState([]);
  const [selectedPrefs, setSelectedPrefs] = React.useState([]);

  React.useEffect(() => {
    run(getPrefectures());
  }, [run]);

  React.useEffect(() => {
    if (isSuccess) {
      const popArr = prefData.map((pref) => getPopulations(pref.prefCode));
      Promise.all(popArr).then((d) => {
        // Get total population data
        const data = d.map((p) => p.data[0].data);
        setPop(data);
      });
    }
  }, [isSuccess]);

  let chartData;

  if (pop.length && prefData) {
    chartData = pop[0].map((year, i) => {
      const oneYearData = {
        year: year.year,
      };

      // pop[j] is the population of the pref at year i
      prefData.forEach((pref, j) => {
        oneYearData[pref.prefName] = pop[j][i].value;
      });

      return oneYearData;
    });
  }

  const handleLegendClick = (e) => {
    const key = e.dataKey.trim();
    const selectedPrefsCopy = [...selectedPrefs];
    // Remove if already exists in the array (toggle)
    if (selectedPrefsCopy.includes(key)) {
      const index = selectedPrefsCopy.indexOf(key);
      selectedPrefsCopy.splice(index, 1);
      // Else push to array
    } else selectedPrefsCopy.push(key);
    setSelectedPrefs(selectedPrefsCopy);
  };

  return (
    <div className="chart-container">
      {isIdle || isLoading || !pop || !chartData ? (
        <Spinner />
      ) : (
        <>
          <div className="guide">Click the legend to toggle data lines!</div>
          <ResponsiveContainer width="100%" height={600}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend onClick={handleLegendClick} />
              {prefData.map((pref, i) => (
                <Line
                  strokeWidth={2}
                  key={pref.prefCode}
                  type="linear"
                  dataKey={
                    selectedPrefs.includes(pref.prefName)
                      ? pref.prefName
                      : `${pref.prefName} `
                  }
                  stroke={randomColors[i]}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default Chart;
