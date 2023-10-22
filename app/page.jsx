import { Feed } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover, Craft & Share
        <br className='max-md:hidden' />
        <span className='green_gradient text-center'> AI Prompts</span>
      </h1>
      <p className='desc text-center'>
        Welcome to PromptBuddy, your innovative, open-source AI-prompt companion for uncovering, crafting, and exchanging imaginative prompts in today's dynamic world
      </p>
      {/* feed */}
      <Feed />
    </section>
  )
}
