import React from 'react';
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register( CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend);

export function Chart(props) {
    const data = {
        labels: props.data.map(item => item.created_date),
        datasets: [
          {
            label: 'Commentaire fait(s)',
      data: props.data.map(item => item.nbcomm),
      backgroundColor: [
        'rgb(53, 128, 255)'
      ],
      borderColor: [
        'rgb(53, 128, 255)'
      ],
      borderWidth: 1
          },
        ],
    };

  return <Bar data={data} />;
}
