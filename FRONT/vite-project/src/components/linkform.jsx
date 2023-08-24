import React from "react";

function LinkForm() {
  return (
    <div>
      <div>
        <h1>Customize your links</h1>
        <p>
          add/eddit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      <div>
        <button> + Add new link</button>
        <div>
          <form>
            <h2>Link#</h2>
            <button>platform</button>
            <input type="text" placeholder="link"></input>
          </form>
          <button>save</button>
        </div>
      </div>
    </div>
  );
}

export default LinkForm