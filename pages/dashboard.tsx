import Dashboard from '@/pages/Dashboard/Dashboard';
import { NextPageAuth } from '@/providers/privateRoute.type';

const DashboardPage: NextPageAuth = () => {
  return <Dashboard />;
};

DashboardPage.isOnlyUser = true;

export default DashboardPage;
