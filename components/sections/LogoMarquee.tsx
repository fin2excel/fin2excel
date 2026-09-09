'use client';

import React from 'react';
import Image from 'next/image';
import { BlurredInfiniteSlider } from '@/components/ui/infinite-slider';

const LOGOS = [
    { src: "/assets/banks/jpmorgan.svg", alt: "JP Morgan", h: 28 },
    { src: "/assets/banks/goldman-sachs.svg", alt: "Goldman Sachs", h: 36 },
    { src: "/assets/banks/morgan-stanley.svg", alt: "Morgan Stanley", h: 26 },
    { src: "/assets/banks/barclays.svg", alt: "Barclays", h: 32 },
    { src: "/assets/banks/hsbc.svg", alt: "HSBC", h: 28 },
    { src: "/assets/banks/hdfc.svg", alt: "HDFC Bank", h: 26 },
    { src: "/assets/banks/icici.svg", alt: "ICICI Bank", h: 36 },
    { src: "/assets/banks/axis.svg", alt: "Axis Bank", h: 30 },
    { src: "/assets/banks/kotak.svg", alt: "Kotak Mahindra", h: 34 },
    { src: "/assets/banks/sbi.svg", alt: "SBI", h: 36 },
    { src: "/assets/banks/maybank.svg", alt: "Maybank", h: 38 },
    { src: "/assets/banks/mybank.png", alt: "MyBank", h: 34 },
];

export function LogoMarquee() {
    return (
        <section className="bg-swiss-bg overflow-hidden py-8 border-b border-swiss-black/5">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row gap-12">
                    <div className="flex-shrink-0 text-center md:text-left md:max-w-[200px] md:border-r md:border-swiss-black/10 md:pr-12">
                        <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-swiss-black/30 leading-relaxed">
                            Trusted Global <br /> Financial Partners
                        </p>
                    </div>
                    <div className="w-full md:flex-1">
                        <BlurredInfiniteSlider
                            speed={35}
                            gap={100}
                            fadeWidth={80}
                        >
                            {LOGOS.map((logo, i) => (
                                <div key={`${logo.src}-${i}`} className="flex items-center justify-center px-4 transition-all duration-500 hover:scale-110">
                                    <Image
                                        className="w-auto object-contain"
                                        src={logo.src}
                                        alt={logo.alt}
                                        height={logo.h}
                                        width={200} // Placeholder width, will be overridden by w-auto
                                        style={{ height: `${logo.h}px`, width: 'auto' }}
                                        loading="eager"
                                    />
                                </div>
                            ))}
                        </BlurredInfiniteSlider>
                    </div>
                </div>
            </div>
        </section>
    );
}
