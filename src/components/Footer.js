import React from "react";
import "../styles/Footer.css";
import { List } from "semantic-ui-react";
import logo from '../images/logo.png';

export const Footer = () => {
  return (
    <div className="footer-flexbox">
      <img
        style={{ margin: "5px" }}
        src={logo}
        alt="logo"
      />

      <List>
        <List.Item>
          <List.Content id="name">SawApps, Inc.</List.Content>
        </List.Item>
        <br />
        <List.Item>
          <List.Icon name="copyright outline" />
          <List.Content>2018 SawApps. All rights reserved.</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Designed by SawApps</List.Content>
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
          <List.Content>+44 987 065 908</List.Content>
        </List.Item>
      </List>

      <List>
        <List.Item>
          <List.Icon name="facebook f" />
          <List.Content>
            <a href="http://www.facebook.com">Facebook</a>
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
            <a href="http://www.youtube.com">Youtube</a>
          </List.Content>
        </List.Item>
      </List>
      <br />
    </div>
  );
};
