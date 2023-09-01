
import '../styles.css'
import { useTheme } from './theme-context';

function Componente2() {

  const { theme } = useTheme();

  return (

    <div className={` ${ theme === "dark" ? "" : "bg-[#151515] text-white"}`}>
      <div className="grid grid-cols-2 gap-1 h-full mx-auto w-4/5 pt-10 sm:pt-0">
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
        <div className="col-span-1 pl-5 my-auto "><img src="src\Screenshot_2.png" alt="" /></div>

      </div>

      <div className="object-contain mx-auto pt-20 w-[75%] sm:w-auto">
        <img src="src/Screenshot_3.png" alt="" />
      </div>



    </div>



  )

}


export default Componente2