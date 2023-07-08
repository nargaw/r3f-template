import { OrbitControls } from "@react-three/drei"

export default function Experience()
{
    return(
        <>
            <OrbitControls />
            <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshNormalMaterial />
            </mesh>
        </>
    )
    
}