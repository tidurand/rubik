interface CubeProps {
	position: [number, number, number]
	color: number
}

const Cube: React.FC<CubeProps> = (props) => {
	const { position, color } = props

	return (
	  <mesh position={position}>
		<boxGeometry args={[1, 1, 1]} />
		<meshStandardMaterial color={color} />
	  </mesh>
	);
}


export default Cube