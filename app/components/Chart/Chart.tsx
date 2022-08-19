import { monthNames } from '@/common/constants'
import { faker } from '@faker-js/faker'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import styles from './Chart.module.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: {
        display: false,
      },
    },
    title: {
      display: false,
    },
  },
}

ChartJS.defaults.scale.grid.display = false
ChartJS.defaults.scale.grid.drawBorder = false
ChartJS.defaults.elements.point.radius = 0
ChartJS.defaults.elements.line.tension = 0.35
ChartJS.defaults.elements.line.borderWidth = 2
ChartJS.defaults.maintainAspectRatio = false
ChartJS.defaults.responsive = true

const Chart: FC = () => {
  const [labels, setLabels] = useState<{
    year: string[]
    week: string[] | []
    day: string[] | []
  }>({
    year: monthNames,
    week: [],
    day: [],
  })
  const [selectValue, setSelectValue] = useState<'day' | 'year' | 'week'>(
    'week'
  )

  const data = {
    labels: labels[selectValue],
    datasets: [
      {
        data: labels[selectValue].map(() => faker.finance.amount(0, 10000, 2)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        data: labels[selectValue].map(() => faker.finance.amount(0, 10000, 2)),
        borderColor: 'black',
        backgroundColor: 'black',
      },
    ],
  }

  useEffect(() => {
    const week = []
    const day = []
    for (let i = 1; i <= 5; i++) {
      const currentDate = new Date()
      day.push(
        `${monthNames[currentDate.getMonth()]} ${currentDate.getDay()}, ${
          currentDate.getHours() - i
        }:00`
      )
      week.push(
        `${
          monthNames[
            new Date(new Date().setDate(currentDate.getDate() - i)).getMonth()
          ]
        } ${new Date(new Date().setDate(currentDate.getDate() - i)).getDate()}`
      )
    }
    setLabels((prev) => ({ ...prev, week, day }))
  }, [])

  return (
    <>
      <div className={styles.head}>
        <p className={styles['head__title']}>Expenses statistics</p>
        <select
          className={styles['head__select']}
          value={selectValue}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setSelectValue(e.target.value)
          }}
        >
          <option value='week'>Week</option>
          <option value='day'>Day</option>
          <option value='year'>Year</option>
        </select>
      </div>
      <div className={styles['canvas']}>
        <Line options={options} data={data} className={styles.chart} />
      </div>
    </>
  )
}

export default Chart
