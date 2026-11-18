import type { Screens } from "@/content/projects";
import styles from "./ScreenMap.module.css";

export function ScreenMap({ screens }: { screens: Screens }) {
  if (!screens.panels) return null;
  return (
    <div className={styles.map}>
      {screens.panels.map((panel) => (
        <div className={styles.panel} key={panel.title}>
          <p className={styles.title}>{panel.title}</p>
          <ul className={styles.list}>
            {panel.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
