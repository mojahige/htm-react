import html from '../html.js';

/**
 * @param {object} props
 * @param {string} props.value
 * @param {Function} props.onChange
 * @param {boolean|undefined} props.readonly
 * @param {string|undefined} props.placeholder
 */
const ToolTextarea = ({ value, onChange, readonly, placeholder }) => {
  const onChangeHandler = event => {
    if (onChange && readonly !== true) {
      onChange(event.currentTarget.value);
    }
  };

  return !readonly
    ? html`
        <textarea
          className="ToolTextarea"
          value=${value}
          onChange=${onChangeHandler}
          placeholder=${placeholder ? placeholder : ''}
          spellCheck="false"
        />
      `
    : html`
        <textarea
          className="ToolTextarea"
          value=${value}
          readOnly=${readonly}
          placeholder=${placeholder ? placeholder : ''}
          spellCheck="false"
        />
      `;
};

export default ToolTextarea;
