
import HeroImg from '../assets/hero00.webp';
import {  AiOutlineLinkedin,AiFillAmazonCircle} from "react-icons/ai";






export default function Hero(){
   
    return <section className='flex flex-col md:flex-row ps-5 py-20  bg-secondary justify-center' id='home'>
        <div className='w-1/4 flex flex-col ps-6 mt-20'> <div></div>
        <h1 className=' text-white text-6xl  font-hero-font pb-5'><span className=' text-pink-600'>WEL</span>COME <br />
        <span className='text-white'>IM, </span> <br /> <span className=''>CHARU</span> <br />
        <p className='text-2xl mt-2 flex-row'>IM Operation <span className='text-pink-500 font-bold'>Theatre</span> <br /> & <br /> Anesthesia<span className='text-pink-500'>  Technologist.</span></p>
        </h1>

        <div className='flex py-4 gap-4 text-white px-10'>
           
             <a href="https://www.linkedin.com/in/senthamil-selvan-s-31531230b/"  className='hover:text-green-500'><AiOutlineLinkedin size={40}/></a>
        
        </div>

        </div>
        <img className=' md:w-1/3 h-[500px] mt-20' src={HeroImg} alt="hero" />


    </section>
}