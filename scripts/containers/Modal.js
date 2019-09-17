import html from '../html.js';
import ReactPopup from 'https://dev.jspm.io/reactjs-popup';

/**
 * @param {object} props
 * @param {object} React.createElement でできたやつ
 * @param {string|undefined} openLabel
 */
const Modal = ({ children, openLabel }) => {
  return html`
  <${ReactPopup}
    trigger=${html`
      <button className="ModalTriggerButton" type="button">
        ${openLabel ? openLabel : 'Modal open'}
      </button>
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
