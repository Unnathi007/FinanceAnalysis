import React, { useState } from "react";
import { Chart, Series } from 'devextreme-react/chart';
import PieChart, {
  Legend,
  Export,
  Size,
  Label,
  Font,
  Connector,
  
} from "devextreme-react/pie-chart";
import NavBar from "./navbar";
import Footer from "./footer";
import "../assets/styles/analysis.css";
import { useEffect } from "react";
import axios from "axios";

const Analysis = (props) => {
  const [user, setUser] = useState([]);
  const pointClickHandler = (e) => {
    toggleVisibility(e.target);
  };

  const getData=async()=>{
    const user_id = sessionStorage.getItem("username")
    await axios.get(`http://localhost:9090/home?user_id=${user_id}`).then((res) => {
      const response = res.data;
      const users = response.filter((a)=>{
        return a.Category === "Expense";
      })
      // console.log(output,"op")
      setUser(users);
      console.log(user);
      console.log("hiii",sessionStorage.getItem("username"));
    });
  }
  // getData()


  useEffect(() => {
    getData();
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
      {console.log(props.user)}
      <div class="row">
        <div class="col-sm lineChart card">
        <Chart id="chart" dataSource={user}>
        <Series
          valueField="Amount"
          argumentField="TxnType"
          name="expense categories"
          type="bar"
          color="#ffaa66" />
      </Chart>
            {/* <Chart data={user} height={400} width={400} title="Category vs expenses">
            <Margin
                    top={20}
                    bottom={20}
                    left={100}
                    right={0}
                />
              <ArgumentAxis />
              <ValueAxis />

              <LineSeries valueField="email" argumentField="username" />
            </Chart> */}
          
        </div>
        <div class="col-sm pieChart card">
          <PieChart
            id="pie"
            dataSource={user}
            palette="Bright"
            title="categorical Analysis"
            onPointClick={pointClickHandler}
            onLegendClick={legendClickHandler}
          >
            <Series argumentField="TxnType" valueField="Amount">
              <Label visible={true}>
                <Connector visible={true} width={1} />
              </Label>
            </Series>

            <Size width={500} />
            <Export enabled={true} />
          </PieChart>
        </div>
      </div>

      
      <Footer />
    </React.Fragment>
  );
};
export default Analysis;
