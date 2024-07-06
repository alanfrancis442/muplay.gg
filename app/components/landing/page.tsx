import styles from './style.module.css';
import Image from 'next/image';

function Landing() {
    return ( 
        <div className={`${styles.main} overflow-hidden relative`}>
            {/* <Image src="/landing/landing_cover.png" alt="landing" layout="fill" objectFit="cover" /> */}
            <video className='sm:h-full sm:w-full h-screen object-cover'
            muted={true} autoPlay={true} loop={true}
            src={'/landing_video.mp4'}></video>
            <div className={'absolute top-1/2 left-24 '}>
                <h1 className='font-[paladins] text-5xl'>compete <br />connect <br /> create</h1>
                <h2 className='f'>Join the ultimate community for gamers, Developers and eSports enthusiasts </h2>
            </div>
            <div className={styles.bgFilter}></div>
        </div>
     );
}

export default Landing;

