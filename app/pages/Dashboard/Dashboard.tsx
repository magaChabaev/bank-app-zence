import Card from '@/components/Card/Card'
import Chart from '@/components/Chart/Chart'
import LastOperations from '@/components/LastOperations/LastOperations'
import Layout from '@/components/Layout/Layout'
import ProgressBarLimit from '@/components/ProgressBarLimit/ProgressBarLimit'
import SendMoney from '@/components/SendMoney/SendMoney'

import styles from './Dashboard.module.scss'

const Dashboard: FC = () => {
  return (
    <Layout title='Zence'>
      <div className={styles.home}>
        <h1 className={styles.title}>Dashboard</h1>
        <div className={styles.content}>
          <div className={styles.item}>
            <Card />
            <ProgressBarLimit
              limitTitle='Internet payment limit'
              maxLimitNumber={3000}
              currentLimitNumber={1200}
            />
            <LastOperations />
          </div>
          <div className={styles.item}>
            <Chart />
            <SendMoney />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
