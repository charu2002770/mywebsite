import AboutImg from '../assets/about2.png';

export default function About() { 
   
    return <section className='flex flex-col md:flex-row bg-About px-5 py-20' id='about'>

        <div className='md:w-1/2 mt-20 ]'>
            <img className='h-[450px]'  src={AboutImg}/>
        </div>

        <div className='py-5 md:w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-[#FFC0CB] mb-5 w-[170px] font-bold'>About <span className='text-pink-600'>Me</span></h1>
            <p className='pb-5'>I am Charu Latha, a graduate with a B.Sc. in Operation Theatre and Anaesthesia Technology.</p>
            <p className='pb-5'>I have completed four internships, gaining practical experience in diverse healthcare settings.</p>
            <p className='pb-5'>My internship experience includes Stanley Government Hospital (2 months), Pondicherry Institute of Medical Sciences (1 month), RelaMS Hospital Redhills (1 month), and a comprehensive 1-year program at MMM College of Allied Health Sciences.</p>
        </div>
            
        </div>
    </section>
}
