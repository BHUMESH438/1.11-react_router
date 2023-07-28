const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>
        Dashboard,Hello{user?.name} at {user?.email}
      </h4>
    </section>
  );
};
export default Dashboard;
