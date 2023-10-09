import Balancer from 'react-wrap-balancer';

export default function Hero() {
  return (
    <section className='relative bg-blue-500'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Hero content */}
        <div className='pt-44 pb-24 md:pt-52 md:pb-28'>
          {/* Section header */}
          <div className='text-center pb-12 md:pb-16'>
            <h1 className='text-5xl md:text-[4.5em] font-bold leading-none mb-6 text-white' data-aos='zoom-y-out'>
              <Balancer>Join a private monthly retreat for exited founders.</Balancer>
            </h1>
            <div className='max-w-3xl mx-auto'>
              <p
                className='text-2xl md:text-3xl text-white mb-8 font-montreal'
                data-aos='zoom-y-out'
                data-aos-delay='150'>
                Labryinth is a highly vetted monthly escape for exited founders based in San Francisco.
              </p>
              <div
                className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'
                data-aos='zoom-y-out'
                data-aos-delay='300'>
                <div>
                  <a
                    className='btn shadow-4xl text-brown-400 font-montreal bg-[#071112] hover:bg-black hover:shadow-3xl w-full sm:w-auto sm:ml-4 px-24 border-[1px] transition duration-[0.4s] border-brown-400 text-xl'
                    href='#0'>
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
