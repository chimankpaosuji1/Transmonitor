import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { chartData } from "../../../static/dataSource";
import "./index.scss";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartBox = () => {
  return (
    <div className="chartBox">
      <div className="chartBox_header">
        <span className="chartBox_date">Today: 5, Aug 2018</span>
        <div className="chartBox_section">
          <div className="chartBox_period">
            <p>1 Jan - 1 Jun</p>
            <MdKeyboardArrowDown />
          </div>
          <div className="chartBox_nav">
            <button>
              <MdKeyboardArrowLeft />
            </button>
            <button>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
      <ReactFC
        type="area2d"
        width="100%"
        height="265"
        dataFormat="json"
        dataSource={chartData}
        className="chartdata"
      />
    </div>
  );
};

export default ChartBox;
