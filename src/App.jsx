import "./sass/style.css";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className="app">
			<Routes></Routes>
			<ToastContainer autoClose={2000}></ToastContainer>
		</div>
	);
}

export default App;
