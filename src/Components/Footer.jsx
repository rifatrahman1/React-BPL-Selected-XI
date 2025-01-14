import footer_picture from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='bg-[#06091A] h-[800px] flex flex-col justify-center items-center text-center'>
            <div className='w-[1320px] mx-auto mt-48'>
                <div className='flex justify-center'>
                <img src={footer_picture} alt="" />
                </div>
                <div className='flex justify-between mt-16'>
                    <div>
                        <p className='text-[18px] font-semibold text-[#FFFFFF] text-left'>About Us</p>
                        <p className='text-left text-[#FFFFFF99] mt-4'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </div>
                    <div >
                        <p className='text-[18px] font-semibold text-[#FFFFFF] text-left'>Quick Links</p>
                        <ul className='list-disc space-y-3 text-[#FFFFFF99] mt-4'>
                            <li>Home</li>
                            <li>Service</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-[18px] font-semibold text-[#FFFFFF] text-left'>Subscribe</p>
                        <p className='text-left text-[#FFFFFF99] mt-4'>This to our newsletter for the <br /> latest updates.</p>
                        <div className="flex items-center mt-5">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-r-lg shadow-lg hover:opacity-90 focus:ring-2 focus:ring-pink-300"
                            >
                                Subscribe
                            </button>
                        </div>

                    </div>
                </div>
                <p className='text-[#FFFFFF99] pt-32'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;