import * as ko from "knockout";

import "./object-editor-old-table-content.scss";
import {
  SurveyElementEditorOldTableContentModel,
  SurveyElementEditorTabModel,
} from "../questionEditors/questionEditor";
import { SurveyObjectProperty } from "../objectProperty";
const templateHtml = require("./object-editor-old-table-content.html");

export class ObjectEditorOldTableContentViewModel {
  constructor(
    public koProperties: ko.ObservableArray<SurveyObjectProperty>,
    public koTab: ko.Observable<SurveyElementEditorTabModel>,
    componentInfo: any
  ) {}
}

ko.components.register("svd-object-editor-old-table-content", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyElementEditorOldTableContentModel = params.elementEditorContent();
      return new ObjectEditorOldTableContentViewModel(
        model.koProperties,
        model.koTab,
        componentInfo
      );
    },
  },
  template: templateHtml,
});
