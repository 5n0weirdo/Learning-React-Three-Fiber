import './style.css'
import ReactDOM from 'react-dom/client'
// import from "@react-three"
import {Canvas} from "@react-three/fiber"
import Experience from "./Experience"

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <Canvas>
        <Experience/>
    </Canvas>
    </>
)