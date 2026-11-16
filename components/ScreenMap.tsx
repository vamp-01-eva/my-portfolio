import type { Screens } from "@/content/projects";

export function ScreenMap({ screens }: { screens: Screens }) {
  if (!screens.panels) return null;
  return (
    <div className="screen-map">
      {screens.panels.map((panel) => (
        <div className="screen-panel" key={panel.title}>
          <p className="screen-panel__title">{panel.title}</p>
          <ul>
            {panel.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
