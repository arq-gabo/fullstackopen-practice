import React from "react";

function Mensaje(props) {
	return (
		<div>
			<h1 style={{ color: props.color }}>{props.message}</h1>
		</div>
	);
}

export default Mensaje;
