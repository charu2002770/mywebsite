import WebsiteImg from '../assets/project1.png';
import project from '../components/CHARULATHA FINAL PROJECT.pdf';

export default function Project() {
        
    





         return <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-white" id="project"> 
            <div className="w-1/2">
            <div className='flex px-10'>
            <h1 className='text-4xl text-white border-b-4 border-[#FFC0CB] mb-5 w-[170px] mb-5 w-[170px] font-bold'> <span className='text-pink-600'>PRO</span>JECTS</h1>
            <p></p>
            </div>
               
            </div>

            <div className="w-full mt-5"> 
               <div className='flex flex-col md:flex-row px-20 gap-10 justify-center'>
                 {/* img1 */}
                <div className='relative'>
                     <img className='h-[300px] w-[450px]' src={WebsiteImg} alt="" /> 

                    
                     <div className='absolute left-0 right-0 bottom-[30px] top-[0] bg-project w-full h-[300px] opacity-0 hover:opacity-100 transition-all duration-500'>
                        <p className='text-center py-5 px-5 font-bold mt-5'> Multimodal analgesia strategies for cardiac surgery</p>
                     </div>
                </div>
                     
                    
               
               </div>
           </div>

            <div className='flex flex-col md:flex-row px-20  justify-center'> 
                        <p className='font-bold text-white mt-10 gap-8 flex flex-col md:flex-row justify-center px-5'>
                          For More Details  <a className='btn' href={project} download="project">DOWNLOAD</a>
                        </p>
                     </div>
         </section>
}