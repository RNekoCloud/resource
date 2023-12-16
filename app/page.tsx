import Hero from "@/components/Hero/Hero"
import Category from "@/components/Category/Category"


export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/*
        * Hero component should placed here.
        * It should contains  summary about this page.
        * Also, it should listing all of available docs.
      */}
      <Hero></Hero>
      <Category></Category>
    </main>
  )
}
