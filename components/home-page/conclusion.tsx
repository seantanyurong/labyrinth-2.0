import Test from '@/public/images/test.png';
import Image from 'next/image';

export default function Conclusion() {
  return (
    <section className='relative'>
      <div className='py-20 md:py-32'>
        <div className='relative max-w-2xl mx-auto px-4 sm:px-6'>
          <div className='col-span-6 lg:col-span-3'>
            <h2 className='h3 mb-5 text-blue-500'>Who's right for Labyrinth...and who isn't?</h2>

            <p className='mb-3 text-xl font-montreal text-blue-500'>
              The minimum requirement to be a Labyrinth attendee is a previous exit that exceeds $1M. You must also have
              held the role of a founder or CEO in your previous company. This is to ensure the retreat will have
              individuals with similar experiences.
            </p>
            <p className='mb-3 text-xl font-montreal text-blue-500'>
              Each applicant is interviewed and highly vetted with a low acceptance rate. To keep each Labyrinth Retreat
              intimate, we limit the number of attendees to 10-20 depending on the nature of the activity.
            </p>

            <p className='mb-3 text-xl font-montreal text-blue-500'>
              Ok, enough talking. Let's get to it. Apply for our upcoming retreat in January.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
