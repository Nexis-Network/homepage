import Image from 'next/image';
import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import GithubIcon from './images/github.inline.svg';
import LinkedinIcon from './images/linkedin.inline.svg';
import XIcon from './images/x.inline.svg';


const Team = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
]
const Team = ({ title, description, members }) => (
  <section className="safe-paddings pt-48 3xl:pt-44 2xl:pt-40 xl:pt-32 lg:pt-12 md:pt-6">
       <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {team.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

Team.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.shape({
        src: PropTypes.string.isRequired,
        srcset: PropTypes.string,
      }).isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      githubUrl: PropTypes.string,
      linkedinUrl: PropTypes.string,
      twitterUrl: PropTypes.string,
    })
  ).isRequired,
};

export default Team;