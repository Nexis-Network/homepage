'use client';

import { Popover, Transition } from '@headlessui/react';
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
  } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { Fragment , useRef, useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'components/shared/logo';
import MobileMenu from 'components/shared/mobile-menu';
import LINKS from 'constants/links';
import MENUS from 'constants/menus.js';

import '../../../styles/glowing-button.css';

import Highlighter, { HighlighterItem } from '../highlighter/highlighter';

import Burger from './burger';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const Header = ({
  className = null,
  theme,
  isSticky = false,
  withBottomBorder = false,
  isDocPage = false,
  isBlogPage = false,
}) => {
  const isThemeBlack = theme === 'black' || theme === 'black-new' || theme === 'gray-8';
  const headerRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOutsideClick = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleBurgerClick = () => {
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={clsx(
          'safe-paddings absolute left-0 right-0 top-0 z-40 w-full dark:bg-gray-new-8 lg:relative lg:h-14',
          className,
          isSticky && 'sticky top-0 z-50 md:relative',
          withBottomBorder && theme !== 'gray-new-15' && 'border-b border-gray-new-15 dark:border-gray-new-15',
          withBottomBorder && theme === 'gray-new-15' && 'border-b border-gray-new-15',
          { 'bg-gray-new-8': theme === 'gray-8' },
          { 'lg:bg-black': theme === 'black' },
          { 'lg:bg-black-new': theme === 'black-new' },
          { 'bg-white': theme === 'white' }
        )}
        ref={headerRef}
      >
        <Container className="flex items-center justify-between py-3.5" size="lg">
          <Link to="/">
            <span className="sr-only">Exzo Network</span>
            <Logo isThemeBlack={isThemeBlack} />
          </Link>
    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex space-x-12 3xl:space-x-10 2xl:space-x-8 lg:hidden">
        {MENUS.header.map(({ to, text, items }, index) => {
                const Tag = to ? Link : 'button';
                return (
                  <li className={clsx(items?.length > 0 && 'group relative')} key={index}>
                    <Tag
                      className={clsx(
                        'whitespace-pre',
                        items?.length > 0 &&
                          'relative pr-3.5 leading-none transition-colors duration-200 before:absolute before:right-0 before:top-[7px] before:h-0 before:w-0 before:border-4 before:border-transparent before:transition-[border-color] before:duration-200 hover:text-white group-hover:before:border-t-primary-2 dark:before:border-transparent',
                        items?.length > 0 && isThemeBlack
                          ? 'before:border-t-gray-new-15'
                          : 'before:border-t-black dark:before:border-t-gray-new-15',
                        isThemeBlack ? 'text-white' : 'text-black dark:text-white'
                      )}
                      to={to}
                      theme={isThemeBlack && to ? 'white' : 'black'}
                    >
                      {text}
                    </Tag>
                    {items?.length > 0 && (
                      <div className="group-hover:opacity-1 invisible absolute bottom-0 translate-y-full pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100">
                        <ul
                          className="min-w-[240px] rounded-2xl border shadow-lg backdrop-blur-sm backdrop-hue-rotate-90 border-gray-new-15 bg-gray-new-8/90 e p-3.5"
                          style={{ boxShadow: '0px 4px 10px rgba(26, 26, 26, 0.2)' }}
                        >
                          {items.map(({ icon, text, description, to }, index) => (
                            <li
                              className={clsx(
                                index !== 0 && 'mt-3.5 max-w-prose divide-gray-new-15 border-t border-t-gray-new-15 pt-3.5'
                              )}
                              key={index}
                            >
                              <Link
                                className="flex items-center whitespace-nowrap hover:text-primary-2"
                                to={to}
                              >
                                <img
                                  src={icon}
                                  alt="text"
                                  width={44}
                                  height={44}
                                  className="h-11 w-11 shrink-0"
                                  loading="lazy"
                                  aria-hidden
                                />
                                <span className="ml-3">
                                  <span className="t-md text-gray-5 pr-10 block max-w-sm hover:text-primary-2 font-semibold !leading-none transition-colors duration-200">
                                    {text}
                                  </span>
                                  <span className="mt-1.5 pr-20 text-sm max-w-prose max-w-sm md:text-base block leading-none text-gray-4">
                                    {description}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
              <li className="group relative">
                <Popover className="relative">
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 mt-3">
                    <Highlighter>
                      <div className="p-2 bg-dark/80 rounded shadow">
                        {products.map(item => (
                          <HighlighterItem key={item.name}>
                          <a key={item.name} href={item.href}>
                            {item.name}
                          </a>
                          </HighlighterItem>
                        ))}
                      </div>
                      </Highlighter>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-5 lg:hidden">
          <Button
        className="transition-all duration-300 transform active:scale-95 flex-1 h-12 px-2 py-1 font-normal font-title text-sm shadow-sm rounded-[10px] cursor-pointer disabled:pointer-events-none hover:bg-body-balances-200 disabled:bg-container-500 disabled:text-white bg-white/10 border border-white/40 text-white backdrop-blur-[25px]"
      >
        Button text
      </Button>
          </div>
          <div className="hidden items-center lg:flex lg:gap-x-3 md:gap-x-5">
            {isDocPage && (
              <Search
                className="mobile-search"
                indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
              />
            )}
            {isBlogPage && (
              <Search
                className="mobile-search"
                indexName={process.env.NEXT_PUBLIC_ALGOLIA_BLOG_INDEX_NAME}
                isBlog
              />
            )}

            <Burger
              className={clsx(isThemeBlack ? 'text-white' : 'text-black dark:text-white')}
              isToggled={isMobileMenuOpen}
              onClick={handleBurgerClick}
            />
          </div>
        </Container>
          </header>
          <MobileMenu
            isOpen={isMobileMenuOpen}
            headerRef={headerRef}
            onOutsideClick={handleMobileMenuOutsideClick}
          />
        </>
      );
    };
    Header.propTypes = {
      className: PropTypes.string,
      theme: PropTypes.oneOf(['white', 'black', 'black-new', 'gray-8']).isRequired,
      withBottomBorder: PropTypes.bool,
      isSignIn: PropTypes.bool,
      isSticky: PropTypes.bool,
      isDocPage: PropTypes.bool,
      isBlogPage: PropTypes.bool,
    };

export default Header;