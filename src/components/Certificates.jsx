import React from 'react';
import Masonry from '../reactbits/Masonry';
import { motion } from 'motion/react';

import bankMasrImage from '../assets/certificates/bank masr.png';
import egyptianAviationImage from '../assets/certificates/egyptian aviation.png';
import googleProjectInitImage from '../assets/certificates/google project init.png';
import hultPrizeImage from '../assets/certificates/hult prize.png';
import ideAcadImage from '../assets/certificates/IDE Acad.png';
import itidaDataImage from '../assets/certificates/itida data.png';
import itidaWebImage from '../assets/certificates/itida web.png';
import itiReactImage from '../assets/certificates/iti react.png';
import itiImage from '../assets/certificates/ITI.jpg';
import linkedinCssImage from '../assets/certificates/linkedin css.png';
import linkedinHtmlImage from '../assets/certificates/linkedin html.png';
import oneMonthJsImage from '../assets/certificates/one month js.png';
import ecuUiImage from '../assets/certificates/ECU UI.png';
import eyouthImage from '../assets/certificates/eyouth.png';

export default function Certificates() {
    const items = [
        { id: 'bank-masr', img: bankMasrImage, url: bankMasrImage, height: 420 },
        { id: 'egyptian-aviation', img: egyptianAviationImage, url: egyptianAviationImage, height: 520 },
        { id: 'google-project-init', img: googleProjectInitImage, url: googleProjectInitImage, height: 620 },
        { id: 'hult-prize', img: hultPrizeImage, url: hultPrizeImage, height: 520 },
        { id: 'ide-acad', img: ideAcadImage, url: ideAcadImage, height: 540 },
        { id: 'itida-data', img: itidaDataImage, url: itidaDataImage, height: 520 },
        { id: 'itida-web', img: itidaWebImage, url: itidaWebImage, height: 560 },
        { id: 'iti-react', img: itiReactImage, url: itiReactImage, height: 680 },
        { id: 'iti', img: itiImage, url: itiImage, height: 640 },
        { id: 'linkedin-css', img: linkedinCssImage, url: linkedinCssImage, height: 420 },
        { id: 'linkedin-html', img: linkedinHtmlImage, url: linkedinHtmlImage, height: 420 },
        { id: 'one-month-js', img: oneMonthJsImage, url: oneMonthJsImage, height: 600 },
        { id: 'ecu-ui', img: ecuUiImage, url: ecuUiImage, height: 720 },
        {id: 'eyouth', img: eyouthImage, url: eyouthImage, height: 680 },
    ];

    return (
        <>
            {/* Section Header */}
            <div id="certificates" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                        <span className="text-white">My </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Certificates
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Certificates I have earned during my journey
                    </p>
                    <div className="mt-4 sm:mt-6 w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>
            </div>

            <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={1.15}
                blurToFocus={true}
                colorShiftOnHover={false}
            />
        </>
    );
}
