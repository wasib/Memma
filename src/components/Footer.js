import React from "react";
import "../styles/Footer.css";
import { List } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import logo from "../images/logo.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.location.pathname
        .toString()
        .substr(1, 2)
        .trim()
    };
  }
  render() {
    var temp = this.state.selected === "ar" ? "arabic" : "";
    return (
      <div className={`footer-flexbox ${temp}`}>
        <div className="footer-image">
          {" "}
          <img src={logo} alt="logo" />
        </div>

        <List>
          <List.Item>
            <List.Content id="name">
              {this.state.selected == "ar"
                ? "ميكاترونكس الشرق الاوسط"
                : "Middle East Mechatronics"}
            </List.Content>
          </List.Item>
          <br />
          <List.Item>
            <List.Icon name="copyright outline" />
            <List.Content>
              {this.state.selected == "ar"
                ? "2019 ميكاترونكس الشرق الأوسط (R) (TM)."
                : "2019 Middle East Mechatronics (R)(TM)."}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              {this.state.selected == "ar"
                ? "كل الحقوق محفوظة."
                : "All rights reserved."}
            </List.Content>
          </List.Item>
        </List>

        <List>
          <List.Item>
            <List.Icon name="mail" />
            <List.Content>
              <a href="mailto:sale@memmas.com">sale@memmas.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="phone" />
            <List.Content>+966 9200 12804</List.Content>
          </List.Item>
        </List>

        <List>
          <List.Item>
            <List.Icon name="facebook f" />
            <List.Content>
              <a href="https://www.facebook.com/memmasolutions/?ref=br_rs">
                Facebook
              </a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="twitter" />
            <List.Content>
              <a href="http://www.twitter.com">Twitter</a>
            </List.Content>
          </List.Item>
        </List>

        <List>
          <List.Item>
            <List.Icon name="instagram" />
            <List.Content>
              <a href="http://www.instagram.com">Instagram</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="youtube" />
            <List.Content>
              <a href="https://www.youtube.com/channel/UCSosKn9XHnp8CEFGvBAw4ug">
                Youtube
              </a>
            </List.Content>
          </List.Item>
        </List>
        <br />
      </div>
    );
  }
}

export default withRouter(Footer);
