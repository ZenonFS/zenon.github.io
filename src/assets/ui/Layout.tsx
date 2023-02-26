import { FC } from "react";
import { ConfigProvider, Layout as LayoutAD, theme } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const { Content, Footer } = LayoutAD;

interface IAppProps {}

const Layout: FC<IAppProps> = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // NEUTRAL
          borderRadius: 6,
          borderRadiusSM: 4,
          borderRadiusLG: 8,
          borderRadiusXS: 2,
          boxShadow:
            "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
          boxShadowSecondary:
            "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
          // BG
          colorBgContainer: "#141414",
          colorBgElevated: "#1f1f1f",
          colorBgLayout: "#000000",
          colorBgSpotlight: "#424242",
          colorBgMask: "rgba(0, 0, 0, 0.45)",
          // Text
          colorText: "rgba(255, 255, 255, 0.85)",
          colorTextSecondary: "rgba(255, 255, 255, 0.65)",
          colorTextTertiary: "rgba(255, 255, 255, 0.45)",
          colorTextQuaternary: "rgba(255, 255, 255, 0.25)",
          // Border
          colorBorder: "#424242",
          colorBorderSecondary: "#303030",
          // Fill
          colorFill: "rgba(255, 255, 255, 0.18)",
          colorFillSecondary: "rgba(255, 255, 255, 0.12)",
          colorFillTertiary: "rgba(255, 255, 255, 0.08)",
          colorFillQuaternary: "rgba(255, 255, 255, 0.04)",
          //
          colorPrimary: "#f4801a",
          colorPrimaryBg: "#2a1b11",
        },
      }}
    >
      <LayoutAD
        className="layout"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      >
        <Header />
        <Content
          style={{
            padding: "50px",
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ZenonFS ©2023 Created by ZenonFS
        </Footer>
      </LayoutAD>
    </ConfigProvider>
  );
};

export default Layout;
