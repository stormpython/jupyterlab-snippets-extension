// Global imports
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { CommandPalette } from '@lumino/widgets';
import { LabIcon } from '@jupyterlab/ui-components';

// Local imports
import codeSvg from '../style/code.svg';

/**
 * Icon displayed to represent the extension
 */
const codeIcon = new LabIcon({
  name: 'jupyterlab:code-snippets',
  svgstr: codeSvg
});

/**
 * Initialization data for the jupyterlab-snippets extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-code-snippets',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: CommandPalette) => {
    console.log('JupyterLab extension jupyterlab-snippets is activated!');

    /**
     * TODO: Instantiate the `CodeSnippetsWidget`
     */
    const content = {};

    /**
     * TODO: Instantiate the `CodeSnippetsWidget` within the `MainAreaWidget`
     */
    const widget = {};

    /**
     * TODO: uncomment code once widget is defined
     */
    // widget.id = 'snippets-jupyterlab';
    // widget.title.icon = codeIcon;
    // widget.title.closable = true;

    // Add an application command
    const command = 'snippets:open';
    app.commands.addCommand(command, {
      label: 'Code Snippets',
      execute: () => {
        /**
         * TODO: Attach the widget to the main work area in the left panel
         * Hint: Use the `app.shell` API to add the widget to the left panel
         */
        // if (!widget.isAttached) {}
        // Activate the widget
        // app.shell.activateById(widget.id);
      }
    });

    // Add the command to the palette.
    palette.addItem({ command, category: 'Code Snippets' });
  }
};

export default extension;
