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
          <h2 className="text-7xl font-bold text-slate-400 text-center">Practice Make It Perfect!</h2>
          <p className="text-lg my-10 text-center">Butuh referensi? dokumentasi? ataupun sample kode? Sepertinya kamu berada di tempat yang tepat! <b>Resource</b> adalah dokumentasi <i>technical</i> yang berkaitan tentang <i>version control</i>, <i>programming</i>, <i>tools</i> dll</p>
         <div className="flex justify-center">
             <a href="#" className="px-12 py-3 rounded-lg bg-green-500 text-white text-center mx-5">Explore</a>
             <a href="#" className="px-12 py-3 rounded-lg bg-green-500 text-white text-center">Source Code</a>

         </div>
        </div>
      </div>
    </main>
  )
}
