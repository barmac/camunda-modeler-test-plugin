module.exports = getMenu;

function getMenu(app, state) {
  const menu = [
    {
      label: 'Close window (BPMN diagram only)',
      accelerator: 'CommandOrControl+Shift+Backspace',
      enabled: !!state.bpmn,
      action() {
        app.exit();
      }
    },
    {
      label: 'Enabled for CMMN only',
      enabled: !!state.cmmn
    },
    {
      label: 'Enabled for DMN only',
      enabled: !!state.dmn
    },
    {
      label: 'Click to cause an error in action',
      action() {
        throw new Error('Error in menu action');
      }
    }
  ];

  return menu;
}
