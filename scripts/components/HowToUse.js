import html from "../html.js";
import Modal from "../containers/Modal.js";

const HowToUse = () => {
  const Description = () => html`
    <ol className="HowToUse">
      <li key="a">
        上のテキストエリアに文字を入力するよ。<br />
        <small>改行を1つの区切りとして扱うよ</small>
      </li>
      <li key="b">
        下に入力した文字が li で囲まれて表示されるよ。
      </li>
    </ol>
  `;

  return html`
    <${Modal}>
      <${Description} />
    <//>
  `;
};

export default HowToUse;
