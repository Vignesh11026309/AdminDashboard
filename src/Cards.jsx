
import image1 from "../src/assests/Pink wave.png";
import * as React from "react";
import NavBar from "./NavBar";
import "./Card.css";
import WaveChart from "./WaveChart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WaveChart2 from "./WaveChart2";
import WaveChart3 from "./WaveChart3";
import WaveChart4 from "./WaveChart4";
import LineChart from "./LineChart";
import LineChart2 from "./LineChart2";
import StackedBarChart from "./StackedBarChart";
import DoughnutChart from "./DoughnutChart";
import WorldMap from "./WorldMap";
import Calendar from "./Calendar";
import Footer from "./Footer";
export default function Cards() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const cardDetails = [
    { revenue: "$1000", value: "500", percentage: "50%", image: image1 },
    { revenue: "$1500", value: "700", percentage: "60%" },
    { revenue: "$800", value: "400", percentage: "45%" },
    { revenue: "$1200", value: "600", percentage: "55%" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div className="container">
        <h2 style={{ fontSize: "53.4px" }}>Dasboard</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="card">
            <div className="chartDetails">
              <text>Revenue</text>
              <h3>&#36;12,476.00</h3>
              <p style={{ color: "#4caf50" }}>
                <KeyboardArrowUpIcon sx={{ color: "#4caf50" }} />
                12%
              </p>
            </div>
            <WaveChart />
          </div>
          <div className="card">
            <div className="chartDetails">
              <text>Clicks</text>
              <h3>11,893</h3>
              <p style={{ color: "#4caf50" }}>
                <KeyboardArrowUpIcon sx={{ color: "#4caf50" }} />
                8%
              </p>
            </div>
            <WaveChart2 />
          </div>
          <div className="card">
            <div className="chartDetails">
              <text>Users</text>
              <h3>230,648</h3>
              <p style={{ color: "#F44336" }}>
                <KeyboardArrowDownIcon sx={{ color: "#F44336" }} />
                2%
              </p>
            </div>
            <WaveChart3 />
          </div>
          <div className="card">
            <div className="chartDetails">
              <text>Conversion Rate</text>
              <h3>0.24%</h3>
              <p style={{ color: "#F44336" }}>
                <KeyboardArrowDownIcon sx={{ color: "#F44336" }} />
                9%
              </p>
            </div>
            <WaveChart4 />
          </div>
        </div>
        <div className="card line-card">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className=" line-chart active">
              <div style={{ marginTop: "8px", textAlign: "center" }}>
                <text>Revenue</text>
                <h3>&#36;12,476.00</h3>
                <p>
                  <KeyboardArrowUpIcon />
                  12%
                </p>
              </div>
            </div>
            <div className=" line-chart">
              <div style={{ marginTop: "8px", textAlign: "center" }}>
                <text>Users</text>
                <h3>2024</h3>
                <p>
                  <KeyboardArrowUpIcon />
                  9%
                </p>
              </div>
            </div>
            <div className=" line-chart">
              <div style={{ marginTop: "8px", textAlign: "center" }}>
                <text>CTR</text>
                <h3>0.20%</h3>
                <p>
                  <KeyboardArrowUpIcon />
                  4%
                </p>
              </div>
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <LineChart />
          </div>
        </div>
        <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
          <div className="updateAndstack">
            <div className="card updates-Card">
              <h4>Updates</h4>
              <div className="updates">
                <div>
                  <span
                    className="updates-detials"
                    style={{ fontSize: "12px" }}
                  >
                    refund
                  </span>
                  <text style={{ fontSize: "12px" }}>
                    45$ refunded to Alan Chang
                  </text>
                </div>
                <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.54)" }}>
                  14 minutes ago
                </span>
              </div>
              <div className="updates">
                <div>
                  <span
                    style={{ fontSize: "12px" }}
                    className="updates-detials purchase"
                  >
                    purchase
                  </span>
                  <text style={{ fontSize: "12px" }}>45$ from Alan Chang</text>
                </div>
                <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.54)" }}>
                  14 minutes ago
                </span>
              </div>
              <div className="updates">
                <div>
                  <span
                    style={{ fontSize: "12px" }}
                    className="updates-detials"
                  >
                    refund
                  </span>
                  <text style={{ fontSize: "12px" }}>
                    45$ refunded to Alan Chang
                  </text>
                </div>
                <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.54)" }}>
                  14 minutes ago
                </span>
              </div>
            </div>

            <div className="card" style={{ padding: "20px" }}>
              <h3>Stacked Bar Chart</h3>
              <StackedBarChart />
            </div>
          </div>
          <div style={{ width: "50%", display: "grid", gap: "20px" }}>
            <div className="card year-chart">
              <div className="card-content">
                <p style={{ color: "#fff" }}>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="cardTabs">
                <div className="tabs tabactive">DAY</div>
                <div className="tabs">MONTH</div>
                <div className="tabs">YEAR</div>
              </div>
              <div style={{ padding: "20px" }}>
                <LineChart2 />
              </div>
            </div>

            <div className="card" style={{ padding: "20px" }}>
              <h3>Devices</h3>
              <DoughnutChart />
            </div>
          </div>
        </div>

        <div className="secondaryData">
          <h2 style={{ fontSize: "53.4px" }}>Secondary Data</h2>
          <div className="map-calendar">
            <div className="card worldMap">
              <WorldMap />
            </div>
            <div className="card calendar">
              <Calendar />
            </div>
          </div>
        </div>

      </div>
<Footer/>
    </div>
  );
}
