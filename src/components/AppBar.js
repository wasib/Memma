import React from "react";
import "./../styles/AppBar.css";
import NavMenu from "./NavMenu";
import { Link, withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";
import logo from "../images/logo.png";

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem:
        this.props.location.pathname === "/"
          ? "/Home"
          : this.props.location.pathname
    };
  }

  hide = () => {
    this.setState({
      overridedStyle: {
        height: "0vh",
        display: "none"
      }
    });
  };
  render() {
    return (
      <div className="AppBar" style={this.state.overridedStyle}>
        <div className="LeftPane">
          <Link to="../">
            <img src={logo} alt="logo" width="120" height="50" />
          </Link>
        </div>
        <div className="RightPane">
          <NavMenu />
        </div>
        <div className="sidebar-button">
          <Button icon='content' onClick={this.props.handleButtonClick}>
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(AppBar);