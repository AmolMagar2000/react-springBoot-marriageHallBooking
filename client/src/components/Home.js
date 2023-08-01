import { Link } from "react-router-dom";
import styled from "styled-components";

export function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      ></link>

      <All>
        <section className="home" id="home">
          <div className="content">
            <span>wedding planner agency</span>
            <h3>we make every moment special!</h3>
            <h5 className="btn">
              <Link to="/register">learn more</Link>
            </h5>
          </div>
        </section>

        {/* home section ends */}

        {/* vendor section starts  */}
        <section className="vendor" id="vendor">
          <div className="heading">
            <h1>top wedding vendors</h1>
            <img src="header-img.png" alt="" />
          </div>
          <div className="box-container">
            <div className="box">
              <img src="img1.jpg" alt="" />
              <div className="info">
                <h3>dressing</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, dolores.
                </p>
                <a href="#" className="btn">
                  learm more
                </a>
              </div>
            </div>
            <div className="box">
              <img src="img2.jpg" alt="" />
              <div className="info">
                <h3>Florist</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, dolores.
                </p>
                <a href="#" className="btn">
                  learm more
                </a>
              </div>
            </div>
            <div className="box">
              <img src="img3.jpg" alt="" />
              <div className="info">
                <h3>wedding cake</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, dolores.
                </p>
                <a href="#" className="btn">
                  learm more
                </a>
              </div>
            </div>
            <div className="box">
              <img src="img4.jpg" alt="" />
              <div className="info">
                <h3>venu and hall</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, dolores.
                </p>
                <h2 className="btn">
                  <Link to="/register">learn more</Link>
                </h2>
              </div>
            </div>
            <div className="box">
              <img src="img5.jpg" alt="" />
              <div className="info">
                <h3>music and party</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, dolores.
                </p>
                <a href="#" className="btn">
                  learm more
                </a>
              </div>
            </div>
            <div className="box">
              <img src="img6.jpg" alt="" />
              <div className="info">
                <h3>photographer</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, dolores.
                </p>
                <a href="#" className="btn">
                  learm more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* team section starts   */}

        <section className="team" id="team">
          <div className="heading">
            <h1>our creative team</h1>
            <img src="images/header-img.png" alt="" />
          </div>
          <div className="box-container">
            <div className="box">
              <img src="amol.jpg" alt="" />
              <h3>Amol Magar</h3>
              <span>wedding planner</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                nisi ea quisquam ipsa molestias itaque, quod quis id doloremque
                similique!
              </p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
                <a href="#" className="fab fa-linkedin" />
              </div>
            </div>
            <div className="box">
              <img src="mahendra.jpg" alt="" />
              <h3>Mahendra Pratap Roy</h3>
              <span>Booking Coordinator</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                nisi ea quisquam ipsa molestias itaque, quod quis id doloremque
                similique!
              </p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
                <a href="#" className="fab fa-linkedin" />
              </div>
            </div>
            <div className="box">
              <img src="vaibhav.jpeg" alt="" />
              <h3>Vaibhav Barhate</h3>
              <span>booking manager</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                nisi ea quisquam ipsa molestias itaque, quod quis id doloremque
                similique!
              </p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
                <a href="#" className="fab fa-linkedin" />
              </div>
            </div>
            <div className="box">
              <img src="ritesh.png" alt="" />
              <h3>Ritesh Dahite</h3>
              <span>booking planner</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                nisi ea quisquam ipsa molestias itaque, quod quis id doloremque
                similique!
              </p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
                <a href="#" className="fab fa-linkedin" />
              </div>
            </div>
            <div className="box">
              <img src="prajval.jpg" alt="" />
              <h3>Prajval Mavalkar</h3>
              <span>wedding manager</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                nisi ea quisquam ipsa molestias itaque, quod quis id doloremque
                similique!
              </p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
                <a href="#" className="fab fa-linkedin" />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <center>
            <div className="sociallogo" id="aboutUs">
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook fa-2x" />{" "}
              </a>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram fa-2x" />
              </a>
              <a href="https://www.twitter.com">
                <i className="fab fa-twitter fa-2x" />
              </a>
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin fa-2x" />
              </a>
            </div>
            <address>
              <br />
              <h4>Contact</h4>
              " Cdac-Mumbai,Maharashtra "<br />
              <br />
              marriageHallBooking@gmail.com
              <br />
              support@vote.com
              <br />
              999XXXXXX
            </address>{" "}
            <br />© Copyright 2021 by XXX. All Right Reserved
          </center>
        </footer>
      </All>
    </>
  );
}
const All = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap");
  :root {
    --pink: #ee0548;
    --black: #130f40;
  }
  section {
    background-color: #130f40;
  }
  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 6.5rem;
    scroll-behavior: smooth;
  }
  * {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    transition: 0.2s linear;
    text-transform: capitalize;
  }

  section {
    padding: 3rem 9%;
  }
  .heading {
    padding-bottom: 2rem;
    text-align: center;
  }

  .heading h1 {
    font-size: 4rem;
    color: #fff;
    padding-bottom: 1rem;
    text-transform: uppercase;
  }
  .home {
    min-height: 95vh;
    display: flex;
    align-items: center;
    background: url(111.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .home .content span {
    font-size: 3rem;
    color: var(--pink);
  }

  .home .content h3 {
    font-size: 6rem;
    color: var(--black);
    width: 60rem;
  }
  .vendor .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .vendor .box-container .box {
    flex: 1 1 30rem;
    margin: 1rem;
    overflow: hidden;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
    height: 20rem;
    cursor: pointer;
  }

  .vendor .box-container .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .vendor .box-container .box .info {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    transform: scale(1.3);
    opacity: 0;
  }

  .vendor .box-container .box:hover .info {
    transform: scale(1);
    opacity: 1;
  }

  .vendor .box-container .box:hover img {
    transform: scale(1.3);
  }

  .vendor .box-container .box .info h3 {
    font-size: 3rem;
    color: var(--black);
  }

  .vendor .box-container .box .info p {
    font-size: 1.7rem;
    color: #333;
    padding: 1rem;
  }

  .box-container .box .img {
    height: 30rem;
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 2rem solid #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
  }
  .box-container .box .info {
    padding: 2rem 0;
  }
  .box-container .box .info h3 {
    font-size: 2.5rem;
    color: #fff;
  }
  .box-container .box .info p {
    font-size: 1.7rem;
    color: #aaa;
    padding: 1rem 0;
    font-style: italic;
  }

  .box-container .box .info p i {
    color: var(--pink);
    padding: 0 0.5rem;
  }

  .team .box-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .team .box-container .box {
    margin: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.9);
    background: #fff url(card-bg.png) no-repeat;
    padding: 4.7rem 2rem 10;
    text-align: center;
    background-size: cover;
    flex: 1 1 25rem;
  }
  .team .box-container .box img {
    border-radius: 50%;
    object-fit: cover;
    height: 12rem;
    width: 12rem;
    padding: 1rem;
  }
  .team .box-container .box h3 {
    font-size: 2rem;
    color: var(--black);
  }

  .team .box-container .box span {
    font-size: 2rem;
    color: var(--pink);
  }

  .team .box-container .box p {
    font-size: 1.2rem;
    color: #333;
    padding: 1rem 1;
  }

  .team .box-container .box .share {
    padding: 1rem 0;
  }

  .team .box-container .box .share a {
    height: 4rem;
    width: 4rem;
    line-height: 4rem;
    font-size: 2rem;
    color: var(--black);
    background: pink;
  }

  .team .box-container .box .share a:hover {
    color: aqua;
    background: var(--pink);
  }

  /* -------->>>>>>>>>>>>>> */

  .contactus {
    height: 300px;
    background-color: rgb(19, 19, 19);
    color: white;
    text-align: center;
    padding-top: 50px;
    margin-top: 50px;
  }

  footer {
    padding: 20px;
    margin: 0px;
    background: rgb(193, 248, 250);
    background: white;
    color: #040000;
    margin-top: 50px;
    height: 350px;
    font-size: 20px;
  }

  .sociallogo {
    text-align: center;
    padding: 10px;
  }

  .sociallogo a {
    margin: 7px;
    color: #5f5d91;
    font-size: 1.5em;

    position: relative;
  }

  .sociallogo a:hover {
    color: aqua;
  }

  @media (max-width: 1200px) {
    html {
      font-size: 55%;
    }
  }
  @media (max-width: 991px) {
    section {
      padding: 3rem 4%;
    }
  }
  .home {
    justify-content: center;
    background-position: left;
  }

  .home .content {
    text-align: center;
  }

  .home .content span {
    font-size: 2rem;
  }

  .home .content h3 {
    font-size: 4rem;
    width: auto;
  }
`;
