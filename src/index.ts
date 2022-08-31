import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { CommandPalette, Widget } from '@lumino/widgets';
import { LabIcon } from '@jupyterlab/ui-components';

import codeSvg from '../style/code.svg';

/**
 * Icon displayed to represent the extension
 */
const codeIcon = new LabIcon({
  name: 'jupyterlab:snippets',
  svgstr: codeSvg
});

/**
 * Initialization data for the jupyterlab-snippets extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-snippets',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: CommandPalette) => {
    console.log('JupyterLab extension jupyterlab-snippets is activated!');

    const content = new Widget();

    const widget = new MainAreaWidget({ content });
    widget.id = 'snippets-jupyterlab';
    widget.title.icon = codeIcon;
    widget.title.closable = false;

    // Add an application command
    const command = 'snippets:open';
    app.commands.addCommand(command, {
      label: 'Code Snippets',
      execute: () => {
        if (!widget.isAttached) {
          // Attach the widget to teh main work area if it's not there
          app.shell.add(widget, 'left');
        }
        // Activate the widget
        app.shell.activateById(widget.id);
      }
    });

    // Add the command to the palette.
    palette.addItem({ command, category: 'Code Snippets' });
  }
};

export default extension;
