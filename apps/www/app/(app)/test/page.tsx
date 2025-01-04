import Image from 'next/image';
import MaskedImage from './masked-div';



function page() {
  return (
    <div className='m-auto mt-40 max-w-4xl' >

      <MaskedImage maskType="type-2" className="my-4">
        <Image height={1080} width={1080} className='hover:scale-105' src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop" alt="Description" />
      </MaskedImage>
      <MaskedImage maskType="type-1" className="my-4">
        <video autoPlay loop muted className='hover:scale-105'>
          <source src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </MaskedImage>
      <MaskedImage maskType="type-3" className="my-4">
        <Image height={1080} width={1080} className='hover:scale-105' src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop" alt="Description" />
      </MaskedImage>
      <MaskedImage maskType="type-4" className="my-4">
        <Image height={1080} width={1080} className='hover:scale-105' src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop" alt="Description" />
      </MaskedImage>
    </div>
  );
}

export default page;