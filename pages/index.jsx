import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { animate, scroll } from "motion";
import { isMobile } from 'react-device-detect';

const Home = () => {
  const ref = useRef();
  const linkRef = useRef();
  const [mobile_menu, setMobile_menu] = useState(false)

  useEffect(() => {
    // window.addEventListener('touchstart', function(event){
    //   let startX = event.touches[0].clientX;
    //   let startY = event.touches[0].clientY;
    //   console.log(startX);
    // })
     
    //  window.addEventListener('touchend', function(event){
    //   //console.log(event);
    //   let endX = event.changedTouches[0].clientX;
    //   let endY = event.changedTouches[0].clientY;
    //   // handleTouch(startX, endX, left, right)
      
    // })

  if(isMobile) {
    document.querySelector('.info').style.height = `${window.innerHeight}px`;
    document.querySelector('.category').style.height = `${window.innerHeight}px`;
    document.querySelector('.text_list').style.height = `${window.innerHeight}px`;
    document.querySelector('.video_content').style.height = `${window.innerHeight - 200}px`;
  }

  (function(d, w, s) {
      var widgetHash = '6RbjV9Nq9riHUTrKPbFJ', bch = d.createElement(s); bch.type = 'text/javascript'; bch.async = true;
      bch.src = '//widgets.binotel.com/chat/widgets/' + widgetHash + '.js';
      var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(bch, sn);
  })(document, window, 'script');

    const blocks = document.querySelectorAll(".mobile_swipe"),
    sectionHeight = window.innerHeight;
    // links = document.querySelectorAll(".link");

    let inScroll = false, //flag for correct duration step by step
        durationOneScroll = 0, //duration if one step
        arrSections = [],
        step = 0;

    for (let i = 0; i < blocks.length; i++) {
        arrSections.push(sectionHeight * i);
    }

    // document.addEventListener('keydown', (event) => {
    //   event.preventDefault()
    //   var name = event.key;
    //   var code = event.code;
    //   // Alert the key name and key code on keydown
    //   if (inScroll === false) {
    //     inScroll = true;
    //     //move down
    //     if (code == "ArrowDown") {
    //         step >= arrSections.length - 1 ? step = arrSections.length - 1 : step = step + 1;
    //         window.scrollTo({
    //             top: arrSections[step],
    //             behavior: "smooth"
    //         });
    //         setTimeout(() => { inScroll = false }, durationOneScroll);
    //     } else {
    //         //move up
    //         step === 0 ? step = 0 : step = step - 1;
    //         window.scrollTo({
    //             top: arrSections[step],
    //             behavior: "smooth"
    //         });
    //         setTimeout(() => { inScroll = false }, durationOneScroll);
    //     }
    // }
    // }, false);

//one page scroll by mouse wheel
    document.addEventListener("wheel", function (event) {
      event.preventDefault()
        if (inScroll === false) {
            inScroll = true;
            //move down
            if (event.deltaY > 0) {
                step >= arrSections.length - 1 ? step = arrSections.length - 1 : step = step + 1;
                window.scrollTo({
                    top: arrSections[step],
                    behavior: "smooth"
                });
                setTimeout(() => { inScroll = false }, durationOneScroll);
            } else {
                //move up
                step === 0 ? step = 0 : step = step - 1;
                window.scrollTo({
                    top: arrSections[step],
                    behavior: "smooth"
                });
                setTimeout(() => { inScroll = false }, durationOneScroll);
            }
        }
    })

    // document.querySelectorAll("section > div").forEach((item) => {
    //   scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    //     target: item,
    //     offset: ["start end", "end end", "start start", "end start"]
    //   });
    // });
    

      document.querySelectorAll(".main").forEach((section) => {
        if(!isMobile) {
          let article = section.querySelectorAll("article")[0];
            scroll(animate(article, { 
              y: ["-100px", "500px"],
            }), {
            target: article
          });

          let category = section.querySelector(".category");
          scroll(animate(category, { width: "30%", opacity: 0, scale: "0", y: "-700px", pointerEvents: "none" }, { easing: "ease-in" }))
        } else {
          let header = document.querySelector(".header");
          scroll(animate(header, { top: "30px" }, { easing: "ease-in" }));
        }
  
        let footer_anim = document.querySelector(".footer_anim");
        scroll(animate(footer_anim, { bottom: "0" }))
  
        let header_fixed = document.querySelector(".header_fixed");
        scroll(animate(header_fixed, { opacity: 1, scale: "1" }, { easing: "ease-in" }))
  
        let header = document.querySelector(".header");
        scroll(animate(header, { opacity: 1, top: "0" }, { easing: "ease-in" }));
  
        let anim1 = document.querySelector(".anim1");
        scroll(animate(anim1, { x: "180vh", y: "-90vh" }, { duration: 200 }));
  
        let anim2 = document.querySelector(".anim2");
        scroll(animate(anim2, { x: "100vh", y: "-100vh" }, { easing: "ease-in" }));
  
        let video_content = document.querySelector(".video_content");
        scroll(animate(video_content, { scale: "0.3", top: "100px" }, { easing: "ease-in" }));
  
        let text_outer = document.querySelector(".text_outer");
        scroll(animate(text_outer, { opacity: 1, top: "50vh" }, { easing: "ease-in" }));
  
        // let left_anim = document.querySelector(".left_anim");
        // scroll(animate(left_anim, { left: "-300px" }, { easing: "ease-in" }));
  
        // let left_anim_fast = document.querySelector(".left_anim_fast");
        // scroll(animate(left_anim_fast, { left: "-300px" }, { easing: "ease-in" }));
      });

    document.querySelectorAll(".step").forEach((section) => {
      scroll(animate(section, { opacity: 1, }, { easing: "ease-in" }))

      let video_content = document.querySelector(".video_content");
      scroll(animate(video_content, { scale: "1" }, { easing: "ease-in" }));

      if(!isMobile) {
        let header = document.querySelector(".header");
        scroll(animate(header, { opacity: 0, top: "100px" }, { easing: "ease-in" }));
      } else {
        let header = document.querySelector(".header");
        scroll(animate(header, { top: "30px" }, { easing: "ease-in" }));
      }

      let text_outer = document.querySelector(".text_outer");
      scroll(animate(text_outer, { opacity: 1, top: "0" }, { easing: "ease-in" }));

      let left_anim = document.querySelector(".left_anim");
      scroll(animate(left_anim, { left: "auto" }, { easing: "ease-in" }));

      let left_anim_fast = document.querySelector(".left_anim_fast");
      scroll(animate(left_anim_fast, { left: "100px" }, { easing: "ease-in" }));
    });

    document.querySelectorAll(".footer_anim").forEach((section) => {
      scroll(animate(section, { opacity: 1, }, { easing: "ease-in" }))

      let video_content = document.querySelector(".video_content");
      scroll(animate(video_content, { scale: "1" }, { easing: "ease-in" }));

      if(!isMobile) {
        let header = document.querySelector(".header");
        scroll(animate(header, { opacity: 0, top: "100px" }, { easing: "ease-in" }));
      } else {
        let header = document.querySelector(".header");
        scroll(animate(header, { top: "30px" }, { easing: "ease-in" }));
      }
    });
  }, [])

  const changeColor = (color, icon = '') => {
    if(isMobile) {
      return false
    } else {
      ref.current.style.cssText = `
        background: ${color}; 
        height: 6.25rem;
      `;
    }
  }

  const removeColor = (color) => {
    ref.current.style.cssText = `
      background: ${color}; 
      height: 6.25rem;
    `;
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
              <li><Link target="_blank" href="https://medical.pirveli.com">მედიქალი</Link></li>
              <li><Link target="_blank" href="https://vouchers.pirveli.com">ვაუჩერი</Link></li>
              <li><Link target="_blank" href="https://lot51.pirveli.com">გათამაშება</Link></li>
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

          <Link href="https://auth.pirveli.com/realms/xracoon-demo/protocol/openid-connect/auth?response_type=code&client_id=demo-client&scope=email%20profile%20roles%20openid&state=ozej6dlmtIpneeVt7QoGPy2zXJ9e6BNPdGltyKyn3X4%3D&redirect_uri=https://pirveli.pirveli.com&nonce=KAmXCp0jHrPiUph9D2p5yVwdpT5g3qWO0iCxqJFbiv0" className="sign">
            შესვლა
          </Link>
          <button type="button" className="mobile_menu" onClick={() => setMobile_menu(true)}>
            <Image src="/svg/mobile_menu.svg" alt="" width={24} height={24} />
          </button>
          {mobile_menu ? (
            <div className="mobile_menu_outer">
              <header>
                <ul>
                  <li>
                    <Link href="#">
                      <Image src="/svg/ru.svg" height={24} width={24} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src="/svg/ge.svg" height={24} width={24} alt="" />
                    </Link>
                  </li>
                </ul>
                <Image onClick={() => setMobile_menu(false)} src="/svg/close_menu.svg" alt="" width={24} height={24} />
              </header>

              <section>
                <div>
                  <h2 className='mobile_title'>ნავიგაცია</h2>
                </div>
                <div className='nav_content'>
                  <div className="nav_item">
                    <Image src="/svg/mobile_shop.svg" height={24} width={24} alt="" />
                    <h3>მაღაზია</h3>
                  </div>
                  <div className="nav_item">
                    <Image src="/svg/mobile_medical.svg" height={24} width={24} alt="" />
                    <h3>მედიქალი</h3>
                  </div>
                  <div className="nav_item">
                    <Image src="/svg/mobile_voucher.svg" height={24} width={24} alt="" />
                    <h3>ვაუჩერები</h3>
                  </div>
                  <div className="nav_item">
                    <Image src="/svg/mobile_games.svg" height={24} width={24} alt="" />
                    <h3>გათამაშება</h3>
                  </div>
                  <div className="nav_item">
                    <Image src="/svg/mobile_game.svg" height={24} width={24} alt="" />
                    <h3>თამაშები</h3>
                  </div>
                </div>
              </section>
              <Link className='mobile_enter' href="#">
                შესვლა
              </Link>
            </div>
          ) : ''}
          
        </header>
        <section className="section main">
          <div className="anim2"></div>
          <article
            className="info mobile_swipe"
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
            <Link href="https://auth.pirveli.com/realms/xracoon-demo/login-actions/registration?client_id=demo-client&tab_id=DHhl4MXtCuk">დაწყება</Link>
          </article>

          <article
            ref={ref}
            className="category mobile_swipe"
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
                <Link onMouseLeave={() => removeColor("rgba(255, 187, 182, 0)")} onMouseEnter={() => changeColor("rgba(255, 187, 182, 1)", "")} target='_blank' href="https://medical.pirveli.com">
                  მედიქალი
                  <Image src={'/svg/med-min.png'} width={226} height={226} alt='' />
                </Link>
              </li>
              <li>
                <Link onMouseLeave={() => removeColor("rgba(151, 102, 240, 0)")} onMouseEnter={() => changeColor("rgba(151, 102, 240, 1)", "")} target='_blank' href="https://vouchers.pirveli.com">
                  ვაუჩერი
                  <Image src={'/svg/sale-min.png'} width={226} height={226} alt='' />
                </Link>
              </li>
              <li>
                <Link onMouseLeave={() => removeColor("rgba(219, 0, 96, 0)")} onMouseEnter={() => changeColor("rgba(219, 0, 96, 1)", "")} target='_blank' href="https://lot51.pirveli.com">
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
          <div className="text_list mobile_swipe">
            <h2 className='left_anim'>ლოიალურობაზე დაფუძნებული</h2>
            <p>
              <span className='left_anim_fast'>ლოიალურობაზე დაფუძნებული</span>
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

          <div className="video_content mobile_swipe">
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

        <section className='section footer_anim mobile_swipe'>
          <div className="wrapper-flex">
            <div className="footer-item info">
             <div className="footer_info">
              <h2>info@pirveli.com</h2>
              <p>ზოვრეთის ქ.#1</p>
              <span>032 2 18 55 77</span>
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
        </section>

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
