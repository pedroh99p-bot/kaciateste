"use client";

import { useRef, useState } from "react";
import type { CommercialFeatureConfig } from "@/prospects/types";
import { Icon } from "@/components/ui/Icon";

export type InclusionPanel = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  price: string | null;
  features: CommercialFeatureConfig[];
};

type AccessibleTabsProps = {
  defaultTabId: string;
  panels: InclusionPanel[];
};

export function AccessibleTabs({ defaultTabId, panels }: AccessibleTabsProps) {
  const fallbackId = panels[0]?.id ?? "";
  const [activeId, setActiveId] = useState(
    panels.some((panel) => panel.id === defaultTabId) ? defaultTabId : fallbackId
  );
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activePanel = panels.find((panel) => panel.id === activeId) ?? panels[0];

  if (!activePanel) {
    return null;
  }

  function activate(index: number) {
    const normalizedIndex = (index + panels.length) % panels.length;
    const nextPanel = panels[normalizedIndex];
    const nextTab = tabRefs.current[normalizedIndex];

    setActiveId(nextPanel.id);
    nextTab?.focus();
    nextTab?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      activate(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      activate(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      activate(0);
    } else if (event.key === "End") {
      event.preventDefault();
      activate(panels.length - 1);
    }
  }

  return (
    <div className="inclusions-tabs">
      <div aria-label="Opções de atendimento" className="inclusions-tabs__rail" role="tablist">
        {panels.map((panel, index) => {
          const selected = panel.id === activePanel.id;
          return (
            <button
              aria-controls={`inclusion-panel-${panel.id}`}
              aria-selected={selected}
              className="inclusions-tabs__tab"
              id={`inclusion-tab-${panel.id}`}
              key={panel.id}
              onClick={() => setActiveId(panel.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              role="tab"
              tabIndex={selected ? 0 : -1}
              type="button"
            >
              <span className="inclusions-tabs__desktop-label">{panel.label}</span>
              <span className="inclusions-tabs__mobile-label">{panel.shortLabel}</span>
            </button>
          );
        })}
      </div>
      <div
        aria-labelledby={`inclusion-tab-${activePanel.id}`}
        className="inclusions-tabs__panel"
        id={`inclusion-panel-${activePanel.id}`}
        key={activePanel.id}
        role="tabpanel"
        tabIndex={0}
      >
        <div className="inclusions-tabs__summary">
          <div className="inclusions-tabs__selection">
            <span>Atendimento selecionado</span>
            <h3>{activePanel.label}</h3>
          </div>
          {activePanel.price ? <strong>{activePanel.price}</strong> : null}
        </div>
        <p className="inclusions-tabs__description">{activePanel.description}</p>
        <ul className="inclusions-tabs__features">
          {activePanel.features.map((feature) => (
            <li key={feature.id}>
              <span className="commercial-icon commercial-icon--small">
                <Icon name={feature.icon} />
              </span>
              <div>
                <strong>{feature.title}</strong>
                <p>{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
