export default function Home() {
  return (
    <main>
      {/*
        * Create content in here.
        * It should contains  summary about this page.
        * Also, it should listing all of available docs.
      */}
      <div className="container mt-3 mx-10">
        <div className="w-1/2">
          <h2 className="text-xl font-bold text-slate-400">What is this site about?</h2>
          <p className="text-md my-3">Web ini adalah dokumentasi belajar terkait tentang <i>version control</i>, <i>programming</i>, <i>tools</i> dll</p>
        </div>
      </div>
    </main>
  )
}
