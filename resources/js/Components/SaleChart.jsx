import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer, Legend
} from "recharts";

export default function SaleChart() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    axios.get("/api/sales")
      .then(res => setSalesData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{
      width: "100%",
      height: "350px",
      background: "#ffffff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ marginBottom: "10px" }}>Sales Chart</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

