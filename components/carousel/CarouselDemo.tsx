"use client";

import React, { useEffect } from "react";

type CarouselDemoProps = {
  className?: string;
  items?: any[];
};

export function CarouselDemo({ className = "", items = [{}, {}, {}, {}] }: CarouselDemoProps) {
  return (
    <>
      <div className="logos flex">
        <div className="logos-slide flex ml-4">
          {items.map((item, index) => {
            return <BrandLogo key={index} item={item} />;
          })}
        </div>
        <div className="logos-slide flex">
          {items.map((item, index) => {
            return <BrandLogo key={index} item={item} />;
          })}
        </div>
      </div>
      <style>{`
        @keyframes slide {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
        }
        .logos-slide {
        animation: 35s slide infinite linear;
        }
        .logos:hover .logos-slide {
          animation-play-state: paused;
        }
      `}</style>
      <style>
        {`
          .brand-item {
            svg {
             width: 100%;
             height: 100%;
             object-fit:contain;
             path {
              // fill: #000;
             }
            }
          }
          `}
      </style>
    </>
  );
}

const BrandLogo = ({ item }: any) => {
  return (
      <div className="brand-item border-l border-secondary px-[40px] py-[40px]  min-w-[200px] inline-block ml-4">
        {item.cover && <div className="w-[115px] h-[40px] object-contain mx-auto">{item.cover}</div>}
        {item.coverImage && <img className="w-[115px] h-[40px] object-contain mx-auto" src={item.coverImage} alt="" />}
      </div>
  );
};
