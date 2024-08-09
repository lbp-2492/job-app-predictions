import Link from 'next/link';

export default function Home() {
    return (
        <>
            <main className="landing-page-bg">
                <div className="container">
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