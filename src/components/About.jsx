import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-11 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHm4cs0zyFCkw/profile-displayphoto-shrink_800_800/0/1650733221312?e=1658361600&v=beta&t=5zgYQQAmSN2GbKGNlIQ_mWWyEQ-u1pC_8Rc-2xopDf4" class="w-auto h-auto rounded-full"></img>
            </div>
            <div class="mb-4 text-4xl font-bold">
            <p>Dedicated engineering student interested in obtaining an opportunity to build a strong version of myself. A team player who is attentive to details and known for taking initiatives.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;
