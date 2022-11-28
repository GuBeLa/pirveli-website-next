import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { animate, scroll } from "motion";

const Home = () => {
  const ref = useRef();
  const linkRef = useRef();

  useEffect(() => {

    document.querySelectorAll("section > div").forEach((item) => {
      scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
        target: item,
        offset: ["start end", "end end", "start start", "end start"]
      });
    });

    document.querySelectorAll(".main").forEach((section) => {
      let article = section.querySelectorAll("article")[0];
        scroll(animate(article, { 
          y: ["-100px", "500px"],
        }), {
        target: article
      });

      let footer_anim = document.querySelector(".footer_anim");
      scroll(animate(footer_anim, { bottom: "0" }))

      let category = section.querySelector(".category");
      scroll(animate(category, { opacity: 0, scale: "0", y: "-700px", pointerEvents: "none" }, { easing: "ease-in" }))

      let header_fixed = document.querySelector(".header_fixed");
      scroll(animate(header_fixed, { opacity: 1, scale: "1" }, { easing: "ease-in" }))

      let header = document.querySelector(".header");
      scroll(animate(header, { top: "50px" }, { easing: "ease-in" }));

      let anim1 = document.querySelector(".anim1");
      scroll(animate(anim1, { x: "180vh", y: "-180vh" }, { duration: 200 }));

      let anim2 = document.querySelector(".anim2");
      scroll(animate(anim2, { x: "100vh", y: "-100vh" }, { easing: "ease-in" }));

      // let anim1 = document.querySelector(".anim1");
      //   scroll(animate(anim1, { 
      //     x: [1000, 0],
      //     y: [-1000, 0],
      //     // x: [0, 100],
      //     // top: "-100px",
      //     duration: [500, 0],
      //     delay: 2
      //   }), {
      //   target: anim1,
      // });

      // let anim2 = section.querySelector(".anim2");
      //   scroll(animate(anim2, { 
      //     x: ["0", "0"],
      //     y: [0, 0],
      //     opacity: [0, 1, 1, 0],
      //   }), {
      //   target: anim2
      // });
    });

    document.querySelectorAll(".step").forEach((section) => {
      scroll(animate(section, { opacity: 1, y: ["-50vh", "0"] }, { easing: "ease-in" }))
    });
  }, [])

  const changeColor = (color, icon = '') => {
    ref.current.style.cssText = `
      background: ${color}; 
      height: 6.25rem;
    `;

    // linkRef!.current.style.cssText = `
    //   opacity: 0.6
    // `;
  }

  const removeColor = (color) => {
    ref.current.style.cssText = `
      background: ${color}; 
      height: 6.25rem;
    `;

    // linkRef.current.style.cssText = `
    //   opacity: 1;
    // `;
  }

  return (
    <>
      <Head>
        <title>Pirveli</title>
        <meta name="description" content="Pirveli Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="wrapper"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <header className='header_fixed'>
            <ul>
              <li><Link target="_blank" href="https://optimoml.geopay.ge/index.php">მაღაზია</Link></li>
              <li><Link target="_blank" href="https://medical.pirveli.ge">მედიქალი</Link></li>
              <li><Link target="_blank" href="https://vouchers.pirveli.ge">ვაუჩერი</Link></li>
              <li><Link target="_blank" href="https://lot51.pirveli.ge">გათამაშება</Link></li>
              <li><Link target="_blank" href="">თამაშები</Link></li>
              <li><Link target="_blank" href="https://www.figma.com/proto/WUbsCoAXURabJ1LqfqNUnn/GEO--mystery-box?page-id=0%3A1&node-id=2%3A18&viewport=1354%2C-319%2C0.09&scaling=min-zoom&starting-point-node-id=2%3A18">მისტერი ბოქსი</Link></li>
            </ul>

            <Link href="#">
              <Image src="/svg/ge.svg" width={24} height={18} alt="" />
            </Link>
        </header>
        <header className="header">
          <Link href="#">
            <Image width={175} height={50} src="/svg/logo.svg" alt="" />
          </Link>

          {/* <nav className='nav'>
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
          </nav> */}

          <Link href="https://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/auth?response_type=code&client_id=demo-client&scope=email%20profile%20roles%20openid&state=ozej6dlmtIpneeVt7QoGPy2zXJ9e6BNPdGltyKyn3X4%3D&redirect_uri=https://pirveli.pirveli.ge&nonce=KAmXCp0jHrPiUph9D2p5yVwdpT5g3qWO0iCxqJFbiv0" className="sign">
            შესვლა
          </Link>
        </header>
        <section className="section main">
          <div className="anim2"></div>
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
            <h2>დააგროვე და გადაცვალე <span>მონეტები</span></h2>
            <p>აღმოაჩინე ახალი რეალობა, სადაც ყოველთვის მოგებული დარჩები!</p>
            <Link href="https://auth.pirveli.ge/realms/xracoon-demo/login-actions/registration?client_id=demo-client&tab_id=DHhl4MXtCuk">დაწყება</Link>
          </article>

          <article
            ref={ref}
            className="category"
            data-aos="fade-down-right"
            data-aos-duration="1500"
          >
            <ul>
              <li>
                <Link ref={linkRef} onMouseLeave={() => removeColor("rgba(93, 176, 57, 0)")} onMouseEnter={() => changeColor("rgba(93, 176, 57, 1)", "")} target='_blank' href="https://optimoml.geopay.ge/index.php">
                  მაღაზია
                  <Image src={'/svg/shop-min.png'} width={226} height={226} alt='' />
                </Link>
              </li>
              <li>
                <Link onMouseLeave={() => removeColor("rgba(255, 187, 182, 0)")} onMouseEnter={() => changeColor("rgba(255, 187, 182, 1)", "")} target='_blank' href="https://medical.pirveli.ge">
                  მედიქალი
                  <Image src={'/svg/med-min.png'} width={226} height={226} alt='' />
                </Link>
              </li>
              <li>
                <Link onMouseLeave={() => removeColor("rgba(151, 102, 240, 0)")} onMouseEnter={() => changeColor("rgba(151, 102, 240, 1)", "")} target='_blank' href="https://vouchers.pirveli.ge">
                  ვაუჩერი
                  <Image src={'/svg/sale-min.png'} width={226} height={226} alt='' />
                </Link>
              </li>
              <li>
                <Link onMouseLeave={() => removeColor("rgba(219, 0, 96, 0)")} onMouseEnter={() => changeColor("rgba(219, 0, 96, 1)", "")} target='_blank' href="https://lot51.pirveli.ge">
                  გათამაშება
                  <Image src={'/svg/jackpot-min.png'} width={226} height={226} alt='' />
                </Link>
              </li>
              <li>
                <Link onMouseLeave={() => removeColor("rgba(237, 197, 32, 0)")} onMouseEnter={() => changeColor("rgba(237, 197, 32, 1)", "")} target='_blank' href="#">
                  თამაშები
                  <Image src={'/svg/game-min.png'} width={226} height={226} alt='' />
                </Link>
              </li>
            </ul>
          </article>

          {/* <Link href="#" className="scroll_down">
            <Image width={140} height={140} src="/svg/scroll.svg" alt="" />
          </Link> */}
          <div className="anim1"></div>
        </section>

        {/* <section className="section about">
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
        </section> */}

        {/* <section className="section why">
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
        </section> */}

        <section className="section step">
          <div className="text_list">
            <h2>ლოიალურობაზე დაფუძნებული</h2>
            <p>
              <span>ლოიალურობაზე დაფუძნებული</span>
            </p>
            <div className="text_outer">
              <div className="text_item">
                <h2>01</h2>
                <p>
                  დაგროვებულ მონეტებს ცვლი ფასდაკლებების ვაუჩერებსა და კატალოგში მოცემულ შერჩეულ პროდუქტებში.
                </p>
              </div>
              <div className="text_item">
                <h2>02</h2>
                <p>
                  დაგროვებულ მონეტებს ცვლი ფასდაკლებების ვაუჩერებსა და კატალოგში მოცემულ შერჩეულ პროდუქტებში.
                </p>
              </div>
              <div className="text_item">
                <h2>03</h2>
                <p>
                  ყოველ 100 მონეტაზე იღებ ფულადი პრიზების მოგების 5 შანსს. სამ დღეში ერთხელ - დღიური საპრიზო ფონდით - 10 000ლ. დიდი გათამაშება - საწყისი საპრიზო ფონდით - 300 000ლ.
                </p>
              </div>
            </div>
          </div>

          <div className="video_content">
            <div className="video">
              <Image width={100} height={100} src="/svg/play.svg" alt="" />
            </div>

            <div className="play_content">
              <Image width={53} height={71} src="/svg/Vector.svg" alt="" />
              <h2>გაიცანი Pirveli</h2>
              <p>ვიდეო მეტი ინფორმაციისთვის</p>
            </div>
          </div>
          <div className="anim3"></div>
        </section>

        <footer className='footer_anim'>
          <div className="wrapper-flex">
            <div className="footer-item info">
             <div className="footer_info">
              <h2>v.tvauri@optimogroup.io</h2>
              <p>ქ. თბილისი წერეთლის გამზირი 60</p>
              <span>+995 598 23 08 23</span>
             </div>
            </div>
            <div className="footer-item menu">
            <div className="menu-flex">
                <div className="menu-list">
                  <h2>პირველი</h2>
                  <ul>
                    <li>
                      <Link href="#">ჩვენ შესახებ</Link>
                    </li>
                    <li>
                      <Link href="#">მიმდინარე ვაკანსიები</Link>
                    </li>
                    <li>
                      <Link href="#">ბლოგი</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-item menu">
              <div className="menu-flex">
                <div className="menu-list">
                  <h2>წესები და პირობები</h2>
                  <ul>
                    <li>
                      <Link href="#">ზოგადი წესები</Link>
                    </li>
                    <li>
                      <Link href="#">ხშირად დასმული კითხვები</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-item icons">
              <div className="icons-box">
              <Link href="#">
                <Image src="/svg/facebook.svg" width={24} height={25} alt="" />
              </Link>
              <Link href="#">
                <Image src="/svg/music.svg" width={24} height={25} alt="" />
              </Link>
              <Link href="#">
                <Image src="/svg/instagram.svg" width={24} height={25} alt="" />
              </Link>
              <Link href="#">
                <Image src="/svg/youtube.svg" width={24} height={25} alt="" />
              </Link>
              </div>
            </div>
            <div className="footer-item text">
              <p>Copyright © 2022 our website. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* <section className="section footer">
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
        </section> */}
      </main>
    </>
  );
};
export default Home;
