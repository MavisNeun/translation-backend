**Note the formatting rules in ../rules/formatting_rules.md and plan_rules.md**
@/00_ProjectsFocus/DeepTranslate

# browser extension for transaltion
## make a plan and document in IMPLEMENTATION_PLAN.md

### Examples for front-end and back-end components are located in:
@/00_ProjectsFocus/DeepTranslate/examples
use/copy only the examples for front-end and back-end IMPLEMENTATION
use/copy only the examples/UI_example.html for the popup
install a denpendies in the main project folder where IMPLEMENTATION_PLAN.md is located

## browser extension features
When selecting a word or sentence on a website, a small popup icon should appear which opens a translation mask on a click

### The browser extension should work on two ways:
#### single word
If a single word has been selected, the translation of linguee (linguee package) should be made. The backend script provides several translation and meaning alternatives based on a JSON list
#### sentence
If a sentence has been selected, the translation should be made over deepL (free-deepl package)

### switch translation service
You can switch on the UI on the browser extension between DeepL and linguee (most left section of the example UI )

### Add further functionalities 
Add additional functionalities that are recognizable based on the example .. examples/UI_example.html interface.

**Note the formatting rules in ../rules/formatting_rules.md and plan_rules.md**

At the same time, carry out a review of whether the project is so realizable and make appropriate proposals

Make a plan and after approval add this plan to IMPLEMENTATION_PLAN.md before proceeding






Create IMPLEMENTATION_PLAN.md in @/00_ProjectsFocus/DeepTranslate that details a production-ready browser extension for on-page translation. The plan must strictly follow ../rules/formatting_rules.md and ../rules/plan_rules.md, incorporate only the front-end and back-end patterns found in @/00_ProjectsFocus/DeepTranslate/examples, and copy @/00_ProjectsFocus/DeepTranslate/examples/UI_example.html verbatim for the popup. All dependencies must be installed in the project root where IMPLEMENTATION_PLAN.md resides.

Core behaviour: when any text is selected on any webpage, inject a small floating icon; clicking it opens a modal overlay.  
- Single-word selection → call backend endpoint /translate/linguee using the linguee package; return JSON with multiple meanings and alternatives.  
- Multi-word selection → call backend endpoint /translate/deepl using free-deepl package.  
- Top-left toggle in the popup (copied from UI_example.html) lets the user override the automatic engine choice.

Additional features must be inferred from UI_example.html and described in the plan; include persistence of user choices, dark-mode detection, keyboard shortcuts, and rate-limit handling.

Conclude the plan with a feasibility audit
At the same time, carry out a review of whether the project is so realizable and make appropriate proposals

Make a plan and after approval add this plan to IMPLEMENTATION_PLAN.md before proceeding, do not code
