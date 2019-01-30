import {
  registerBpmnJSModdleExtension,
  registerBpmnJSPlugin
} from 'camunda-modeler-plugin-helpers';

import {
  BpmnJSPlugin,
  BpmnJSModdleExtension
}  from './bpmn';

registerBpmnJSPlugin(BpmnJSPlugin);
registerBpmnJSModdleExtension(BpmnJSModdleExtension);
