import * as ko from "knockout";

import "./string.scss";
import { SurveyStringPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./string.html");

export class PropertyEditorStringViewModel {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public koInputType: any,
    public defaultValue: any,
    public koMaxLength: any,
    public displayName: string,
    public listName: string,
    public dataList: Array<string>,
    public koDisplayError: any,
    public getLocString: any,
    public koErrorText: any,
    public onKeydown: any,
    public afterRender: () => void
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-string", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyStringPropertyEditor = params.model;

      return new PropertyEditorStringViewModel(
        model.koValue,
        model.readOnly,
        model.koInputType,
        model.defaultValue,
        model.koMaxLength,
        model.displayName,
        model.listName,
        model.property.dataList,
        model.koDisplayError,
        model.getLocString,
        model.koErrorText,
        model.onInputKeydown,
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
