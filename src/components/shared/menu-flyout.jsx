import * as React from "react";
import { css } from "@emotion/css";
import ctl from "@netlify/classnames-template-literals";
import tw from "twin.macro";
import { Menu, Transition } from "@headlessui/react";

/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */

const buttonStyles = {
  el1: css`
    padding: 15px 10px 5px 10px;
    display: inline-block;
    cursor: pointer;
    transition-duration: 0.15s;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    &:hover {
      opacity: 1;
    }
    ${tw`bg-white bg-opacity-30`}
    ${tw`transition-all ease-in-out`}
    ${tw`rounded-sm`}
  `,
  el1Active: css`
    &:hover {
      opacity: 1;
    }
  `,
  el2: css`
    width: 30px;
    height: 18px;
    display: inline-block;
    position: relative;
  `,
  el3: css`
    display: block;
    top: 50%;
    margin-top: -2px;
    transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),
      background-color 0s 0.075s linear;
    &,
    &::before,
    &::after {
      width: 30px;
      height: 2px;
      background-color: #000;
      border-radius: 2px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }
    &::before,
    &::after {
      content: "";
      display: block;
    }
    &::before {
      top: -9px;
      transition: top 0.075s 0.075s ease-in,
        transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    &::after {
      bottom: -9px;
      transition: bottom 0.075s 0.075s ease-in,
        transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  `,
  el3Active: css`
    & {
      transform: rotate(90deg);
      background-color: transparent !important;
      transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1),
        background-color 0s 0.15s linear;
    }
    &::before {
      top: 0;
      transform: rotate(-45deg);
      transition: top 0.075s 0.1s ease-out,
        transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    &::after {
      bottom: 0;
      transform: rotate(45deg);
      transition: bottom 0.075s 0.1s ease-out,
        transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    &,
    &::before,
    &::after {
      background-color: #000;
    }
  `,
};

const MenuButtonInner = ({ open }) => {
  const s = buttonStyles;
  return (
    <span className={ctl(`${s.el1} ${open && s.el1Active}`)}>
      <span className={s.el2}>
        <span className={ctl(`${s.el3} ${open && s.el3Active}`)}></span>
      </span>
    </span>
  );
};

const ItemsWrapper = ({ children, open }) => {
  return (
    <Transition
      show={open}
      enter="transition duration-400"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition duration-200"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
      className={ctl(`
        fixed z-40 inset-0 bg-white/50 backdrop-blur-lg
        flex flex-col items-center justify-center
      `)}
    >
      {children}
    </Transition>
  );
};

const MenuFlyout = ({ className, items = [] }) => {
  return (
    <div className={className}>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="fixed z-50 right-0 top-0">
              <MenuButtonInner open={open} />
            </Menu.Button>
            <ItemsWrapper open={open}>
              <Menu.Items
                className={ctl(`
                  focus:outline-none
                  space-y-vgap-xs sm:space-y-vgap-sm
                `)}
              >
                {items.map((item) => (
                  <Menu.Item key={item.href}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={ctl(`
                          block relative z-50
                          text-black px-hgap-xs rounded-md
                          text-center
                          sm:text-xl
                          ${active && "outline outline-2 outline-blue-700"}
                        `)}
                      >
                        {item.text}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </ItemsWrapper>
          </>
        )}
      </Menu>
    </div>
  );
};

export { MenuFlyout };
