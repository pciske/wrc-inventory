// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";
import "./helpers/import.js";

import "./nav.js";

window.eval = global.eval = function() { throw new Error('eval is disabled') }

document.querySelector("#app").style.display = "block";