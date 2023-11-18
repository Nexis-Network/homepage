'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { Fragment, useRef, useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'components/shared/logo';
import MobileMenu from 'components/shared/mobile-menu';
import LINKS from 'constants/links';
import MENUS from 'constants/menus.js';
import sendGtagEvent from 'utils/send-gtag-event';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

import Burger from './burger';
import Github from './images/header-github.inline.svg';                
                
                  <Popover.Group className="hidden lg:flex lg:gap-x-12">
                  <Popover>
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                      Product
                      <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </Popover.Button>
        
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                          {products.map((item) => (
                            <div key={item.name} className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                              </div>
                              <a href={item.href} className="mt-6 block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gray-50">
                          <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                              {callsToAction.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
        
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Features
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Marketplace
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Company
                  </a>
                </Popover.Group>