import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { toggle } = useAlert();

  return (
    <div>
      <h1>Пример с Context</h1>
      <button onClick={toggle} className="btn btn-success">
        Показать alert
      </button>
    </div>
  );
}
