import CetificationsItem from './CertificationsItem';

import { certificationsData } from '../../utils/certifications-data';

import './CertificationsItemList.css';

export default function CetificationsItemList() {
  return (
    <>
      <ul className="certifications-item-list">
        {certificationsData.map((cert) => (
          <CetificationsItem key={cert.title} certification={cert} />
        ))}
      </ul>
      <div className="cert-btn-container">
        <a
          className="btn cert-btn"
          target="_blank"
          href="https://www.linkedin.com/in/todor-diklich-bb5999121/details/certifications/"
        >
          View All &rarr;
        </a>
      </div>
    </>
  );
}
