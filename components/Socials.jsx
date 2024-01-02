'use client';

import {
  RiLinkedinFill,
  RiGithubFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [

  {
    path: 'https://www.linkedin.com/in/nicolas-ignacio-rojas-huanquitripay-2a647b284/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/niko1275',
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
