import Footer from './Footer';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;