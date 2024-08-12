import * as ko from "knockout";

import "./property-editor.scss";
import { SurveyPropertyEditorBase } from "../propertyEditors/propertyEditorBase";
const templateHtml = require("./property-editor.html");

export class PropertyEditorViewModel {
  public showHelpText = ko.observable(false);
  public toggleShowHelpText = () => {
    this.showHelpText(!this.showHelpText());
  };
  constructor(
    public showDisplayNameOnTop: boolean,
    public displayName: string,
    public contentTemplateName: string,
    public helpText: string,
    public model: SurveyPropertyEditorBase,
    public afterRender: any
  ) {}
}

ko.components.register("svd-property-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyEditorBase = params.model;
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorViewModel(
        model.showDisplayNameOnTop,
        model.displayName,
        model.contentTemplateName,
        model.propertyHelpText,
        model, //TODO should transform to separate params
        () => {
          afterRender.call(model, componentInfo, {
            property: model.property,
            editor: model,
          });
        }
      );
    },
  },
  template: templateHtml,
});
