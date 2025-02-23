import { Outlet } from 'react-router-dom';
import Sidemanu from './Sidemanu';

const MainLayout = () => {
    return (
        <div className="flex">
            <Sidemanu />
            <div className="w-3/4 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;