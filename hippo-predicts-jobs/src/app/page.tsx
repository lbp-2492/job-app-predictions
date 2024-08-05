import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;600&family=Poppins:ital,wght@0,100;0,300;0,500;0,600;0,700;0,800;0,900;1,300&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        </style>
      </Head>
    
      
      <main className="landing-page-bg">
        <div>
          <p className="heading">HIPPO'S PREDICTION</p>
        </div>

        <div className="cont">
          <div className="grid-container">
            <Link className="link-wrapper" href="">
              <div className="grid-item">analytics</div>
            </Link>
            <Link className="link-wrapper" href="/input">
              <div className="grid-item">data input</div>
            </Link>
            <Link className="link-wrapper" href="">
              <div className="grid-item">raw data</div>
            </Link>
          </div>
        </div>
      </main>
    </>
    
  );
}
