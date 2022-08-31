import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-snippets extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-snippets:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-snippets is activated!');
  }
};

export default plugin;
