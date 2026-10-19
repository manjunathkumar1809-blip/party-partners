import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
export default function Hero3D() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian text-gold">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} color="#D4AF37" />
        <mesh rotation={[0.2, 0.3, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="absolute bottom-24 left-10 z-10 pointer-events-none">
        <h1 className="font-serif text-6xl font-bold tracking-tight text-gold">Party Partners</h1>
        <p className="mt-4 text-xl text-white/80">Luxury Event Rentals & Decorations — Banashankari 3rd Stage</p>
      </div>
    </section>
  );
}
