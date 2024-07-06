import styles from './style.module.css';
import Image from 'next/image';

function Landing() {
    return ( 
        <div className={`${styles.main} overflow-hidden`}>
            {/* <Image src="/landing/landing_cover.png" alt="landing" layout="fill" objectFit="cover" /> */}
            <video className='h-full w-full'
            muted={true} autoPlay={true} loop={true}
            src={'/landing_video.mp4'}></video>
            {/* <div className={styles.landing_text}>
                <h1>compete connect create</h1>
                <h2>Join the ultimate community for gamers, Developers and eSports enthusiasts </h2>
            </div> */}
            <div className={styles.bgFilter}></div>
        </div>
     );
}

export default Landing;