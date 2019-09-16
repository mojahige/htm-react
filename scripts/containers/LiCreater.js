import html from '../html.js';
import React from 'https://dev.jspm.io/react';
import ToolTextarea from '../components/ToolTextarea.js';

const LiCreater = () => {
  const [value, setValue] = React.useState("");

  /**
   * @param {string} value 
   */
  const onChange = value => {
    setValue(value);
  };

  /**
   * @param {string} accumulator 
   * @param {string} currentValue 
   * @returns {string}
   */
  const transReducer = (accumulator, currentValue) => {
    const row = `<li>\n  ${currentValue}\n</li>`;

    return accumulator === '' ? `${row}` : `${accumulator}\n${row}`;
  };

  /**
   * @param {string} originalValue 
   */
  const transformValue = originalValue => {
    return originalValue
      .split(/\r?\n/g)
      .filter(value => value !== '')
      .reduce(transReducer, '');
  };

  return html`
    <${React.Fragment}>
      ${html`
        <${ToolTextarea}
          value=${value}
          onChange=${onChange}
          placeholder=${'入力する方🐶'}
        />
      `}
      <hr />
      ${html`
        <${ToolTextarea}
          value=${transformValue(value)}
          placeholder=${'変換された文字が表示されるよ🐶'}
          readonly=${true}
        />
      `}
    </${React.Fragment}>
  `;
};

export default LiCreater;
