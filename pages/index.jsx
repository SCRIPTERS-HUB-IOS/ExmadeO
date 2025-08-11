import Link from 'next/link'
import ParticleBackground from '../components/ParticleBackground'
import BrightnessSlider from '../components/BrightnessSlider'
import OurDiscordButton from '../components/OurDiscordButton'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <OurDiscordButton />

      <div className="fixed top-4 right-4 z-50">
        <BrightnessSlider />
      </div>

      <main className="relative z-40 h-screen flex items-center justify-center">
        <div className="glass container-center p-10 w-[360px]">
          <div className="neon text-center text-3xl font-extrabold select-none">exmade</div>

          <Link href="/methods" legacyBehavior>
            <a className="mt-8 btn-primary w-full text-center text-2xl rounded-xl">Methods</a>
          </Link>
        </div>
      </main>

      <footer className="fixed bottom-6 right-6 z-40 text-sm text-red-200 select-none">
        exmadeW
      </footer>
    </div>
  )
}
