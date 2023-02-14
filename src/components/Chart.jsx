import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart(props) {
  const data = {
    labels: props.data.map((item) => item.nom),
    datasets: [
      {
        label: "Publication des Exercices",
        data: props.data.map((item) => item.nbpub),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "red",
          "orange",
          "black",
          "rgba(54, 12, 235, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 0.2)",
          "red",
          "orange",
          "black",
          "rgba(54,12,235,1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return <Doughnut data={data} />;
}
