import "./Output.css";
const Output = () => {
  return (
    <div className="output">
      <div className="product-description">
        <b className="this-is-what">This is what you can cook</b>
        <div className="product-description-child" />
      </div>
      <div className="task-baar">
        <div className="task-baar-child" />
        <div className="task-baar-item" />
      </div>
      <button className="button2">
        <img className="shopping-cart-icon1" alt="" src="/shopping-cart1.svg" />
        <b className="button3">Go Back</b>
        <img className="shopping-cart-icon1" alt="" src="/arrowright1.svg" />
      </button>
      <div className="home2">{`Home `}</div>
      <div className="explore2">Explore</div>
      <div className="help2">Help</div>
      <div className="profile2">Profile</div>
      <img className="output-child" alt="" src="/rectangle-48@2x.png" />
      <div className="recipes-container">
        <div className="recipes2">Recipes</div>
        <div className="winter-salads1">Winter salads</div>
        <div className="beef-and-mutton1">Beef and Mutton</div>
        <div className="flavoured-milk1">Flavoured Milk</div>
        <div className="organic-chicken1">Organic chicken</div>
        <div className="faq1">FAQ</div>
        <div className="contact-us1">Contact Us</div>
        <div className="fresh-recipe1">Fresh Recipe</div>
        <div className="about-us1">About US</div>
      </div>
      <div className="all-rights-reserved1">{`All Rights Reserved `}</div>
      <img className="images-2-icon1" alt="" src="/images-2@2x.png" />
      <img className="images-1-icon1" alt="" src="/images-2@2x.png" />
      <img className="output-item" alt="" src="/ellipse-6@2x.png" />
      <div className="output-inner" />
      <b className="gajar-ka-halwa-container">
        <ul className="gajar-ka-halwa-gajar-ka-halw">
          <li className="gajar-ka-halwa-gajar-ka-halw1">
            <span className="gajar-ka-halwa">{`Gajar ka Halwa - `}</span>
            <span>Gajar ka halwa is a dish from</span>
          </li>
        </ul>
        <p className="punjab-which-is">
          {" "}
          punjab which is made by carrot. Step 1 - cut carrot
        </p>
      </b>
      <b className="samosa-chat-container">
        <ul className="gajar-ka-halwa-gajar-ka-halw">
          <li className="gajar-ka-halwa-gajar-ka-halw1">
            <span className="gajar-ka-halwa">Samosa chat -</span>
            <span> Samosa chat is a dish made from</span>
          </li>
        </ul>
        <p className="punjab-which-is">
          {" "}
          samosa and is generally spicy. Step 1 - add samosa
        </p>
      </b>
      <b className="paneer-biryani-container">
        <ul className="gajar-ka-halwa-gajar-ka-halw">
          <li className="gajar-ka-halwa-gajar-ka-halw1">
            <span className="gajar-ka-halwa">Paneer Biryani -</span>
            <span>{` Paneer Biryani is a dish made `}</span>
          </li>
        </ul>
        <p className="punjab-which-is">{`      from rice and paneer. Step 1 - take 2 glasses of rice `}</p>
        <p className="punjab-which-is"> in a bowl.</p>
      </b>
    </div>
  );
};

export default Output;
