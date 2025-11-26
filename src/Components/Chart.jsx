import {
  ComposedChart,
  PieChart,
  Pie,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function SaleLineChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#D5E4D0" />
          <XAxis dataKey="name" stroke="#506349" />
          <YAxis stroke="#506349" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2E4F21"
            strokeWidth={3}
            dot={{ stroke: "#506349", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function SaleBarChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid stroke="#D5E4D0" />
          <XAxis dataKey="name" stroke="#506349" />
          <YAxis stroke="#506349" />
          <Tooltip />
          <Bar dataKey="value" fill="#506349" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function SaleAreaChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid stroke="#D5E4D0" />
          <XAxis dataKey="name" stroke="#506349" />
          <YAxis stroke="#506349" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#506349"
            fill="#D5E4D0"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function SalePieChart() {
  const pieData = [
    { name: "A", value: 400, fill: "#2E4F21" },
    { name: "B", value: 300, fill: "#506349" },
    { name: "C", value: 300, fill: "#7D9276" },
    { name: "D", value: 200, fill: "#A3C9A8" },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function SaleComboChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#D5E4D0" />
          <XAxis dataKey="name" stroke="#506349" />
          <YAxis stroke="#506349" />
          <Tooltip />

          {/* Bar */}
          <Bar dataKey="pv" fill="#7D9276" />

          {/* Line */}
          <Line type="monotone" dataKey="uv" stroke="#2E4F21" strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export {
  SaleLineChart,
  SaleBarChart,
  SaleAreaChart,
  SalePieChart,
  SaleComboChart,
};
