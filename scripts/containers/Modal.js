import html from "../html.js";
import ReactPopup from "https://dev.jspm.io/reactjs-popup";

const Modal = ({ children }) => {
  return html`
  <${ReactPopup}
    trigger=${html`
      <button type="button">How to use</button>
    `}
    modal
    closeOnDocumentClick
  >
    <div>
      ${html`
        ${children}
      `}
    </div>
  </${ReactPopup}>
  `;
};

export default Modal;
