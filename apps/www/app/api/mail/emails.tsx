import {
    Body,
    Head,
    Html,
    Preview,
    Container,
    Text,
    Section,
    Img,
} from "@react-email/components";

import * as React from "react";

interface EmailProps {
    userFirstname: string;
}

const gradientTextStyle = {

    color: "#404040",
    fontSize: "47px",
    fontWeight: "bold",
    margin: "50px 0 20px 0",
    textAlign: "center" as const,
    letterSpacing: "-0.05em",
    lineHeight: "1"
    
};

const containerStyle = {
    padding : "15px",
    maxWidth: "700px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "34px",
    boxShadow: "0 20px 12px rgba(0, 0, 0, 0.05)",
    margin: "10px auto",
};

const cardStyle = {
    borderRadius: "28px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    padding: "8px",
    backgroundColor: "white",
    maxWidth : "550px",
    margin: "20px auto",
};

const innerCardStyle = {

    margin : "auto",
    fontSize: "16px",
    borderRadius: "20px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    padding: "22px",
    backgroundColor: "rgba(28, 28, 28, 0.02)",
};


export const NotionWaitlistEmail = ({ userFirstname = "Gurvinder" }: EmailProps) => (
    <Html>
        <Head />
        <Preview>Welcome to Skiper-UI {userFirstname}! 🎉</Preview>
        <Body style={{ margin: "0", padding: "0", fontFamily: "sans-serif", color: "#404040" }}>
            <Container style={{ ...containerStyle, backgroundColor: "#ffffff" }}  >
                <Section style={{ textAlign: "center", marginBottom: "32px" }}>
                    <Text style={gradientTextStyle}>Welcome to Skiper-UI</Text>
                </Section>

                <Section style={{ ...cardStyle, position: "relative" }}>
                    <div style={innerCardStyle}>
                        <Text style={{ color: "black", fontWeight: 550, margin: "0", letterSpacing: "-0.02em", fontSize: "16px" }}>
                            Hi, {userFirstname}
                        </Text>
                        <Text style={{ color: "rgba(0, 0, 0, 0.6)", margin: "8px 0", fontSize: "16px" }}>
                            🎉 Guess what? You just became part of the coolest UI club in town — Skiper UI!
                        </Text>
                    </div>
                </Section>

                {/* SVG Logo */}
                <Section style={{ textAlign: "center", margin: "20px 0" }}>

                    <Img
                        src={`https://skiper-ui.com/static/arrow.png`}
                        width="125"
                        alt="Skiper/ui"
                        style={logo}
                    />

                    <a href="http://skiper-ui.com">
                        <Img
                            src={`https://skiper-ui.com/static/cta.png`}
                            width="212"
                            alt="Skiper/ui"
                            style={logo}
                        />
                    </a>
                </Section>

                <Section style={{ textAlign: "center", margin: "0" }}>
                    <Text style={gradientTextStyle}>Here's the deal:</Text>
                </Section>

                <Section style={{ ...cardStyle, marginBottom: "100px" }}>
                    <div style={innerCardStyle}>
                        <Text style={{ color: "rgba(0, 0, 0, 0.6)", lineHeight: "1.6", fontSize: "16px" }}>
                            🌟 Exclusive updates on our latest components
                            <br /> 🙅‍♂️ Zero spam, zero fluff — just pure UI goodness
                            <br /><br /> We're all about keeping it real, transparent, and ridiculously fun. You're
                            <br /> officially in for an exciting ride.
                            <br /><br /> Thanks for hopping on board!
                            <br />Let's build something amazing together.
                            <br /><br />Cheers,
                            <br />The Skiper UI Crew ✨
                        </Text>
                    </div>
                </Section>
                <Img
                    src={`https://skiper-ui.com/static/badge.png`}
                    width="120"
                    alt="Skiper/ui"
                    style={{margin : "auto"}}
                />
                <Section style={{ textAlign: "center", margin: "0" }}>
                    <Text style={gradientTextStyle}>Thanks For subscribing </Text>
                    <Text style={{ color: "rgba(0, 0, 0, 0.4)", margin: "8px 0 20px 0", fontSize: "12px" }}>
                        Got questions or just want to say hi? Reach out to us anytime at <a style={{ color: "#404040" }} href="http://x.com/guri_who">gxuri</a>
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default NotionWaitlistEmail;

NotionWaitlistEmail.PreviewProps = {
    userFirstname: "Tyler Durden",
} as EmailProps;

const logo = {
    margin: "0 auto",
};