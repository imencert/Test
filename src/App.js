import React, { useState } from "react";
import "./App.scss";
import data from "./data.json";
import { configData } from "./helpers/dataHelper";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  LabelList
} from "recharts";
import Button from "./components/Button";
import List from "./components/List";
import Table from "./components/Table";

const App = () => {
  const appData = configData(data) || null;
  const { lineChartData, companySectionData, tableData } = appData || null;
  const [companyData, setCompanyData] = useState(companySectionData),
    [domain, setDomain] = useState(["auto", "auto"]),
    [labelListDataKey, setLabelListDataKey] = useState("Rating"),
    [lineDataKey, setLineDataKey] = useState("PD"),
    [lineStroke, setLineStroke] = useState("#5cb9ac"),
    [yAxisTick, setYAxisTick] = useState(false);

  const onButtonClick = () => {
    setDomain(domain[0] === "auto" ? [0, 100] : ["auto", "auto"]);
    setLabelListDataKey(labelListDataKey === "Rating" ? "LGD" : "Rating");
    setLineDataKey(lineDataKey === "PD" ? "LGD" : "PD");
    setLineStroke(lineStroke === "#5cb9ac" ? "#009fe2" : "#5cb9ac");
    setYAxisTick(yAxisTick === false ? true : false);
  };

  const onMonthHover = e => {
    const selectedMonth = lineChartData.find(value => value.date === e.value);
    const updatedcompanyData = [...companyData];

    // this is to be optimised
    const PDIndex = updatedcompanyData.findIndex(element => element.id === 6);
    updatedcompanyData[PDIndex].content = selectedMonth.PD;

    const PDMedianProxyBpsIndex = updatedcompanyData.findIndex(
      element => element.id === 7
    );
    updatedcompanyData[PDMedianProxyBpsIndex].content =
      selectedMonth.PDMedianProxyBps;

    const RatingIndex = updatedcompanyData.findIndex(
      element => element.id === 8
    );
    updatedcompanyData[RatingIndex].content = selectedMonth.Rating;

    const PDContributionCountIndex = updatedcompanyData.findIndex(
      element => element.id === 9
    );
    updatedcompanyData[PDContributionCountIndex].content =
      selectedMonth.PDContributionCount;

    const SPIndex = updatedcompanyData.findIndex(element => element.id === 10);
    updatedcompanyData[SPIndex].content = selectedMonth.SP;

    setCompanyData(updatedcompanyData);
  };

  const renderLineChart = (
    <div>
      <LineChart width={800} height={400} data={lineChartData}>
        <Line
          type="natural"
          dataKey={lineDataKey}
          stroke={lineStroke}
          strokeWidth={2}
          animationDuration={500}
        >
          <LabelList dataKey={labelListDataKey} position="top" />
        </Line>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" onMouseOver={e => onMonthHover(e)} />
        <YAxis domain={domain} tick={yAxisTick} />
        <Legend />
      </LineChart>
    </div>
  );

  return (
    <div className="App">
      <h2 className="App__Title">Credit Risk</h2>
      <div>
        <section>
          {renderLineChart}
          <div className="App__Button">
            <Button
              label={`Switch to ${lineDataKey === "PD" ? "LGD" : "PD"}`}
              variant={lineDataKey === "PD" ? "Button--lgd-color" : null}
              click={onButtonClick}
            />
          </div>
        </section>
        <section>
          <List data={companyData} />
        </section>
      </div>
      <section>
        <Table data={tableData} />
      </section>
    </div>
  );
};

export default App;
