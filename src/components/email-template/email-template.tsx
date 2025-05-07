import { Container, Hr, Row, Text } from "@react-email/components";
import { CSSProperties, FC } from "react";

type EmailTemplateProps = {
  first_name: string;
  last_name: string;
  contact_email: string;
  contact_phone: string;
  contact_message: string;
};

const templateStyles: CSSProperties[] = [
  {
    color: "#3B5174",
    fontWeight: "bold",
    textAlign: "justify",
  },
  {
    color: "#191818",
  },
  {
    borderColor: "#191818",
    margin: "16px auto",
  },
];

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  first_name,
  last_name,
  contact_email,
  contact_phone,
  contact_message,
}) => (
  <Container
    style={{
      backgroundColor: "#FAFAFA",
      color: "#3B5174",
      paddingLeft: "16px",
      paddingRight: "16px",
      borderRadius: "16px",
    }}
  >
    <Text
      style={{
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "24.38px",
        color: "#3B5174",
      }}
    >
      New Submission from JARIS Website!
    </Text>
    <Row style={templateStyles[0]}>First Name:</Row>
    <Row style={templateStyles[1]}>{first_name}</Row>
    <Hr style={templateStyles[2]} />
    <Row style={templateStyles[0]}>Last Name:</Row>
    <Row style={templateStyles[1]}>{last_name}</Row>
    <Hr style={templateStyles[2]} />
    <Row style={templateStyles[0]}>Email:</Row>
    <Row style={templateStyles[1]}>{contact_email}</Row>
    <Hr style={templateStyles[2]} />
    <Row style={templateStyles[0]}>Phone:</Row>
    <Row style={templateStyles[1]}>{contact_phone}</Row>
    <Hr style={templateStyles[2]} />
    <Row style={templateStyles[0]}>Message:</Row>
    <Row style={templateStyles[1]}>{contact_message}</Row>
    <Hr style={templateStyles[2]} />
  </Container>
);
