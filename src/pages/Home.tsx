import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="banner flex justify-center items-center text-center h-[80vh]">
        <div className="w-3/4">
          <h1 className="text-6xl font-bold">Your Gateway to <span className="highlight">Seamless</span> Online Conversations and Meetings</h1>
          <p className="pt-5 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sunt alias sapiente nesciunt dicta nulla illum fuga dolor, libero, veniam, quibusdam laborum quas voluptatem assumenda debitis et saepe! Eius, dolorum.</p>
        </div>
      </div>
    </>
    
  )
}
