
import '../styles.css'

function Componente2() {

  return (


    <div className="grid grid-cols-2 gap-1 h-full mx-auto w-4/5 pt-10">
      <div className="grid grid-rows-3 gap-1 col-span-1 pr-5 pt-16 pb-16">

        <div className="row-span-1 my-auto mx-auto">
          <p className="font-semibold inline-block text-4xl">Want anything to be easy with <span className="font-bold">LaslesVPN</span>.</p>
        </div>

        <div className="row-span-1 my-auto mx-auto">Provide a network for all your needs with ease and fun using <span className="font-bold">LaslesVPN</span> discover intresting features from us.</div>
        <div className="row-span-1 my-auto">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-12 py-4 text-lg rounded">
            Get Started
          </button>
        </div>
      </div>
      <div className="col-span-1 h-full pl-5 "><img src="src\Screenshot_2.png" alt="" /></div>
    </div>




  )

}


export default Componente2