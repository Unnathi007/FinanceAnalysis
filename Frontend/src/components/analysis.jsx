import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";
import PieChart, {
  Legend,
  Export,
  Size,
  Series,
  Label,
  Font,
  Connector,
} from "devextreme-react/pie-chart";
import NavBar from "./navbar";
import Footer from "./footer";
import "../assets/styles/analysis.css";
import { useEffect } from "react";
import axios from "axios";

const Analysis = () => {
  const [user, setUser] = useState([]);
  const pointClickHandler = (e) => {
    toggleVisibility(e.target);
  };

  useEffect(() => {
    axios.get(`http://localhost:9090/`).then((res) => {
      const users = res.data;
      setUser(users);
      console.log("hiii",sessionStorage.getItem("username"));
    });
  }, []);

  const legendClickHandler = (e) => {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    toggleVisibility(item);
  };

  const toggleVisibility = (item) => {
    item.isVisible() ? item.hide() : item.show();
  };
  return (
    <React.Fragment>
      <NavBar />
      <div class="row">
        <div class="col-sm lineChart ">
          <Paper class="cardClass">
            <Chart data={user}>
              <ArgumentAxis />
              <ValueAxis />

              <LineSeries valueField="username" argumentField="email" />
            </Chart>
          </Paper>
        </div>
        <div class="col-sm pieChart ">
          <PieChart
            id="pie"
            dataSource={user}
            palette="Bright"
            title="categorical Analysis"
            onPointClick={pointClickHandler}
            onLegendClick={legendClickHandler}
          >
            <Series argumentField="username" valueField="email">
              <Label visible={true}>
                <Connector visible={true} width={1} />
              </Label>
            </Series>

            <Size width={500} />
            <Export enabled={true} />
          </PieChart>
        </div>
      </div>

      {/* <Paper class="cardClass">
    <Chart
      data={user}
    >
      <ArgumentAxis />
      <ValueAxis />

      <LineSeries valueField="username" argumentField="email" />
    </Chart>
  </Paper> */}
      {/* <div class="cardClass">
  <PieChart
        id="pie"
        dataSource={user}
        palette="Bright"
        title="Area of Countries"
        onPointClick={pointClickHandler}
        onLegendClick={legendClickHandler}
      >
        <Series
          argumentField="username"
          valueField="email"
        >
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={true} />
      </PieChart>
  </div> */}
      <Footer />
    </React.Fragment>
  );
};
export default Analysis;
