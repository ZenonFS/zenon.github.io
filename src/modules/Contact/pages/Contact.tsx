import {
  AntDesignOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailOutlined,
  PhoneFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row, Tooltip } from "antd";
import PHOTO from "./../../../assets/images/foto.jpeg";

const Contact = () => {
  return (
    <>
      <Row style={{ padding: "50px" }}>
        <Col>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
            src={PHOTO}
          />
        </Col>
        <Col style={{ padding: "0 50px" }}>
          <Row>
            <h2>Santiago Suárez Rojas</h2>
          </Row>
          <h4 style={{ margin: 0 }}>
            <i>Ingeniero Informático</i>
          </h4>
          <Row>
            <h3 style={{ fontStyle: "italic" }}>ZenonFS</h3>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={8} style={{ padding: "0 10px" }}>
          <Card title="Correos de Contacto" bordered={false}>
            <Row>
              <MailOutlined />
              <Col style={{ marginLeft: 10 }}>
                santiago.suarez6135@gmail.com
              </Col>
            </Row>
            <Row>
              <MailOutlined />
              <Col style={{ marginLeft: 10 }}>contacto@zenonfs.com</Col>
            </Row>
          </Card>
        </Col>
        <Col span={8} style={{ padding: "0 10px" }}>
          <Card title="Redes Sociales" bordered={false}>
            <Tooltip title="Linkedin">
              <Avatar
                size="large"
                icon={<LinkedinFilled />}
                style={{ margin: "0 5px" }}
              />
            </Tooltip>
            <Tooltip title="Facebook">
              <Avatar
                size="large"
                icon={<FacebookFilled />}
                style={{ margin: "0 5px" }}
              />
            </Tooltip>
            <Tooltip title="Instagram">
              <Avatar
                size="large"
                icon={<InstagramFilled />}
                style={{ margin: "0 5px" }}
              />
            </Tooltip>
            <Tooltip title="YouTube">
              <Avatar
                size="large"
                icon={<YoutubeFilled />}
                style={{ margin: "0 5px" }}
              />
            </Tooltip>
          </Card>
        </Col>
        <Col span={8} style={{ padding: "0 10px" }}>
          <Card title="Números de Contacto" bordered={false}>
            <Row>
              <PhoneFilled />
              <Col style={{ marginLeft: 10 }}> +57 304 2017734</Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
