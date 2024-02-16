import { workData } from '../../utils/work-data';

import './WorkItemList.css';

export default function WorkItemList() {
  return (
    <div className="work-data-container">
      {workData.map((work) => {
        return (
          <div
            className="work-data-info"
            key={work.position + work.companyName}
          >
            <div className="work-period">{`${work.from} - ${work.to}`}</div>
            <div className="work-description">
              <p className="work-description-position">{work.position}</p>
              <p className="work-description-company">at {work.companyName}</p>
              <div className="work-description-resp">
                <span className="main-resp">Main responsibilities:</span>
                <ul className="main-resp-list">
                  {work.responsibilities.map((resp, idx) => {
                    return (
                      <li key={idx} className="main-resp-item">
                        <span>{resp}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
