import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextPageWithLayout } from './page';
// import '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Pirveli</title>
        <meta name="description" content="Pirveli Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="wrapper"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <header className="header">
          <Link href="#">
            <Image width={175} height={50} src="/svg/logo.svg" alt="" />
          </Link>

          <nav className='nav'>
            <ul>
              <li>
                <Link href="#" target="_blank">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  Medical
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  Voucher
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  Raffles
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  Games
                </Link>
              </li>
            </ul>
          </nav>

          <Link href="#" className="sign">
            Sign In
          </Link>
        </header>
        <section className="section main">
          <article
            className="info"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h2>Join the race for points</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
            <Link href="#">Join Now</Link>
          </article>

          <article
            className="category"
            data-aos="fade-down-right"
            data-aos-duration="1500"
          >
            <ul>
              <li>
                <Link href="#">E-commerce</Link>
              </li>
              <li>
                <Link href="#">Medical</Link>
              </li>
              <li>
                <Link href="#">Voucher</Link>
              </li>
              <li>
                <Link href="#">Raffles</Link>
              </li>
              <li>
                <Link href="#">Games</Link>
              </li>
            </ul>
          </article>

          {/* <Link href="#" className="scroll_down">
            <Image width={140} height={140} src="/svg/scroll.svg" alt="" />
          </Link> */}
        </section>

        <section className="section about">
          <div className="wrapper">
            <article className="img">
              <Image width={520} height={563} src="/svg/about.svg" alt="" />
            </article>
            <article className="text">
              <h2>About Us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classNameical literature, discovered the undoubtable source.
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de
                Finibus Bonorum et Malorum (The Extremes of Good and Evil) by
                Cicero, written in 45 BC. This book is a treatise on the theory
                of ethics, very popular during the Renaissance. The first line
                of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a
                line in section 1.10.32.
              </p>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
              <Link href="#">
                Learn More{' '}
                <Image width={40} height={40} src="/svg/more.svg" alt="more" />
              </Link>
            </article>
          </div>
        </section>

        <section className="section why">
          <h2>Why Our Company</h2>
          <div className="content">
            <div className="item">
              <div className="why_outer">
                <span>01</span>
                <h2>Comfortable</h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </div>
              <div className="why_outer">
                <span>02</span>
                <h2>Quality</h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </div>
              <div className="why_outer">
                <span>03</span>
                <h2>Affordable</h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </div>
            </div>
            <div className="item">
              <Image width={629} height={740} src="/svg/company.svg" alt="" />
            </div>
            <div className="item">
              <div className="why_outer">
                <span>04</span>
                <h2>Cheap</h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section step">
          <div className="text_list">
            <h2>Get it done</h2>
            <p>
              In <span>3 easy step</span>
            </p>
            <div className="text_outer">
              <div className="text_item">
                <h2>01</h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </div>
              <div className="text_item">
                <h2>02</h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </div>
              <div className="text_item">
                <h2>03</h2>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </div>
            </div>
          </div>

          <div className="video_content">
            <div className="video">
              <Image width={100} height={100} src="/svg/play.svg" alt="" />
            </div>

            <div className="play_content">
              <Image width={83} height={32} src="/svg/Vector.svg" alt="" />
              <h2>Play Video</h2>
              <p>for more information</p>
            </div>
          </div>
        </section>

        <section className="section footer">
          <div className="container">
            <div className="text_content">
              <h2>Footer Name</h2>

              <div className="list_outer">
                <div className="list_inner">
                  <h2>Company</h2>
                  <div className="list">
                    <Link href="">About us</Link>
                    <Link href="">How it Works</Link>
                    <Link href="">Contact Us</Link>
                    <Link href="">Terms & Conditions</Link>
                    <Link href="">Privacy Policy</Link>
                    <Link href="">Bonus Points</Link>
                  </div>
                </div>
                <div className="list_inner">
                  <h2>Quick Links</h2>
                  <div className="list">
                    <Link href="">E_commerce</Link>
                    <Link href="">Vouchers</Link>
                    <Link href="">Medical</Link>
                    <Link href="">Raffles</Link>
                    <Link href="">Games</Link>
                  </div>
                </div>
                <div className="list_inner">
                  <h2>Social</h2>
                  <div className="list">
                    <Link href="">Facebook</Link>
                    <Link href="">Instagram</Link>
                    <Link href="">Youtube</Link>
                    <Link href="">Linkedin</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="img_content">
              <Image width={620} height={636} src="/svg/footer.svg" alt="" />
            </div>
          </div>
          <p>Copyright © 2022 our website. All rights reserved.</p>
        </section>
      </main>
    </>
  );
};
export default Home;
