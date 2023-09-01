
import '../styles.css'
import { useTheme } from './theme-context';

function Componente3() {

    const { theme } = useTheme();

    return (

        <div className={` ${ theme === "dark" ? "" : "bg-[#151515] text-white"}`}>
            <div className="grid grid-cols-2 gap-1 h-full mx-auto w-4/5 pt-[6%] pb-[6%]">

                <div className="col-span-1  pr-5 my-auto"><img src="src\Screenshot_4.png" alt="" /></div>

                <div className="grid grid-rows-3 gap-1 col-span-1 pl-5 pt-16 pb-16" style={{ gridTemplateRows: 'repeat(3, minmax(0, 250%))' }}>

                    <div className="row-span-1 my-auto mx-auto">
                        <p className="font-semibold inline-block text-4xl">We Provide Many Features You Can Use</p>
                    </div>

                    <div className="row-span-1 my-auto">You can explore the features that we provide with fun and have their own functions each feature.</div>
                    <div className="row-span-1 my-auto">
                        <p>✅ Powerfull online protection.</p>
                        <p className='pt-3'>✅ Internet without borders.</p>
                        <p className='pt-3'>✅ Supercharged VPN</p>
                        <p className='pt-3'>✅ No specific time limits.</p>
                    </div>
                </div>

            </div>

        </div>



    )

}


export default Componente3