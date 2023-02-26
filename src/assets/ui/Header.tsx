import { Link, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { FC } from "react";
import logo from "./../images/logo.png";

const { Header: HeaderAD } = Layout;

const Header: FC = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <HeaderAD style={{ display: "flex", backgroundColor: colorBgContainer }}>
      <Link className="logo" to={"/"}>
        <img
          src={logo}
          alt="Logo Zenon"
          style={{ width: "64px", height: "64px", padding: 5 }}
        />
      </Link>

      <Menu
        mode="horizontal"
        defaultSelectedKeys={[]}
        items={[
          {
            key: 1,
            label: "Acerca de mí",
            onClick: () => {
              navigate("/about");
            },
          },
          {
            key: 2,
            label: "Contacto",
            onClick: () => {
              navigate("/contact");
            },
          },
        ]}
      />
    </HeaderAD>
  );
};

export default Header;
