import {
  Table,
  Thead,
  Tbody,
  Card,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from '@chakra-ui/react';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Pays() {
  const [chartData, setChartData] = useState({});
  const [payments, setPayments] = useState([]);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3001/pays');
      setPayments(result.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const generateChartData = () => {
      if (typeof payments === 'object' && payments.length > 0) {
        const data = {
          labels: [],
          datasets: [
            {
              label: 'Monto total de pagos Citas Meditech',
              data: [],
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
            {
              label: 'Porcentaje por fecha',
              data: [],
              backgroundColor: 'rgba(255,99,132,0.4)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
            },
          ],
        };

        const groupedData = payments.reduce((acc, curr) => {
          const date = curr.createTime.split('T')[0];

          if (acc[date]) {
            acc[date].count += 1;
            acc[date].total += curr.amount;
          } else {
            acc[date] = {
              count: 1,
              total: curr.amount,
            };
          }

          return acc;
        }, {});

        const sortedData = Object.fromEntries(
          Object.entries(groupedData).sort((a, b) => (a[0] > b[0] ? 1 : -1))
        );
        const sortedLabels = Object.keys(sortedData).sort(function (a, b) {
          return new Date(a) - new Date(b);
        });
        const totalAmounts = Object.values(sortedData).map((d) => d.total);
        const totalCounts = Object.values(sortedData).map((d) => d.count);
        const totalAmount = totalAmounts.reduce((a, b) => a + b, 0);

        data.labels = sortedLabels.map((date) => {
          const dateObj = new Date(date);
          return dateObj.toISOString().substring(0, 10);
        });
        data.datasets[0].data = totalAmounts;
        data.datasets[1].data = totalCounts.map(
          (count) => (count / payments.length) * 100
        );

        setChartData(data);
      }
    };

    generateChartData();
  }, [payments]);

  useEffect(() => {
    const canvas = document.getElementById('myChart');

    if (canvas) {
      const ctx = canvas.getContext('2d');
      const data1 = payments.map((payment) => ({
        y: payment.amount,
        x: payment.createTime,
      }));
      const config = {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'Pagos Citas Meditech',
              data: data1,
              fill: false,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.4)',
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  displayFormats: {
                    day: 'MMM D',
                  },
                  sort: true, // Ordena las fechas en orden ascendente
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Fecha',
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Monto',
                },
              },
            ],
            datalabels: {
              formatter: (value, context) => {
                if (
                  context.datasetIndex === 0 &&
                  context.dataIndex === context.dataset.data.length - 1
                ) {
                  return `Total: ${totalAmount}`;
                }
                return null;
              },
              align: 'end',
              anchor: 'end',
              offset: 10,
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
        },
      };
      let myChart = new Chart(ctx, config);

      return () => {
        myChart.destroy();
      };
    }
  }, [payments, chartData]);

  const handleClick = () => {
    setShowChart(!showChart);
  };

  return (
    <Card p={5} mx="auto" mt={{ md: '12vh' }}>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ID Pago</Th>
              <Th>Fecha</Th>
              <Th>Moneda</Th>
              <Th>Monto</Th>
              <Th>Estado</Th>
              <Th>ID Cita</Th>
              <Th>Correo Electrónico</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Dirección Paciente</Th>
            </Tr>
          </Thead>
          <Tbody>
            {payments && payments.length > 0 ? (
              payments.map((payment) => (
                <Tr key={payment.id}>
                  <Td>{payment.id}</Td>
                  <Td>{payment.createTime}</Td>
                  <Td>{payment.currencyCode}</Td>
                  <Td>{payment.amount}</Td>
                  <Td>{payment.status}</Td>
                  <Td>{payment.appointment_id}</Td>
                  <Td>{payment.emailAddress}</Td>
                  <Td>{payment.givenName}</Td>
                  <Td>{payment.surname}</Td>
                  <Td>{payment.address}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={11}>Loading...</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <div>
        <canvas id="myChart" width="400" height="200"></canvas>
      </div>
      <div>
        <Button
          onClick={handleClick}
          rounded={'full'}
          bg="#5C43FF"
          color={'white'}
          _hover={{
            bg: 'green',
          }}
        >
          {showChart
            ? 'Ocultar gráfico'
            : 'Generar gráfico Porcentaje de Pagos'}
        </Button>

        {showChart && <Bar data={chartData} />}
      </div>
    </Card>
  );
}
export default Pays;