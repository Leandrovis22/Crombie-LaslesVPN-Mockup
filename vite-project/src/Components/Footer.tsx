
import '../styles.css'

function Footer() {

    return (

        <div style={{backgroundColor:"#f8f8f8"}}>
            <div className="grid grid-cols-2 gap-[70px] h-full mx-auto w-4/5 pt-[6%] pb-[6%]">

                <div className="col-span-1  pr-5 my-auto"><img src="src\Screenshot_8.png" alt="" /></div>

                <div className="grid gap-10 grid-cols-3 gap-1 col-span-1 pl-10 pt-16 pb-16">

                    <ul>

                    <p className='pb-5 font-bold'>Product</p>
                    <p className='pt-4'>Download</p>
                    <p className='pt-4'>Pricing</p>
                    <p className='pt-4'>Locations</p>
                    <p className='pt-4'>Server</p>
                    <p className='pt-4'>Countries</p>
                    <p className='pt-4'>Blog</p>

                    </ul>

                    <ul>

                    <p className='pb-5 font-bold'>Engage</p>
                    <p className='pt-4'>LaslesVPN?</p>
                    <p className='pt-4'>FAQ</p>
                    <p className='pt-4'>Tutorials</p>
                    <p className='pt-4'>About Us</p>
                    <p className='pt-4'>Privacy Policy</p>
                    <p className='pt-4'>Terms of Service</p>

                    </ul>

                    <ul>

                    <p className='pb-5 font-bold'>Earn Money</p>
                    <p className='pt-4'>Affiliate</p>
                    <p className='pt-4'>Become a Partner</p>

                    </ul>

                </div>

            </div>

        </div>



    )

}


export default Footer