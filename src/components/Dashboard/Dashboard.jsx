import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { studentName } = useParams(); // Get the studentName from the route parameters

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to your Dashboard, {studentName}!</h1>
      {/* Add dashboard content here */}
    </div>
  );
};

export default Dashboard;
