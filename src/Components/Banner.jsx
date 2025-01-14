import banner from '../../assets/bg-shadow.png'
import cricket from '../../assets/banner-main.png'
import PropTypes from 'prop-types';

const Banner = ({ handle_free_credit }) => {
    return (
        <div className="relative mt-6">
            <img
                src={banner}
                alt="Base"
                className="w-full h-full object-cover rounded-lg inset-0 bg-black/90 backdrop-blur-[300px]"
            />
            <div className='absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-center items-center text-center'>
                <img
                    src={cricket}
                    alt="Overlay"
                    className=" object-cover"
                />
                <h1 className='text-[40px] font-bold mt-6 text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='mt-4 text-2xl font-medium text-[#FFFFFFB3]'>Beyond Boundaries Beyond Limits</p>
                <button onClick={() => handle_free_credit ()}
                    className="bg-[#E7FE29] px-5 py-[14px] rounded-xl text-[18px] font-bold mt-6"
                    style={{ boxShadow: 'inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)' }}>Claim Free Credit</button>
            </div>


        </div>
    );
};

Banner.propTypes = {
    handle_free_credit: PropTypes.func.isRequired,
}
export default Banner;