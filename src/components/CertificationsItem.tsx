import { ReactNode } from 'react';

import { CertificationType } from '../utils/certifications-data';

import './CertificationsItem.css';

type CetificationsItemProps = {
  children?: ReactNode;
  certification: CertificationType;
};

export default function CetificationsItem({
  certification,
}: CetificationsItemProps) {
  return (
    <div className="cert-category-content">
      <img
        className="cert-picture"
        src={certification.image}
        alt={`${certification.provider} logo`}
      />
      <div className="cert-title">
        <p className="cert-title-text">{certification.title}</p>

        <p className="cert-author"> by {certification.author}</p>
      </div>
    </div>
  );
}
