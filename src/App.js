import React from "react";
import './App.css';



function App() {
  return <Desktop2 {...desktop2Data} />;
}

export default App;

function Desktop2(props) {
  const {
    image8,
    image9,
    image10,
    image2,
    title,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    withMoreThan180,
    yourEmailCom,
    theGoldenGuestsEd,
    theGoldenGuests,
    joinUsToRegisterForThePresale,
    signUpForOurNewsletter,
    image11,
    image7,
    place1,
    image1,
    place2,
    features,
    roadmap,
    team,
    joinOurDiscord,
    image3,
    termsOfService,
    privacyPolicy,
    image6,
    image4,
    image5,
    frame31Props,
    frame32Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-2screen">
        <div className="overlap-group-container">
          <div className="overlap-group3">
            <img className="image-8" src={image8} />
            <img className="image-9" src={image9} />
            <div className="ellipse-1"></div>
            <img className="image-10" src={image10} />
            <div className="ellipse-2"></div>
            <div className="ellipse-3"></div>
            <img className="image-2" src={image2} />
            <h1 className="title">
            EXCLUSIVE
            </h1>
            <img className="vector-1" src={require("./pictures/Vector1.png")} />
            <img className="vector-4" src={require("./pictures/Vector4.png")} />
            <img className="vector-5"  src={require("./pictures/Vector5.png")}/>
            <img className="newest-nft-release" 
            src={require("./pictures/newestNFTrelease.png")} />
            <img className="collections" src={require("./pictures/Collections.png")}  />
            <div className="the-billionaire-club">
              <span className="roboto-normal-white-20px">The</span>
              <span className="span1">{spanText2}</span>
              <span className="roboto-normal-white-20px">{spanText3}</span>
              <span className="span3">{spanText4}</span>
            </div>
            <div className="with-more-than-180roboto-normal-white-24px">
              {withMoreThan180}
            </div>
            <div className="overlap-group1">
              <div className="youremailcom">
                {yourEmailCom}
              </div>
              <img className="line-1"  src={require("./pictures/Line1.png")} />
            </div>
            <img className="rectangle-7"  src={require("./pictures/Rectangle7.png")} />
            <div className="the-golden-guests-edroboto-normal-white-24px">
              {theGoldenGuestsEd}
            </div>
            <div className="the-golden-guests">
              {theGoldenGuests}
            </div>
            <div className="overlap-group2">
              <div className="overlap-group">
                <div className="rectangle-325"></div>
                <img className="rectangle-326"  src={require("./pictures/Rectangle326.png")} />
              </div>
              <div className="join-us-to-register-for-the-presale">
                joinUsToRegisterForThePresale
              </div>
            </div>
            <div className="group-249">
              <div className="group-248">
                <img className="get-aped-with-us" src={require("./pictures/get-aped-with-us.png")}/>
                <div className="sign-up-for-our-newsletter">
                  {signUpForOurNewsletter}
                </div>
              </div>
              <img className="rectangle-325-1" src={require("./pictures/Rectangle325.png")} />
            </div>
            <img className="image-11" src={image11} />
            <Frame3 {...frame31Props} />
            <Frame3 {...frame32Props} />
            <img className="image-7" src={image7} />
          </div>
          <div className="overlap-group-1">
            <div className="place">
              {place1}
            </div>
          </div>
        </div>
        <div className="rectangle-1"></div>
        <img className="image-1" src={image1} />
        <div className="group-2">
          <div className="group-1poppins-normal-white-18px">
            <div className="flex-col">
              <div className="place-1">
                {place2}
              </div>
              <img className="polygon-1" src="polygon-1.svg" />
            </div>
            <div className="features">
              {features}
            </div>
            <div className="roadmap">
              roadmap
            </div>
            <div className="team">
              {team}
            </div>
          </div>
          <div className="overlap-group-2">
            <div className="join-our-discord">
              {joinOurDiscord}
            </div>
          </div>
        </div>
        <img className="line-2" src="line-2.svg" />
        <div className="flex-rowroboto-normal-sonic-silver-18px">
          <img className="image-3" src={image3} />
          <div className="terms-of-service">
            {termsOfService}
          </div>
          <div className="privacy-policy">
            {privacyPolicy}
          </div>
          <div className="group-247">
            <img className="image-6" src={image6} />
            <img className="image-4" src={image4} />
            <img className="image-5" src={image5} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3(props) {
  const {
    overlapGroup,
    unsplashHg4Rzburhc8,
    knight1,
    antDesignStarFilled1,
    number1,
    rectangle3231,
    currentBid1,
    endingIn1,
    x054Eth1,
    x12H55M2S1,
    unsplashXttwketqccq,
    knight2,
    antDesignStarFilled2,
    number2,
    rectangle3232,
    currentBid2,
    endingIn2,
    x054Eth2,
    x12H55M2S2,
    unsplashFi4Phbsnll8,
    knight3,
    antDesignStarFilled3,
    number3,
    rectangle3233,
    currentBid3,
    endingIn3,
    x054Eth3,
    x12H55M2S3,
    className,
  } = props;

  return (
    <div className={`frame-3 ${className || ""}`}>
      <div className="overlap-group-3" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="flex-row-1">
          <img className="unsplash" src={unsplashHg4Rzburhc8} />
          <div className="knightpoppins-medium-white-18-1px">
            {knight1}
          </div>
          <img className="ant-designstar-filled" src={antDesignStarFilled1} />
          <div className="numberpoppins-semi-bold-white-14-4px">
            {number1}
          </div>
        </div>
        <img className="rectangle-323" src={rectangle3231} />
        <div className="flex-row-2poppins-medium-quick-silver-15-3px">
          <div className="current-bid">
            currentBid
          </div>
          <div className="ending-in">
            endingIn
          </div>
        </div>
        <div className="flex-row-3poppins-bold-white-21-6px">
          <div className="x054-eth">
            {x054Eth1}
          </div>
          <div className="x12h-55m-2s">
            {x12H55M2S1}
          </div>
        </div>
      </div>
      <div className="overlap-group1-1">
        <div className="flex-row-4">
          <img className="unsplash" src={unsplashXttwketqccq} />
          <div className="knightpoppins-medium-white-18-1px">
          knight
          </div>
          <img className="ant-designstar-filled" src={antDesignStarFilled2} />
          <div className="numberpoppins-semi-bold-white-14-4px">
            {number2}
          </div>
        </div>
        <img className="rectangle-323-1" src={rectangle3232} />
        <div className="flex-row-2poppins-medium-quick-silver-15-3px">
          <div className="current-bid">
            currentBid
          </div>
          <div className="ending-in">
            {endingIn2}
          </div>
        </div>
        <div className="flex-row-3poppins-bold-white-21-6px">
          <div className="x054-eth">
            {x054Eth2}
          </div>
          <div className="x12h-55m-2s">
            {x12H55M2S2}
          </div>
        </div>
      </div>
      <div className="overlap-group-4">
        <div className="flex-row-1">
          <img className="unsplash" src={unsplashFi4Phbsnll8} />
          <div className="knightpoppins-medium-white-18-1px">
            knight
          </div>
          <img className="ant-designstar-filled" src={antDesignStarFilled3} />
          <div className="numberpoppins-semi-bold-white-14-4px">
            {number3}
          </div>
        </div>
        <img className="rectangle-323" src={rectangle3233} />
        <div className="flex-row-2poppins-medium-quick-silver-15-3px">
          <div className="current-bid">
            currentBid
          </div>
          <div className="ending-in">
            endingIn
          </div>
        </div>
        <div className="flex-row-3poppins-bold-white-21-6px">
          <div className="x054-eth">
            {x054Eth3}
          </div>
          <div className="x12h-55m-2s">
            {x12H55M2S3}
          </div>
        </div>
      </div>
    </div>
  );
}
const frame31Data = {
  overlapGroup: require("./pictures/Rectangle3.png"),
  unsplashHg4Rzburhc8: require("./pictures/unsplash_hG4RzbuRhC8.png"),
  knight: "@knight",
  antDesignStarFilled1: require("./pictures/ant-design_star-filled.png"),
  number1: "213",
  rectangle3231:require( "./pictures/Rectangle323.png"),
  currentBid1: "Current bid",
  endingIn1: "Ending in",
  x054Eth1: "0.54 ETH",
  x12H55M2S1: "12h 55m 2s",
  unsplashXttwketqccq: require("./pictures/unsplash_XttWKETqCCQ.png"),
  knight2: "@knight",
  antDesignStarFilled2: require("./pictures/ant-design_star-filled.png"),
  number2: "213",
  rectangle3232: require("./pictures/Rectangle323(1).png"),
  currentBid2: "Current bid",
  endingIn2: "Ending in",
  x054Eth2: "0.54 ETH",
  x12H55M2S2: "12h 55m 2s",
  unsplashFi4Phbsnll8: require( "./pictures/unsplash_fI4phbSNlL8.png"),
  knight3: "@knight",
  antDesignStarFilled3:  require("./pictures/ant-design_star-filled.png"),
  number3: "213",
  rectangle3233: require( "./pictures/Rectangle323(2).png"),
  currentBid3: "Current bid",
  endingIn3: "Ending in",
  x054Eth3: "0.54 ETH",
  x12H55M2S3: "12h 55m 2s",
}

const frame32Data = {
  overlapGroup:  require("./pictures/Rectangle3.png"),
  unsplashHg4Rzburhc8: require( "./pictures/unsplash_hG4RzbuRhC8.png"),
  knight1: "@knight",
  antDesignStarFilled1: require( "./pictures/ant-design_star-filled.png"),
  number1: "213",
  rectangle3231: require( "./pictures/Rectangle323(4).png"),
  currentBid1: "Current bid",
  endingIn1: "Ending in",
  x054Eth1: "0.54 ETH",
  x12H55M2S1: "12h 55m 2s",
  unsplashXttwketqccq:  require("./pictures/unsplash_XttWKETqCCQ.png"),
  knight2: "@knight",
  antDesignStarFilled2: require( "./pictures/ant-design_star-filled.png"),
  number2: "213",
  rectangle3232: require( "./pictures/Rectangle323(5).png"),
  currentBid2: "Current bid",
  endingIn2: "Ending in",
  x054Eth2: "0.54 ETH",
  x12H55M2S2: "12h 55m 2s",
  unsplashFi4Phbsnll8:  require("./pictures/unsplash_fI4phbSNlL8.png"),
  knight3: "@knight",
  antDesignStarFilled3: require("./pictures/ant-design_star-filled.png"),
  number3: "213",
  rectangle3233:  require("./pictures/Rectangle323(3).png"),
  currentBid3: "Current bid",
  endingIn3: "Ending in",
  x054Eth3: "0.54 ETH",
  x12H55M2S3: "12h 55m 2s",
  className: "frame-4",
};


 const desktop2Data = {
  image8:require( "./pictures/image8.png"),
  image9:require( "./pictures/image9.png"),
  image10:require("./pictures/image10.png"),
  image2: require("./pictures/image2.png"),

  spanText1: "The",
  spanText2: " BILLIONAIRE CLUB",
  spanText3:
    " is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. ",
  spanText4: "Reveal on October 20th.",
  withMoreThan180:
    "With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.",
  yourEmailCom: "your@email.com",
  theGoldenGuestsEd:
    "The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have no element in common with the regular collection.",
  theGoldenGuests: "The Golden Guests",
  joinUsToRegisterForThePresale: "Join us to register for the Presale",
  signUpForOurNewsletter: "Sign up for our newsletter",
  image11:  require("./pictures/image11.png"),
  image7:  require("./pictures/image7.png"),
  place1: "Register",
  image1:  require("./pictures/image1.png"),
  place2: "Home",
  features: "Features",
  roadmap: "Roadmap",
  team: "Team",
  joinOurDiscord: "Join Our Discord",
  image3:  require("./pictures/image3.png"),
  termsOfService: "Terms of Service",
  privacyPolicy: "Privacy Policy",
  image6: require("./pictures/image6.png"),
  image4: require( "./pictures/image4.png"),
  image5: require( "./pictures/image5.png"),
  frame31Props: frame31Data,
  frame32Props: frame32Data,
}
