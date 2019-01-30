/**
 * A bpmn-js extension service, providing the actual
 * plug-in feature.
 */
function TestAllService(canvas) {
  try {
    const img = document.createElement('img');

    img.src = 'app-plugins://camunda-modeler-test-plugin/assets/logo.png';
    img.width = '50';
    img.className = 'camunda-logo';

    canvas.getContainer().appendChild(img);
  } catch (error) {
    window.alert('Failed to load test all extension module. Open dev tools for error.');
    console.error(error);
  }
}

TestAllService.$inject = [ 'canvas' ];


/**
 * The service and its dependencies, exposed as a bpmn-js module.
 */
export default {
  __init__: [ 'testAll' ],
  testAll: [ 'type', TestAllService ]
};
