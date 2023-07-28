import { Outlet } from 'react-router-dom';

const SharedProductlayout = () => {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  );
};
export default SharedProductlayout;
