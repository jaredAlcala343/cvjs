import React from "react";
import "./descargables.css";

const downloadableItems = [
  {
    name: "Scaner IP",
    path: "/scanerip.sh",
    icon: "📄"
  },
  {
    name: "Curriculum English",
    path: "/CV English.pdf",
    icon: "📄"
  },
  {
    name: "Curriculum Español",
    path: "/CV Español.pdf",
    icon: "📄"
  }
];

export default function Descargables() {
  return (
    <section className="descargables-section">
      <div className="descargables-container">
        <h2 className="descargables-title">Descargables</h2>
        <ul className="descargables-list">
          {downloadableItems.map((item, idx) => (
            <li className="descargable-item" key={idx}>
              <span className="descargable-name">
                <span className="descargable-icon">{item.icon}</span>
                {item.name}
              </span>
              <a
                className="descargable-link"
                href={item.path}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}