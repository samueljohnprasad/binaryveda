import React from "react";
import "./Section.css";
import itemone from "../../assets/img/apiTeam@2x-5a72bbd0df3f17c4851dca773b2b1b8f-3ad8f.png";
import itemthree from "../../assets/img/superchargeWorkflow.png";
import itemtwo from "../../assets/img/graphQL.png";
import showcase from "../../assets/img/showcase.png";
import bot from "../../assets/img/botbot.png";
function Section() {
  return (
    <div className="sectionTop">
      <div className="Center_quote">
        <p class="heading">
          <span>Experience the freedom to build</span>
          <p>features, right away.</p>
        </p>
        <small>
          You can now harness components of our platform and build powerful
        </small>
        <small>
          integrations for our 2 million users-or simply just for your team.
        </small>
      </div>
      <div className="showCase">
        <div className="showCaseItem">
          <img className="showCaseItemImg" src={itemone} alt="itemOne"></img>
          <span className="subHeading">Dedicated API Team</span>
          <small className="smaller">
            Our team are available for user's questions{" "}
          </small>
          <small className="smaller">
            via our slack Developer Community and Email
          </small>
        </div>
        <div className="showCaseItem">
          <img src={itemtwo} alt="itemTwo"></img>
          <br />
          <span className="subHeading">Our API uses Graph QL</span>
          <small className="smaller">
            Not handling server side. Get many API's
          </small>
          <small className="smaller">responses in a single request.</small>
        </div>
        <div className="showCaseItem">
          <img src={itemthree} alt="itemThree"></img>
          <span className="subHeading">Supercharge Your Workflow</span>
          <small className="smaller">
            Automate workflows, integarte ad analyse data
          </small>
          <small className="smaller">and take Marvel to the next level.</small>
        </div>
      </div>
      <div className="showCaseTwin">
        <div className="showCaseTwin_left">
          <h1>Showcase your app in our</h1>
          <h1>integrations directory</h1>
          <small>
            Building something special? We're always looking to work
          </small>
          <small>
            with partners who wants to help the world bring their ideas{" "}
          </small>
          <small>to life.</small>

          <div className="buttons">
            <span>Become a partner</span>
            <span>View integrations</span>
          </div>
        </div>
        <div>
          <img src={showcase}></img>
        </div>
      </div>
      <div className="chatbot">
        <div>
          <img src={bot}></img>
        </div>
        <div className="showCaseTwin_left">
          <h1>A Slack-bot for Creating App</h1>

          <small>
            Building something special? We're always looking to work
          </small>
          <small>
            with partners who wants to help the world bring their ideas{" "}
          </small>
          <small>to life.</small>
          <div className="buttons">
            <span>Become a partner</span>
            <span>View integrations</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
