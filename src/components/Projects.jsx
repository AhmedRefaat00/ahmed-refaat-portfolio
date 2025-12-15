import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';

// Bag Fairy assets
import bagFairyCover from '../assets/projects/bag-fairy/coverpng.png';
import bagFairyHome from '../assets/projects/bag-fairy/home.png';
import bagFairyAbout from '../assets/projects/bag-fairy/about.png';
import bagFairyProduct from '../assets/projects/bag-fairy/product.png';
import bagFairyProductDetails from '../assets/projects/bag-fairy/product detailes.png';
import bagFairyCart from '../assets/projects/bag-fairy/cart.png';
import bagFairyOrder from '../assets/projects/bag-fairy/order.png';
import bagFairyAdmin from '../assets/projects/bag-fairy/product admin.png';

// Dream Chalet assets
import dreamChaletCover from '../assets/projects/dream-chalet/cover photo.png';
import dreamChaletGeneral from '../assets/projects/dream-chalet/general.png';
import dreamChaletChaletsList from '../assets/projects/dream-chalet/chalets list.png';
import dreamChaletChaletsMap from '../assets/projects/dream-chalet/chalets on map.png';
import dreamChaletChaletDetails from '../assets/projects/dream-chalet/chalet detailes.png';
import dreamChaletSubmitBookings from '../assets/projects/dream-chalet/submit bookings.png';
import dreamChaletAdminDashboard from '../assets/projects/dream-chalet/admin dashbourd.png';
import dreamChaletAdminChalets from '../assets/projects/dream-chalet/admin-chalets.png';
import dreamChaletAdminUsers from '../assets/projects/dream-chalet/admin-users.png';

// Quran Kareem assets
import quranCover from '../assets/projects/quran kareem/quran kareem.png';
import quranHero from '../assets/projects/quran kareem/hero.png';
import quranWhite from '../assets/projects/quran kareem/white quran kareem.png';
import quranWhiteHero from '../assets/projects/quran kareem/white quran kareem hero.png';

// Waddini assets
import waddiniSplash1 from '../assets/projects/Waddini/splash1.jpg';
import waddiniSplash2 from '../assets/projects/Waddini/spash2.jpg';
import waddiniHome from '../assets/projects/Waddini/home.jpg';
import waddiniMap from '../assets/projects/Waddini/map.png';
import waddiniProfile from '../assets/projects/Waddini/profile.jpg';
import waddiniSidebar from '../assets/projects/Waddini/sidebar.jpg';
import waddiniLogin from '../assets/projects/Waddini/login.jpg';
import waddiniSignup from '../assets/projects/Waddini/sign up.jpg';
import waddiniMeetup from '../assets/projects/Waddini/meet up point.jpg';
import waddiniDestination from '../assets/projects/Waddini/destnition.jpg';
import waddiniSearching from '../assets/projects/Waddini/searching for driver.jpg';
import waddiniSendRequest from '../assets/projects/Waddini/send request.jpg';

// Rafiqna assets
import rafiqnaQuran from '../assets/projects/rafiqna/quran.jpg';
import rafiqnaPrayers from '../assets/projects/rafiqna/prayers.jpg';
import rafiqnaSitting from '../assets/projects/rafiqna/sitting.jpg';
import rafiqnaAzlar from '../assets/projects/rafiqna/azlar.jpg';
import rafiqnaQebla from '../assets/projects/rafiqna/qebla.jpg';
import rafiqnaHome from '../assets/projects/rafiqna/home.jpg';
import rafiqnaLight from '../assets/projects/rafiqna/light.jpg';

// Circle assets
import circleProfile from '../assets/projects/circle/profile.png';
import circlePayment from '../assets/projects/circle/payment.png';
import circleCreateCircle from '../assets/projects/circle/create circle.png';
import circleExplore from '../assets/projects/circle/explore.png';
import circleHomeAr from '../assets/projects/circle/home ar.png';

export default function Projects() {
    const [selectedImageIndex, setSelectedImageIndex] = useState({});
    const [mediaMode, setMediaMode] = useState({}); // 'video' | 'photos'

    const projects = [
        {
            id: 1,
            title: 'Bag Fairy e-commerce platform',
            description: 'A full-stack e-commerce platform built with React.js and firebase, featuring user authentication, payment integration, and real-time inventory management.',
            technologies: ['React.js', 'firebase', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'JWT'],
            photos: [
                bagFairyCover,
                bagFairyHome,
                bagFairyAbout,
                bagFairyProduct,
                bagFairyProductDetails,
                bagFairyCart,
                bagFairyOrder,
                bagFairyAdmin,
            ],
            links: {
                live: 'https://bagfairy.net',
                github: 'https://github.com/ahmedrefaat00'
            },
            gradient: 'from-cyan-400 to-blue-500'
        },
        {
            id: 2,
            title: 'Quran Kareem website',
            description: 'A modern design, full Arabic RTL support, and a seamless, mobile-first experience website for daily Muslim practices.',
            technologies: ['React.js', 'Vite', 'Lucide Icons', 'CSS Modules',],
            video: "https://www.youtube.com/embed/n4CIlJmcoh8?si=j_RuPQ-Iy-TO40au",
            photos: [quranHero, quranCover, quranWhite, quranWhiteHero],
            links: {
                live: 'https://quran-kareem-one.vercel.app/',
                github: 'https://github.com/AhmedRefaat00/quran-kareem'
            },
            gradient: 'from-blue-400 to-purple-500'
        },
        {
            id: 3,
            title: 'Chalet Chalet Platform',
            description: 'Is smart platform for discovering, listing, and booking daily chalets with ease and professionalism. Designed to provide a seamless experience for both guests and hosts, it also includes a comprehensive admin dashboard to manage bookings, revenue, and overall operations. The platform combines simplicity with efficiency to meet the needs of the Egyptian and regional vacation rental market.',
            technologies: ['React.js', "firebase", 'Tailwind CSS', 'JWT', 'Stripe API'],
            video: null,
            photos: [
                dreamChaletCover,
                dreamChaletGeneral,
                dreamChaletChaletsList,
                dreamChaletChaletsMap,
                dreamChaletChaletDetails,
                dreamChaletSubmitBookings,
                dreamChaletAdminDashboard,
                dreamChaletAdminChalets,
                dreamChaletAdminUsers,
            ],
            links: {
                github: 'https://github.com/ahmedrefaat00'
            },
            gradient: 'from-purple-400 to-pink-500'
        },
        {
            id: 4,
            title: 'Waddini Mobile Application (وديني العراق)',
            description: 'A ride-sharing application tailored for Iraq, enabling riders and drivers to connect, manage trips, and handle requests with an intuitive experience.',
            technologies: ['flutter', 'firebase', 'google maps api', 'laravel'],
            video: null,
            photos: [
                waddiniSplash1,
                waddiniSplash2,
                waddiniHome,
                waddiniMap,
                waddiniProfile,
                waddiniSidebar,
                waddiniLogin,
                waddiniSignup,
                waddiniMeetup,
                waddiniDestination,
                waddiniSearching,
                waddiniSendRequest,
            ],
            links: {
                live: 'https://play.google.com/store/apps/details?id=com.coddiv.waddini&pcampaignid=web_share',
            },
            gradient: 'from-pink-400 to-red-500'
        },
        {
            id: 5,
            title: 'Rafiqna mobile application (رفيقنا)',
            description: 'A modern mobile application to read the Quran and access essential Islamic utilities like prayer times, Qibla direction, and Azkar.',
            technologies: ['React Native', 'restful api'],
            video: 'https://www.youtube.com/embed/DYnwSsPJc1g',
            photos: [
                rafiqnaHome,
                rafiqnaQuran,
                rafiqnaPrayers,
                rafiqnaQebla,
                rafiqnaAzlar,
                rafiqnaSitting,
                rafiqnaLight,
            ],
            links: {
                live: 'https://drive.google.com/file/d/1KizbmTxaCeodZYR_jpf2m2TepMY9oUKa/view?usp=drive_link',
                github: 'https://github.com/ahmedrefaat00'
            },
            gradient: 'from-cyan-400 to-blue-500'
        },
        {
            id: 6,
            title: 'Circle Platform',
            description: 'Circle combats social drift by reducing the logistical friction of planning group activities. It provides a dedicated space for social circles to decide, plan, and relive their shared experiences, transforming intention into connection.',
            technologies: ['React.js', 'firebase', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'next.js', 'google maps api'],
            video: null,
            photos: [
                circleHomeAr,
                circleExplore,
                circleCreateCircle,
                circleProfile,
                circlePayment,
            ],
            links: {
                live: 'https://circle-beta-nine.vercel.app/',
                github: 'https://github.com/AhmedGamalFarouk/Circle'
            },
            gradient: 'from-cyan-400 to-blue-500'
        },
    ];

    const handleImageClick = (projectId, imageIndex) => {
        setSelectedImageIndex(prev => ({
            ...prev,
            [projectId]: imageIndex
        }));
    };

    const nextImage = (projectId, totalImages) => {
        setSelectedImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % totalImages
        }));
    };

    const prevImage = (projectId, totalImages) => {
        setSelectedImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
        }));
    };

    return (
        <section id="projects" className="relative w-full min-h-screen bg-[#1a1a1a] py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

            {/* Section Header */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                        <span className="text-white">My </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Some of the projects that I have worked on
                    </p>
                    <div className="mt-4 sm:mt-6 w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* Projects Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-400/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 h-full flex flex-col">
                                {/* Media Section */}
                                <div className="relative w-full aspect-video bg-gray-800 overflow-hidden">
                                    {(() => {
                                        const hasVideo = !!project.video;
                                        const hasPhotos = project.photos && project.photos.length > 0;
                                        const currentMode =
                                            mediaMode[project.id] || (hasVideo ? 'video' : 'photos');

                                        // Media mode toggle (only if both exist)
                                        if (hasVideo && hasPhotos) {
                                            return (
                                                <>
                                                    <div className="absolute top-3 left-3 z-20 flex gap-2 bg-black/40 rounded-full p-1 backdrop-blur">
                                                        <button
                                                            onClick={() =>
                                                                setMediaMode(prev => ({
                                                                    ...prev,
                                                                    [project.id]: 'video'
                                                                }))
                                                            }
                                                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${currentMode === 'video'
                                                                ? 'bg-cyan-400 text-black'
                                                                : 'bg-black/40 text-white/80 hover:bg-black/60'
                                                                }`}
                                                        >
                                                            Video
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                setMediaMode(prev => ({
                                                                    ...prev,
                                                                    [project.id]: 'photos'
                                                                }))
                                                            }
                                                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${currentMode === 'photos'
                                                                ? 'bg-cyan-400 text-black'
                                                                : 'bg-black/40 text-white/80 hover:bg-black/60'
                                                                }`}
                                                        >
                                                            Photos
                                                        </button>
                                                    </div>

                                                    {currentMode === 'video' ? (
                                                        <iframe
                                                            src={project.video}
                                                            title={project.title}
                                                            className="w-full h-full"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        />
                                                    ) : (
                                                        <div className="relative w-full h-full">
                                                            <AnimatePresence mode="wait">
                                                                <motion.img
                                                                    key={selectedImageIndex[project.id] || 0}
                                                                    src={
                                                                        project.photos[
                                                                        selectedImageIndex[project.id] || 0
                                                                        ]
                                                                    }
                                                                    alt={`${project.title} - Image ${(selectedImageIndex[project.id] || 0) + 1
                                                                        }`}
                                                                    className="w-full h-full object-cover"
                                                                    initial={{ opacity: 0, scale: 1.1 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                                    transition={{ duration: 0.3 }}
                                                                />
                                                            </AnimatePresence>

                                                            {/* Image Navigation */}
                                                            {project.photos.length > 1 && (
                                                                <>
                                                                    <button
                                                                        onClick={() =>
                                                                            prevImage(project.id, project.photos.length)
                                                                        }
                                                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                                                                        aria-label="Previous image"
                                                                    >
                                                                        <svg
                                                                            className="w-5 h-5"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M15 19l-7-7 7-7"
                                                                            />
                                                                        </svg>
                                                                    </button>
                                                                    <button
                                                                        onClick={() =>
                                                                            nextImage(project.id, project.photos.length)
                                                                        }
                                                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                                                                        aria-label="Next image"
                                                                    >
                                                                        <svg
                                                                            className="w-5 h-5"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M9 5l7 7-7 7"
                                                                            />
                                                                        </svg>
                                                                    </button>

                                                                    {/* Image Indicators */}
                                                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                                        {project.photos.map((_, idx) => (
                                                                            <button
                                                                                key={idx}
                                                                                onClick={() =>
                                                                                    handleImageClick(project.id, idx)
                                                                                }
                                                                                className={`w-2 h-2 rounded-full transition-all ${(selectedImageIndex[project.id] || 0) === idx
                                                                                    ? 'bg-cyan-400 w-6'
                                                                                    : 'bg-white/50 hover:bg-white/70'
                                                                                    }`}
                                                                                aria-label={`Go to image ${idx + 1}`}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    )}
                                                </>
                                            );
                                        }

                                        // Only video
                                        if (hasVideo) {
                                            return (
                                                <iframe
                                                    src={project.video}
                                                    title={project.title}
                                                    className="w-full h-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            );
                                        }

                                        // Only photos
                                        if (hasPhotos) {
                                            return (
                                                <div className="relative w-full h-full">
                                                    <AnimatePresence mode="wait">
                                                        <motion.img
                                                            key={selectedImageIndex[project.id] || 0}
                                                            src={
                                                                project.photos[
                                                                selectedImageIndex[project.id] || 0
                                                                ]
                                                            }
                                                            alt={`${project.title} - Image ${(selectedImageIndex[project.id] || 0) + 1
                                                                }`}
                                                            className="w-full h-full object-cover"
                                                            initial={{ opacity: 0, scale: 1.1 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.9 }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    </AnimatePresence>

                                                    {/* Image Navigation */}
                                                    {project.photos.length > 1 && (
                                                        <>
                                                            <button
                                                                onClick={() =>
                                                                    prevImage(project.id, project.photos.length)
                                                                }
                                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                                                                aria-label="Previous image"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M15 19l-7-7 7-7"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    nextImage(project.id, project.photos.length)
                                                                }
                                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                                                                aria-label="Next image"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M9 5l7 7-7 7"
                                                                    />
                                                                </svg>
                                                            </button>

                                                            {/* Image Indicators */}
                                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                                {project.photos.map((_, idx) => (
                                                                    <button
                                                                        key={idx}
                                                                        onClick={() =>
                                                                            handleImageClick(project.id, idx)
                                                                        }
                                                                        className={`w-2 h-2 rounded-full transition-all ${(selectedImageIndex[project.id] || 0) === idx
                                                                            ? 'bg-cyan-400 w-6'
                                                                            : 'bg-white/50 hover:bg-white/70'
                                                                            }`}
                                                                        aria-label={`Go to image ${idx + 1}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            );
                                        }

                                        // No media fallback
                                        return (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                                                <div
                                                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl opacity-50`}
                                                >
                                                    📁
                                                </div>
                                            </div>
                                        );
                                    })()}

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8">
                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-4 sm:mb-6">
                                        <p className="text-xs sm:text-sm text-white mb-2 sm:mb-3 font-semibold uppercase tracking-wider">
                                            Technologies
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white border border-white/20 whitespace-nowrap`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    {project.links && Object.keys(project.links).length > 0 && (
                                        <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 border-t border-cyan-400/20">
                                            {project.links.live && (
                                                <a
                                                    href={project.links.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-200 shadow-lg shadow-cyan-500/50`}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 text-white font-semibold text-sm sm:text-base hover:bg-gray-700 transition-colors duration-200 border border-gray-600/50"
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    GitHub
                                                </a>
                                            )}
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 text-white font-semibold text-sm sm:text-base hover:bg-gray-700 transition-colors duration-200 border border-gray-600/50"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    Demo
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
