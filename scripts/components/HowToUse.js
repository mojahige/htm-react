import html from '../html.js';
import Modal from '../containers/Modal.js';

const HowToUse = () => {
  const Description = () => html`
    <ol className="HowToUse">
      <li>
        上のテキストエリアに文字を入力するよ。<br />
        <small>改行を1つの区切りとして扱うよ</small>
      </li>
      <li>
        下に入力した文字が li で囲まれて表示されるよ。
      </li>
      <li>
        下に表示された文字をコピペして使うよ。
      </li>
    </ol>
  `;

  return html`
    <${Modal} openLabel="How to use? 👊">
      <${Description} />
    <//>
  `;
};

export default HowToUse;
