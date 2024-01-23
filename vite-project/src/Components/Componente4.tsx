
import '../styles.css'
import { useTheme } from './theme-context';

function Componente4() {

    const { theme } = useTheme();

    return (

        <div className={` ${ theme === "dark" ? "" : "bg-[#151515] text-white"}`}>

<h2 className="font-semibold w-auto text-center text-4xl mx-auto">Huge Global Network of Fast VPN</h2>
<p className="mx-auto w-auto text-center pt-9">Use <span className='font-bold'>LaslesVPN</span> everywhere to make it easier for when you move to other locations.</p>

            <img className='w-[85%] mx-auto pt-20 pb-20' src="/Screenshot_5.png" alt="" />

        </div>



    )

}


export default Componente4