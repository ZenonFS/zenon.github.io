import { Divider, Image } from "antd";
import { FC } from "react";

import ZENON from "./../../../assets/images/ZENON.png";

const Home: FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Image src={ZENON} style={{ height: "50vh" }} />
      <Divider type="vertical" style={{ height: "50vh" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50vw",
        }}
      >
        <h1>Portafolio en Construcción</h1>
        <p>
          Por el momento se puede consultar el Curriculum y la tarjeta de
          contacto.
        </p>
      </div>
    </div>
  );
};

export default Home;
