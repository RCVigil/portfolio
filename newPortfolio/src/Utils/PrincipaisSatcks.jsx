import React from "react";
import "../Styles/Utils/PrincipaisSatacks.sass";
import Javascript from "./StacksImages/Javascript";
import HTML from "./StacksImages/HTML";
import CSS from "./StacksImages/CSS";
import ReactImg from "./StacksImages/ReactImg";
import RtestingL from "./StacksImages/RtestingL";

const PrincipaisSatcks = () => {
  return (
    <div className="divStacksPrinc d-flex justify-content-evenly flex-wrap">
      <h1 className="h1PStacks">
        Principais Stacks aprendidas em minha carreira!
      </h1>

      <table className="tableBody1">
        <tbody className="tBody1">
          <tr className="tr_tBody1">
            <td className="td_tBody1">
              <Javascript/>
            </td>

            <td className="td_tBody1">
              <HTML/>
            </td>

            <td className="td_tBody1">
              <CSS/>
            </td>

            <td className="td_tBody1">
              <ReactImg/>
            </td>

            <td className="td_tBody1">
              <RtestingL/>
            </td>

            <td className="td_tBody1">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://git-scm.com/"
              >
                <img
                  alt="Imagem Git"
                  className="img_tBody"
                  src="https://camo.githubusercontent.com/ddd323c6c51fbc9a81fcbb60fe25a588ab59fdd6567b7e827f4d2d5c4e09f6a1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d706c61696e2e737667"
                  data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                />
                <strong>Git</strong>
              </a>
            </td>

            <td className="td_tBody1">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://github.com/"
              >
                <img
                  alt="Imagem GitHub"
                  className="img_tBody"
                  src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
                  data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />
                <strong>GitHub</strong>
              </a>
            </td>

            <td className="td_tBody1">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://nodejs.org/en/docs/"
              >
                <img
                  alt="Imagem Node.js"
                  className="img_tBody"
                  src="https://camo.githubusercontent.com/288cace72126df58aaeaa75627898785885858d54b03cb15ea3353a515642204/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6e6f64656a732f6e6f64656a732d69636f6e2e737667"
                  data-canonical-src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                />
                <strong>Node.js</strong>
              </a>
            </td>

            <td className="td_tBody1">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://jestjs.io/pt-BR/"
              >
                <img
                  alt="Imagem Jest"
                  className="img_tBody"
                  src="https://camo.githubusercontent.com/ce0a32825268b09cd5e0fc7c2a09c587a708491427cb794cade8f1866f7284c6/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6a6573746a73696f2f6a6573746a73696f2d69636f6e2e737667"
                  data-canonical-src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                />
                <strong>Jest</strong>
              </a>
            </td>

            <td className="td_tBody1">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://redux.js.org/"
              >
                <img
                  alt="Imagem Redux"
                  className="img_tBody"
                  src="https://camo.githubusercontent.com/7b7f04b16cc2d2d4a32985710e4d640985337a32bbb1e60cdacede2c8a4ae57b/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656475782e737667"
                  data-canonical-src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                />
                <strong>Redux</strong>
              </a>
            </td>

            <td className="td_tBody1">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://vercel.com"
              >
                <svg
                  className="img_tBody"
                  // width="76"
                  // height="65"
                  viewBox="0 0 72 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
                </svg>
                <strong>Vercel</strong>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="divH3">
        Qualquer dúvida, em relação à tecnologia é só clicar no nome, que você
        será redirecionado ao site Oficial
      </h3>
    </div>
  );
};

export default PrincipaisSatcks;
