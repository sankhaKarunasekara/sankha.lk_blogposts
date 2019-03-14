import React, { Component } from "react";
import SpeakerCardTextToggle from "./SpeakerCardTextToggle";

class SpeakerCard extends Component {
  componentWillMount() {
    this.setState({ learnMoreToggled: false });
  }

  render() {
    {
      return (
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "80px",
            position: "relative",
            zIndex: 3,
            "@media(min-width: 820px)": {
              paddingBottom: "40px"
            },
            maxWidth: "416px"
          }}
        >
          <div
            css={{
              borderRadius: "8px",
              boxShadow: "0 4px 24px 0 rgba(185, 185, 185, 0.5)",
              marginLeft: "13px",
              marginRight: "13px",
              background: "#ffffff"
            }}
          >
            <div
              css={{
                overflow: "hidden",
                borderTopLeftRadius: "inherit",
                borderTopRightRadius: "inherit"
              }}
            >
              <div
                css={{
                  background: `url(${
                    this.props.image
                  }) no-repeat center center`,
                  minHeight: "300px",
                  backgroundSize: "cover",
                  width: "100%",
                  borderTopLeftRadius: "inherit",
                  borderTopRightRadius: "inherit",
                  transition: "1s",
                  filter: this.state.learnMoreToggled
                    ? "blur(5px)"
                    : "blur(0px)",
                  marginBottom: this.state.learnMoreToggled ? "-178px" : "0px"
                }}
              />
            </div>
            <div
              css={{
                position: "relative",
                padding: "16px 24px 24px 24px",
                lineHeight: "20px",
                overflow: "hidden",
                transition: "1s",
                // maxHeight: this.state.learnMoreToggled ? "" : "500px",
                minHeight: this.state.learnMoreToggled ? "270px" : "210px"
              }}
            >
              <h3
                css={{
                  textTransform: "uppercase",
                  fontWeight: 800,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#00205b"
                }}
              >
                {this.props.name}
              </h3>
              <h2
                css={{
                  fontWeight: 500,
                  paddingTop: "8px",
                  fontSize: "16px",
                  lineHeight: "23px"
                }}
              >
                {this.props.title}
              </h2>
              <div css={{ textOverflow: "hidden" }}>
                <p
                  css={{
                    paddingTop: "24px",
                    paddingBottom: "36px",
                    //fontSize: "14px",
                    textOverflow: "hidden",
                    transition: "1s",
                    marginBottom: this.state.learnMoreToggled
                      ? "0px"
                      : "-305px",
                    lineHeight: "1.43",
                    color: this.state.learnMoreToggled ? "#000000" : "#565656"
                  }}
                >
                  {this.props.description}
                </p>
              </div>
            </div>
            <div
              css={{
                paddingLeft: "24px",
                paddingBottom: "16px",
                paddingTop: "24px"
              }}
            >
              <SpeakerCardTextToggle
                focused={this.state.learnMoreToggled}
                defaultText={"learn more"}
                focusedText={"show less"}
                onClick={this.onLearnMoreClicked}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  onLearnMoreClicked = () => {
    this.setState({ learnMoreToggled: !this.state.learnMoreToggled });
  };
}

export default SpeakerCard;
