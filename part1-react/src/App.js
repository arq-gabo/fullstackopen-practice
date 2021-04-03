import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
	return <p>Esta es la descripción del curso</p>;
};

function App() {
	const a = 2;
	const b = 3;

	return (
		<div className="App">
			<Description />
			<Mensaje
				color="green"
				message="estamos trabajando en un curso de react 0"
			/>
			<Mensaje
				color="red"
				message="estamos trabajando en un curso de react 1"
			/>
			<Mensaje
				color="blue"
				message="estamos trabajando en un curso de react 2"
			/>
			<h1>Titulo de la app</h1>
			<strong>Estamos trabajando en ello</strong>
			<div>
				<p>El resultado es:</p>
				{a + b}
			</div>
		</div>
	);
}

export default App;
