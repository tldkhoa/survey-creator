import * as ko from "knockout";

import "./expression.scss";
import { SurveyPropertyConditionEditor } from "../propertyEditors/propertyConditionEditor";
const templateHtml = require("./expression.html");

export class PropertyEditorExpressionViewModel {
  constructor(
    public hasAceEditor: boolean,
    public getLocString: (name: string) => any,
    public koValue: ko.Observable<any>,
    public availableQuestions: any[],
    public editingObject: any,
    public model: SurveyPropertyConditionEditor,
    public koTextValue: any,
    public showHelpText: any,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-expression", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyConditionEditor = params.model;

      return new PropertyEditorExpressionViewModel(
        model.hasAceEditor,
        model.getLocString,
        model.koValue,
        model.availableQuestions,
        model.editingObject,
        model,
        model.koTextValue,
        model.showHelpText,
        () => {
          typeof params.afterRender === "function" &&
            params.afterRender.call(model, componentInfo);

          typeof model.koAfterRender === "function" &&
            model.koAfterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
