import { ReactWidget } from '@jupyterlab/apputils';

import React from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface SnippetsProps {
  snippets: any[];
}

const SnippetsComponent = (props: SnippetsProps): JSX.Element => {
  return (
    <div>
      <ul>
        {props.snippets.map(snippet => {
          return <li>{snippet}</li>;
        })}
      </ul>
    </div>
  );
};

/**
 * React component for displaying code snippets
 */
export class SnippetsWidget extends ReactWidget {
  constructor() {
    super();
    this.addClass('jl-snippets');
  }

  render(): JSX.Element {
    return <SnippetsComponent snippets={[1, 2, 3, 4, 5, 6, 7]} />;
  }
}
