import React from "react";
import _ from "lodash";

const Card = ({ link }) => {
  return (
    <>
      <h2>{link.platform}</h2>
      <input value={link.link} />
    </>
  );
};

export function EjemploRender(props) {
  const links = [
    { platform: "Github", link: "pedrohtp" },
    { platform: "Facebook", link: "anahtp" },
  ];

  const username = "Pedro";

  return (
    <div className="App">
      {/* RENDERIZAR VALOR  */}
      <p>{username}</p>

      {/* Condicional solo con if */}
      {!_.isEmpty(links) && <marquee>HAY</marquee>}

      {/* Condicional con if else */}
      {links.length ? <marquee>HAY</marquee> : <marquee>No Hay</marquee>}

      {/* Renderizar una lista de componentes */}

      {links.map((link) => (
        <Card link={link} />
      ))}
    </div>
  );
}

export default EjemploRender;
