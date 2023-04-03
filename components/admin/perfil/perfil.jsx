import React from 'react';
import { FaUserCircle, FaLocationArrow } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsFillBriefcaseFill, BsGeoAltFill, BsFillTelephoneFill } from 'react-icons/bs';




const adminPage = () => {
    return (



        <div className=' grid-cols-1 grid md:grid-cols-2 lg:grid-cols-2 gap-6 m-5 overflow-scroll'>

            <div className='bg-white flex flex-col p-5 rounded-lg'>
                <div className=''>
                    <FaUserCircle size={90} />
                </div>
                <span className='text-xl font-bold'>Pastor Esmael</span>

                <div className='flex flex-col my-5' >
                    <div className="flex gap-2">
                        <BsFillBriefcaseFill />
                        <p className='text-gray-500'>Web Developer</p>
                    </div>

                    <div className="flex gap-2">
                        <BsFillTelephoneFill />
                        <p className='text-gray-500'>+244 923121348</p>
                    </div>
                    
                    
                    <div className="flex gap-2">
                        <BsGeoAltFill />
                        <p className='text-gray-500'>Luanda, Benfica</p>
                    </div>


                    <div className="flex flex-col my-4">
                        <p className='text-gray-500'>Endereço email</p>
                        <p>mardoqueudrums@gmail.com</p>
                    </div>

                    <div className="flex flex-col my-4">
                        <p className='text-gray-500'>Endereço da casa</p>
                        <p>Benfica, Zona verde, rua 24 <br />Luanda, Angola</p>
                    </div>



                </div>

            </div>
            <div className='w-full bg-white'> Ola</div>
        </div>


    );
};

export default adminPage;


{/* <div className='  relative grid grid-cols-2 gap-4 m-5 mt-10'>

<div className='flex flex-col w-full my-20 p-5 '>
  <div className=' rounded-full '>
    <FaUserCircle size={80} />
  </div>
  <h1 className='text-xl font-bold'>Pastor Esmael</h1>
  <div className='flex' >
    <span>Icone </span>
    <p>Web Developer</p>
  </div>
</div>



</div> */}