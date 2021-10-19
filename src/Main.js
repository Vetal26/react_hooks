import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { show } = useAlert();

  return (
    <div>
      <h1>Пример с Context</h1>
      <button onClick={() => show("text")} className="btn btn-success">
        Показать alert
      </button>
    </div>
  );
}
