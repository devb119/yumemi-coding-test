/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */
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
import { genRandomRGBColors, decreaseAlpha } from '../commons/utils';
import './style.css';

const randomColors = genRandomRGBColors();

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

  return (
    <div className="chart-container">
      {isIdle || isLoading || !pop || !chartData ? (
        <div className="center" style={{ height: '100vh' }}>
          <Spinner />
        </div>
      ) : (
        <>
          <div className="guide">Check the boxes to show data!</div>
          <p className="guide">都道府県</p>
          <form className="check-boxes">
            {prefData.map((pref, i) => (
              <div key={pref.prefCode}>
                <input
                  type="checkbox"
                  id={pref.prefName}
                  className="checkbox"
                  checked={selectedPrefs.includes(pref.prefName)}
                  style={{ accentColor: randomColors[i] }}
                  onChange={() => {
                    const key = pref.prefName;
                    const selectedPrefsCopy = [...selectedPrefs];
                    // Remove if already exists in the array (toggle)
                    if (selectedPrefsCopy.includes(key)) {
                      const index = selectedPrefsCopy.indexOf(key);
                      selectedPrefsCopy.splice(index, 1);
                      // Else push to array
                    } else selectedPrefsCopy.push(key);
                    setSelectedPrefs(selectedPrefsCopy);
                  }}
                />
                <label
                  htmlFor={pref.prefName}
                  style={{ color: randomColors[i], fontSize: 18 }}
                >
                  {pref.prefName}
                </label>
              </div>
            ))}
          </form>
          <ResponsiveContainer width="100%" height={600}>
            <LineChart
              data={chartData}
              margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                label={{ value: '年度', position: 'right' }}
                style={{ fontSize: 10 }}
              />
              <YAxis
                style={{ fontSize: 10 }}
                label={{ value: '人口数', position: 'top' }}
              />
              <Tooltip />
              <Legend margin={50} />
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
                  stroke={
                    selectedPrefs.includes(pref.prefName)
                      ? randomColors[i]
                      : decreaseAlpha(randomColors[i])
                  }
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
