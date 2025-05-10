const keys = {
  // "normal" keys are just keys typed on the page
  // for exemple " " is when space is typed
  normal: {
    " ": (event, element) => {
      alert("u pressed space key");
    },
  },

  // this is for keys when shift is pressed
  shortcut: {},
};

const commands = {
  // the key is used to specify the name of the command
  test: (command) => {
    alert("you entered 'test' command");

    // and then the return value with type and message
    return {
      type: "success", // "success" = green text, "error" = red text
      message: "command executed", // the text to show in the command line
    };
  },
};

function custom_init() {
  // here some code
}
