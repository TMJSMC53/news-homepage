import gaming from "../images/image-gaming-growth.jpg";
import retroPCs from "../images/image-retro-pcs.jpg";
import laptops from "../images/image-top-laptops.jpg";
import heroImg from "../images/image-web-3-mobile.jpg";
const Hero = () => {
  return (
    <main>
      <div className="mainContainer">
        <section className="mainContent">
          <picture>
            <source
              srcset="image-web-3-desktop.jpg"
              media="(min-width: 1200px)"
            />
            <img
              className="heroImg"
              src={heroImg}
              alt="Different color shapes"
            />
          </picture>
          <div className="box">
            <h1>The Bright Future of Web 3.0?</h1>
            <div className="mainContent__info">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <button>Read More</button>
            </div>
          </div>
        </section>

        <article>
          <h2>New</h2>
          <div className="articles">
            <div className="article">
              <h3 className="articleTitle">Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <span className="line"></span>
            <div className="article">
              <h3 className="articleTitle">The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <span className="line"></span>
            <div className="article">
              <h3 className="articleTitle">Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </article>
      </div>

      <section className="featureArticles">
        <div className="featureContent">
          <img className="featureImg" src={retroPCs} alt="Retro PCs" />
          <div className="featureBox">
            <span className="number">01</span>
            <h4 className="heading">Reviving Retro PCs</h4>
            <p className="description">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="featureContent">
          <img className="featureImg" src={laptops} alt="Retro PCs" />
          <div className="featureBox">
            <span className="number">02</span>
            <h4 className="heading">Top 10 Laptops of 2022</h4>
            <p className="description">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="featureContent">
          <img className="featureImg" src={gaming} alt="Retro PCs" />
          <div className="featureBox">
            <span className="number">03</span>
            <h4 className="heading">The Growth of Gaming</h4>
            <p className="description">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
