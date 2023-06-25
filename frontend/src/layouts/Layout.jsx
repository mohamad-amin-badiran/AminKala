import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar";

const MainLayout = () => {
	return (
		<>
			<NavBar />
			<div>
				<Outlet />

			</div>
		</>
	);
}
 
export default MainLayout;