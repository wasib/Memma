import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./../styles/MobileNav.css";
import { Icon } from "semantic-ui-react";

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.location.pathname
        .toString()
        .substr(1, 2)
        .trim()
    };
  }
  redirect(target) {
    this.props.history.push(`/${this.state.language}/` + target);
  }

  render() {
    const visible = this.props.visible;
    let active = this.props.location.pathname
      .toString()
      .substr(1)
      .trim();
    if (active.indexOf("/") !== -1)
      active = active.substr(0, active.indexOf("/"));

    return (
      <div
        className="sidenav"
        style={
          visible
            ? {
                width: "100vw"
              }
            : {
                width: "0vw"
              }
        }
      >
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={this.props.closeMobileNavBar}
        >
          &times;
        </a>

        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("Home");
          }}
          style={
            active === ""
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="home" />
          &nbsp;Home
        </span>
        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("About");
          }}
          style={
            active === "About"
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="info" />
          &nbsp;About
        </span>
        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("Product");
          }}
          style={
            active === "Product"
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="camera" />
          &nbsp;Product
        </span>
        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("Services");
          }}
          style={
            active === "Services"
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="settings" />
          &nbsp;Services
        </span>
        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("Contact");
          }}
          style={
            active === "Contact"
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="conversation" />
          &nbsp;Contact
        </span>
      </div>
    );
  }
}

export default withRouter(MobileNav);
