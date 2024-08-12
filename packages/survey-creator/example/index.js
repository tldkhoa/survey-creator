if (!window["%hammerhead%"]) {
  //   var titleAdorner = {
  //     getCss: () => {
  //       return "mu_title";
  //     },
  //     afterRender: (domEl, model) => {
  //       var decoration = document.createElement("div");
  //       decoration.innerHTML = "";
  //       domEl.appendChild(decoration);
  //     }
  //   };

  //   SurveyCreator.registerAdorner("title", titleAdorner);

  // SurveyCreator.editorLocalization.currentLocale = "fr";

  // SurveyCreator.removeAdorners(["mainRoot"]);

  // Survey.Survey.cssType = "bootstrap";
  // Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  // SurveyCreator.editorLocalization.currentLocale = "hu";
  // SurveyCreator.StylesManager.applyTheme("winter");

  //color customization
  var mainColor = "#0065FF";
  var mainHoverColor = "#60C5FB";
  var textColor = "#4a4a4a";
  var headerColor = "#4a4a4a";
  var headerBackgroundColor = "#4a4a4a";
  var bodyContainerBackgroundColor = "#f8f8f8";

  var defaultThemeColorsSurvey = Survey.StylesManager.ThemeColors["default"];
  defaultThemeColorsSurvey["$main-color"] = mainColor;
  defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
  defaultThemeColorsSurvey["$text-color"] = textColor;
  defaultThemeColorsSurvey["$header-color"] = headerColor;
  defaultThemeColorsSurvey["$header-background-color"] = headerBackgroundColor;
  defaultThemeColorsSurvey[
    "$body-container-background-color"
  ] = bodyContainerBackgroundColor;

  var defaultThemeColorsEditor =
    SurveyCreator.StylesManager.ThemeColors["default"];
  defaultThemeColorsEditor["$primary-color"] = mainColor;
  defaultThemeColorsEditor["$secondary-color"] = mainColor;
  defaultThemeColorsEditor["$primary-hover-color"] = mainHoverColor;
  defaultThemeColorsEditor["$primary-text-color"] = textColor;
  defaultThemeColorsEditor["$selection-border-color"] = mainColor;

  Survey.StylesManager.applyTheme();
  SurveyCreator.StylesManager.applyTheme();
  //
  
  SurveyCreator.SurveyJSONEditor.aceBasePath = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/";


  var options = {
    // questionTypes: [
    //   "text",
    //   "checkbox",
    //   "radiogroup",
    //   "dropdown",
    //   "comment",
    //   "rating",
    //   "imagepicker",
    //   "boolean",
    //   "html",
    //   "file",
    //   "expression"
    // ],
    // pageEditMode: "single"
  };
  var creator = new SurveyCreator.SurveyCreator("editorElement", options);
  creator.showToolbox = "right";
  creator.showPropertyGrid = "right";
  creator.rightContainerActiveItem("toolbox");
  creator.toolbarItems.splice(2, 5);
  creator.placeholderHtml = `
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
      <img src="./drag-image.svg"/>
      <div style="font-size: 16px; max-width: 210px;">
        Drag and drop a question to start designing your form
      </div>
    </div>`;

  creator.saveSurveyFunc = function(saveNo, callback) {
    alert("ok");
    callback(saveNo, true);
  };

  window.creator = creator;
}
