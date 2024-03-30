import * as React from "react";

interface HorizontalTimelineProps {
  items: TimelineItem[];
}

const Package: React.FC<HorizontalTimelineProps> = ({ items }) => (
  <div className="timeline">
    {(items ?? []).map((item, index) => (
      <div key={`${item.title}-${index}`}>
        <div className="timestamp">
          <span className="date">{item.status}</span>
        </div>

        <div className={`status ${item.status}`}>
          <span>{item.title}</span>
        </div>
      </div>
    ))}
  </div>
);

export default Package;
