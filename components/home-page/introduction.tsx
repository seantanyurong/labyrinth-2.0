import IntroductionImg from '@/public/images/introduction.png';
import Image from 'next/image';

export default function Introduction() {
  return (
    <section className='relative'>
      <div className='py-12 md:py-20'>
        <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='grid grid-cols-6 gap-y-16 sm:gap-16 w-full'>
            {/* Left column - introduction */}
            <div className='col-span-6 lg:col-span-3 font-financier'>
              <h2 className='h3 mb-5 text-blue-500'>Exiting a company can be lonely.</h2>
              <p className='mb-3 text-xl font-montreal text-blue-500'>
                You've worked hard towards your dream and made it. You've now got everything you could have ever dreamed
                of. But now what?
              </p>
              <p className='mb-3 text-xl font-montreal text-blue-500'>
                In our experience, the best way to move forward is to learn from the wins and mistakes of others, and to
                surround yourself with individuals who’ve been there, done that.
              </p>
              <p className='mb-3 text-xl font-montreal text-blue-500'>
                However, finding your people and building that meaningful relationship is tough.
              </p>

              <p className='mb-3 text-xl font-montreal text-blue-500'>But when you do find them, it’s life changing.</p>
              <p className='mb-3 text-xl font-montreal text-blue-500'>And that’s what Labyrinth is for.</p>
              <p className='mb-3 text-xl font-montreal text-blue-500'>
                Joining a Labyrinth Retreat gives you immediate access to a tribe of exited founders who are going
                through the same things as you. With culture and activity at the core of its experience, a Labyrinth
                Retreat is designed to energize and invigorate attendees. It aims to connect them with each other not to
                network, but to forge friendships.
              </p>
            </div>

            {/* Right column - submenu */}
            <div className='col-span-6 lg:col-span-3'>
              <Image src={IntroductionImg} alt='temp' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
