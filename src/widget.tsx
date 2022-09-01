// Global imports
import { ReactWidget } from '@jupyterlab/apputils';
import React from 'react';

// Local imports
import snippets from './snippets';

// Types
export interface ICodeSnippet {
  name: string;
  description: string;
  language: string;
  // code separated by a new line
  code: string[];
  id: number;
}

export interface ICodeSnippetsProps {
  snippets: ICodeSnippet[];
}

/**
 * React component for displaying code snippet info
 */
/* 
const CodeSnippet = (props: ICodeSnippet): JSX.Element => {
  return (
    <div id={props.id.toString()} className={'jl-code-snippets-item'}>
      <div className={'jl-code-snippets-item-info-container'}>
        <div className={'jl-code-snippets-item-language'}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            height="40px"
            width="35px"
          />
        </div>
        <div className={'jl-code-snippets-item-info'}>
          <div className={'jl-code-snippets-item-info-name'}>{props.name}</div>
          <hr className={'jl-code-snippets-divider'} />
          <div className={'jl-code-snippets-item-info-description'}>
            {props.description}
          </div>
        </div>
      </div>
      <div className={'jl-code-snippets-item-code'}>
        <code className="python">
          <pre>{props.code}</pre>
        </code>
      </div>
    </div>
  );
};
*/

/**
 * React component for displaying a list of code snippets
 */
const CodeSnippetsComponent = (props: ICodeSnippetsProps): JSX.Element => {
  return (
    <div>
      <ul className="jl-code-snippets-list">
        {/* TODO: Create a list of `CodeSnippets` to display */}
      </ul>
    </div>
  );
};

/**
 * Wrapper class for JupyterLab Snippets ReactWidget
 */
export class CodeSnippetsWidget extends ReactWidget {
  constructor() {
    super();
    this.addClass('jl-code-snippets');
  }

  render(): JSX.Element {
    return <CodeSnippetsComponent snippets={snippets} />;
  }
}
