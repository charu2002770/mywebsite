import websiteImg from '../assets/inter1.jpg';
import websiteImg2 from '../assets/inter2.webp';
import websiteImg3 from '../assets/pims.jpg';
import websiteImg4 from '../assets/mmm.avif';


export default function Internship() {
        
    





         return <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-white" id="Internship"> 
            <div className="w-1/2">
            <div className='flex px-10'>
            <h1 className='text-4xl text-white border-b-4 border-[#FFC0CB] mb-5 w-[170px] font-bold'> <span className='text-pink-600'>Intern</span>ship</h1>
           
            </div>
               
            </div>

            <div className="w-full mt-5"> 
               <div className='flex flex-col md:flex-row px-18 gap-10 justify-center'>
                 {/* img1 */}
                <div className='relative'>
                     <img className='h-[300px] w-[500px]' src={websiteImg} alt="" /> 

                    

                     <div className='absolute left-0 right-0 bottom-[22px] top-[0] bg-project w-full h-[300px] opacity-0 hover:opacity-100 transition-all duration-500'>
                        <p className='text-center  py-5 px-5 font-bold'>"A Two month internship at Government Stanley Hospital as an Operation Theatre & Anesthesia Technologist <br /> May 2022-2 Month."</p>
                     </div>
                </div>

                {/* img2 */}
                <div className='relative'>
                     <img  className='h-[300px] w-[500px]' src={websiteImg2} alt="" />

                         


                     <div className='absolute left-0 right-0 bottom-[22px] top-[0] bg-project w-full h-[300px] opacity-0 hover:opacity-100 transition-all duration-500'>
                         <p className='text-center py-5 px-5  font-bold'>RelaMS Hospital Redhills: 1-month internship as an Operation Theatre & Anesthesia Technologist. <br />May 2022</p>
                         </div>
                </div>
                {/* img3 */}
                <div className='relative'>
                    <img   className='h-[300px] w-[500px]' src={websiteImg3} alt="" />

                    

                    <div className='absolute left-0 right-0 bottom-[22px] top-[0] bg-project w-full h-[300px] opacity-0 hover:opacity-100 transition-all duration-500'>
                    <p className='text-center py-5 px-5  font-bold'>Assisted in surgical procedures and anesthesia administration as an Operation Theatre & Anesthesia Technologist Intern.<br /> June 2023</p>
                    </div>
                </div>
                       {/* img4 */}
                <div className='relative'>
                    <img   className='h-[300px] w-[500px]' src={websiteImg4} alt="" />

                    <div className='absolute left-0 right-0 bottom-[22px] top-[0] bg-project w-full h-[300px] opacity-0 hover:opacity-100 transition-all duration-500'>
                    <p className='text-center py-5 px-5  font-bold'>Managed theatre and anesthesia equipment, ensuring patient safety and smooth surgical operations. <br /> Jun 2024-Jun 2025</p>
                    </div>
                </div>
               </div>
           </div>
         </section>
}