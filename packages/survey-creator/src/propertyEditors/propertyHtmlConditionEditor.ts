import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyNestedPropertyEditor } from "./propertyNestedPropertyEditor";

import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyHtmlConditionEditor extends SurveyNestedPropertyEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "htmlconditions";
  }
  public get editorTypeTemplate(): string {
    return "nested-items";
  }
  protected createNewItem(): any {
    return new Survey.HtmlConditionItem();
  }
  protected getColumnsProperties(): Array<Survey.JsonObjectProperty> {
    return this.getPropertiesByNames("htmlconditionitem", [
      "expression",
      "html"
    ]);
  }
}

SurveyPropertyEditorFactory.registerEditor("htmlconditions", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyHtmlConditionEditor(property);
});
