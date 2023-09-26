import { Canvas } from "@react-three/fiber"
import Cube from "./Cube"
import { colors } from "../utils/colors"

const RubiksCube = () => {

  return (
	<div className='rubik-container'>
		<Canvas>
			<ambientLight intensity={2} />
			{/* <perspectiveCamera position={[0, 0, 0]}
				fov={75}
				near={0.1}
				far={1000}
				/> */}
			<Cube position={[0, 0, 0]} color={colors.black} />
			<Cube position={[0, 1, 0]} color={colors.green} />
			<Cube position={[0, 2, 0]} color={colors.blue} />
			<Cube position={[1, 0, 0]} color={colors.yellow} />
			<Cube position={[1, 1, 0]} color={colors.orange} />
			<Cube position={[1, 2, 0]} color={colors.red} />
			<Cube position={[2, 0, 0]} color={colors.blue} />
			<Cube position={[2, 1, 0]} color={colors.green} />
			<Cube position={[2, 2, 0]} color={colors.red} />
		</Canvas>
	</div>
  )
}


export default RubiksCube