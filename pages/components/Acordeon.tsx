import { useEffect, useRef, useState } from 'react';
import { IconChevronDown, IconChevronUp } from './Icons';

export type AccordionProps = {
  title: string;
  content: any;
  isOpen?: boolean;
};

export default function Accordion(props: AccordionProps) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef(null);

  //   useEffect(() => {
  //     props.isOpen && toggleAccordion();
  //     return () => {};
  //   }, []);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore :<ref is not null>
    setHeight(active ? '0px' : `${contentSpace?.current?.scrollHeight ?? 0}px`);
    setRotate(
      active
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-180'
    );
  }

  return (
    <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
      <button
        className="box-border flex justify-between items-center p-8 py-6 w-full appearance-none cursor-pointer focus:outline-none"
        onClick={toggleAccordion}
      >
        <h2 className="inline-block font-semibold text-footnote">
          {props?.title}
        </h2>

        {!active ? (
          <span className="bg-green-500 rounded-full">
            <IconChevronUp />
          </span>
        ) : (
          <span className="bg-green-200 rounded-full">
            <IconChevronDown />
          </span>
        )}
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto duration-700 ease-in-out transition-max-height"
      >
        <div className="p-8 text-sm">{props?.content}</div>
      </div>
    </div>
  );
}
