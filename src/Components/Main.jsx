import banner from '../../assets/bg-shadow.png'

const Main = () => {
    return (
        <div className='translate-y-52'>
            <div className='relative'>
                <img className='w-full h-[425px] rounded-3xl border border-[#1313131A] inset-0 backdrop-blur-[200px]' src={banner} alt="" />
                <div className='absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center'>
                    <h1 className='text-[32px] font-bold'>Subscribe to our Newsletter</h1>
                    <p className='mt-4 text-xl font-medium text-[#131313B3]'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex items-center mt-6 gap-4'>
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="input w-[400px] h-[60px] input-primary max-w-xs inner-custom border border-[#13131326]" />
                        <button className='shadow-custom-inner blur-20 font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 shadow-lg px-[30px] py-[18px] rounded-lg'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;