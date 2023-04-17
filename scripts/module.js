const MODULE_ID = 'my-journal-scaler';
const MODULE_NAME = "My Journal Scaler";

function getSetting (settingName) {
  return game.settings.get(MODULE_ID, settingName)
}

//CONFIG.debug.hooks = true;

Hooks.once('ready', () => {
  if(!game.modules.get('lib-wrapper')?.active && game.user.isGM)
      ui.notifications.error("The 'My Journal Scaler' module requires the 'libWrapper' module. Please install and activate it.");
});

// Overriding original mousewheel behavior
Hooks.once('setup', function () {
    libWrapper.register(
      MODULE_ID,
      'MouseManager.prototype._onWheel',
        function(existing_onWheel, event) {
          _onWheel_override.bind(this)(event);
          return existing_onWheel.bind(this)(event);
      },
      'WRAPPER',
    )
  }
)

// renderJournalSheet triggers on new opened Journal Sheets, pre-loaded ones and/or GM Sheet journals.
// This functionality tags all of these sheets that have an image with mouse controls for zoom in and out.
Hooks.on('renderJournalSheet', function() {
  let journal_images = document.getElementsByClassName('journal-entry-page image');
  let sensitivity = 2; // Configurable?
  let pos_x;
  let pos_y;
  let init_x;
  let init_y;
  // Make sure all open journal sheet images receive this functionality (GM Screen support, and other triggers)
  for (var i = 0; i < journal_images.length; i++) {
    let journal_image = journal_images[i];
    let is_holding = false;
    // Event Listener that triggers on mousedown of RIGHT click (we could also use middle-mouse button?)
    journal_image.addEventListener("mousedown", (event) => {
      if (!is_holding && event.button === 2) {
        is_holding = true;
        journal_image.style.cursor = 'move';
        console.log(journal_image.style);
        let pos_x_str = journal_image.style.backgroundPositionX;
        let pos_y_str = journal_image.style.backgroundPositionY;
        pos_x = pos_x_str == '' ? 50 : Number(pos_x_str.slice(0, pos_x_str.length-1));
        pos_y = pos_y_str == '' ? 50 : Number(pos_y_str.slice(0, pos_y_str.length-1));
        init_x = event.offsetX;
        init_y = event.offsetY;
      }
    });
    journal_image.addEventListener("mousemove", (event) => {
      if (is_holding) {
        // update position based on last position offset
        journal_image.style.backgroundPositionX = `${pos_x + (event.offsetX - init_x)/sensitivity}%`;
        journal_image.style.backgroundPositionY = `${pos_y + (event.offsetY - init_y)/sensitivity}%`;
      }
    });
    // release and restore cursor on mouse release
    document.addEventListener("mouseup", (event) => {
      if (is_holding) {
        is_holding = false;
        journal_image.style.cursor = '';
      }
    });
  }
})


// Function that overrides the original mousewheel behavior.
// Original function: KeyboardManager._onWheel, line 2834 from foundry.js
function _onWheel_override(event){
  // Check if control is pressed.
  // If not, just exit the function.
  if (event.ctrlKey == false) { return; };

  // Get the list of all windows currently open that are journal-sheet windows
  let jrn_sheet_windows = document.getElementsByClassName('sheet journal-sheet');
  console.log(jrn_sheet_windows);

  // If there are none, just exit the function.
  if (jrn_sheet_windows.length == 0) {
    return;
  };

  // Trying to find the window hovered with the mouse
  // among the opened journal sheet windows.
  let i;
  let journal_win;
  let foundit = false;
  for (i = 0; i < jrn_sheet_windows.length; i++){
    journal_win = jrn_sheet_windows[i];
    if (journal_win.contains(event.target)){
      foundit = true;
      break;
    }
  };

  // If the window hovered with the mouse isn't found among the all of the
  // open journal sheet windows, just exit the program.
  if (foundit == false) { return; };

  // If the code reaches this point, we know that the hovered window is a
  // journal sheet window, and that the ctrl key was pressed when scrolling.
  // Therefore, we can increase/decrease the font size!

  // Find the direction of the mousewheel scroll
  let which_dir = '';
  if ((event.wheelDelta > 0) | (event.deltaY < 0)){
    which_dir = 'bigger';
  }
  else if ((event.wheelDelta < 0) | (event.deltaY > 0)) {
    which_dir = 'smaller';
  }

  // Check if this is an image journal entry or just regular text
  if (journal_win.querySelector('figure')) {
    _onWheel_imageResize(journal_win, which_dir);
  } else {
    _onWheel_textResize(journal_win, which_dir);
  }

  return
}


// Increases font size of journal entries depending on the direction
function _onWheel_textResize(journal_win, which_dir) {
  // Get the DOM element of the journal editor and change its style
  console.log(journal_win);
  let journal_editor_all = Array.from(journal_win.getElementsByClassName('journal-page-content')).concat(Array.from(journal_win.getElementsByTagName('textarea')))//Array.from(journal_win.getElementsByTagName('div'))
  let current_zoom_str = journal_editor_all[0].style.zoom;
  let journal_editor_h1 = Array.from(journal_win.getElementsByTagName('h1'));//Array.from(journal_win.getElementsByTagName('div'))
  let journal_editor_h2 = Array.from(journal_win.getElementsByTagName('h2'));
  let journal_editor_h3 = Array.from(journal_win.getElementsByTagName('h3'));
  let journal_editor_h4 = Array.from(journal_win.getElementsByTagName('h4'));
  let journal_editor_h5 = Array.from(journal_win.getElementsByTagName('h5'));
  let journal_editor_h6 = Array.from(journal_win.getElementsByTagName('h6'));
  let journal_editor_h = journal_editor_h1.concat(journal_editor_h2,journal_editor_h3,journal_editor_h4,journal_editor_h5,journal_editor_h6);
  let current_zoom_h = journal_editor_h[0].style.zoom;
  let current_size_str = current_zoom_str == '' ? 1 : Number(current_zoom_str);
  let current_size_h = current_zoom_h == '' ? 1 : Number(current_zoom_h);
  if (which_dir == 'bigger') {
    let aZoom = Number(current_size_str)+0.05;
    let hZoom = Number(current_size_h)-0.02;
    journal_editor_all.forEach(paraf => paraf.style.zoom = `${String(aZoom)}`);
    journal_editor_h.forEach(h => h.style.zoom = `${String(hZoom)}`);
  }
  else {
    let aZoom = Number(current_size_str)-0.05;
    let hZoom = Number(current_size_h)+0.02;
    journal_editor_all.forEach(paraf => paraf.style.zoom = `${String(aZoom)}`);
    journal_editor_h.forEach(h => h.style.zoom = `${String(hZoom)}`);
  }
}

// Increases image size of image journal entries depending on the direction
function _onWheel_imageResize(journal_win, which_dir) {
  // Get the DOM element of the image and change its style
  let journal_image_all = Array.from(journal_win.getElementsByTagName('img'))
  let current_size_str = journal_image_all[0].style.maxWidth;
  let current_size = current_size_str.includes("%") ? Number(current_size_str.slice(0, current_size_str.length-1)) : 100;
  if (which_dir == 'bigger') {
    journal_image_all.forEach(im => im.style.maxWidth = `${String(current_size + 5)}%`)
  }
  else {
    journal_image_all.forEach(im => im.style.maxWidth = `${String(current_size - 5)}%`)
  }
}
