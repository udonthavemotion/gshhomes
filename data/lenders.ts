export interface Lender {
  slug: string;
  displayName: string;
  logoPath: string;
  logoAlt: string;
  websiteUrl?: string;
}

export const LENDERS: Lender[] = [
  {
    slug: 'lender-1',
    displayName: '21st Mortgage Corporation',
    logoPath: '/assets/images/financinglenders/financelenders.png',
    logoAlt: '21st Mortgage Corporation logo',
  },
  {
    slug: 'lender-2',
    displayName: 'Assurance Financial',
    logoPath: '/assets/images/financinglenders/financingpage02.png',
    logoAlt: 'Assurance Financial logo',
  },
  {
    slug: 'lender-3',
    displayName: 'Canopy Mortgage',
    logoPath: '/assets/images/financinglenders/financingpage03.png',
    logoAlt: 'Canopy Mortgage logo',
  },
  {
    slug: 'lender-4',
    displayName: 'Credit Human',
    logoPath: '/assets/images/financinglenders/financingpage04.png',
    logoAlt: 'Credit Human logo',
  },
  {
    slug: 'lender-5',
    displayName: 'Triad Financial Services',
    logoPath: '/assets/images/financinglenders/financingpage05.png',
    logoAlt: 'Triad Financial Services logo',
  },
];

