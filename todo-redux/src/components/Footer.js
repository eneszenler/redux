import React from "react";
import {Button} from "cactus-btns";
import "cactus-btns/dist/index.css";

function Footer() {
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
      <Button type="paper" text="Paper Button" />
    </footer>
  );
}

export default Footer;
