import "./Home.scss";
import { Fragment } from "react";
import Wallet from "../../Assets/wallet.png";
import Nfts from "../../Assets/nfts.png";
import List from "../../Assets/list.png";
import Collection from "../../Assets/collection.png";
const Home = () => {
  return (
    <Fragment>
      <div className="home-container">
        <div className="col-1">
          <div className="col-1__heading">
            <h1>
              Discover, and Collect <br />
              extraordinary <br />
              <span className="heading-span">Monster</span> NFTs
            </h1>
          </div>
          <p className="col-1__para">
            Buy,sell, and grow your crypto with Crypto with coinFlip, the
            platform dedicated to every trader at every level.
          </p>
          <div className="col-1__btns">
            <button className="btn btn-left">Sign in</button>
            <button className="btn btn-right"> Sign up</button>
          </div>
          <div className="home-counts">
            <div className="count-container">
              <h3 className="count-heading">35k+</h3>
              <span>Artworks</span>
            </div>
            <div className="count-container">
              <h3 className="count-heading">15k+</h3>
              <span>Auctions</span>
            </div>
            <div className="count-container">
              <h3 className="count-heading">25k+</h3>
              <span>Artists</span>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div class="shadow-purple">
            <div class="circle-wrapper">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <div>
            <img className="icon" src={Wallet} alt="icon" />
          </div>
          <div className="heading-2">Set Up Your Wallet</div>
          <p className="para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout .
          </p>
        </div>
        <div className="testimonial">
          <div>
            <img className="icon" src={Collection} alt="icon" />
          </div>
          <div className="heading-2"> Create Your Collection</div>
          <p className="para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout .
          </p>
        </div>
        <div className="testimonial">
          <div>
            <img className="icon" src={Nfts} alt="icon" />
          </div>
          <div className="heading-2"> Add your NFTs</div>
          <p className="para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout .
          </p>
        </div>
        <div className="testimonial">
          <div>
            <img className="icon" src={List} alt="icon" />
          </div>
          <div className="heading-2"> List Them For Sale</div>
          <p className="para">
            It is a long established fact that a reader will be distracted the
            readable content of a page when looking at its layout .
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
