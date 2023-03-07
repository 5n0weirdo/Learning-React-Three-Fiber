import {useRef} from "react"
import {useFrame, extend, useThree} from "@react-three/fiber"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"

extend({OrbitControls})

const Experience = () => {

const cubeRef = useRef()
const groupRef = useRef()
const {camera, gl} = useThree()

useFrame((state, delta) =>{
	cubeRef.current.rotation.y += delta
})

return (
	<>
	<orbitControls args={[camera, gl.domElement]}/>
	<directionalLight position={[1, 2, 3]} intensity={1.5} />
	<ambientLight intensity={0.5}/>
		<group>
		<mesh position-x={-2}>
            <sphereGeometry args={[1]} />
            <meshStandardMaterial color="orange"/>
        </mesh>
        <mesh ref={cubeRef} rotation-y={Math.PI*0.25} position-x={2} scale={1.5}>
            <boxGeometry/>
            <meshStandardMaterial color="purple" wireframe="false"/>
        </mesh>
       </group>
        <mesh position-y={-1} rotation-x={-Math.PI*0.5} scale={10}>
            <planeGeometry args={[1]}/>
            <meshStandardMaterial color="green" wireframe="false"/>
        </mesh>

        </>
	)
}
export default Experience;