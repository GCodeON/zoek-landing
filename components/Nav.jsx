
import Image from 'next/image';

export default function Nav() {
 
  return (
    <div className="hero">
    <div className="nav">
      <Image
        src="/zoek-logo.webp"
        alt="Zoek Logo"
        className=""
        width={100}
        height={24}
        priority
      />
    </div>
    <div className="header">
      <div className="content">
        <span className="title-sub orange">Insider Exclusive:</span>
        <h1>NEXT-LEVEL SOCIAL MEDIA <br/> MARKETING</h1>
      </div>
    </div>
  </div>
  );
}