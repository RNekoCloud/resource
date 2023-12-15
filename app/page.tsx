export default function Home() {
  return (
    <main>
      {/*
        * Create content in here.
        * It should contains  summary about this page.
        * Also, it should listing all of available docs.
      */}
      <div className="container mt-3 mx-10">
        <div className="w-3/4 mx-auto mt-20">
          <h2 className="text-7xl font-bold text-center">Practice Make It Perfect!</h2>
          <p className="text-lg my-10 text-center text-slate-600">Butuh referensi? dokumentasi? ataupun sample kode? Sepertinya kamu berada di tempat yang tepat! <b>Resource</b> adalah dokumentasi <i>technical</i> yang berkaitan tentang <i>version control</i>, <i>programming</i>, <i>tools</i> dll</p>
         <div className="flex justify-center">
             <a href="#" className="px-12 py-3 rounded-lg bg-green-500 text-white text-center hover:opacity-50 transition-all ease-in-out">Let's Explore</a>
         </div>
        </div>
      </div>
    </main>
  )
}
