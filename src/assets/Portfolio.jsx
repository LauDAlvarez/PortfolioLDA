import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Menu, X, ChevronDown, Code, Palette, Database, Users, Briefcase, GraduationCap, Award, Globe, Sparkles, Zap, Target, Rocket } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledProgress = (winScroll / height) * 100;
            setScrollProgress(scrolledProgress);
            setScrolled(window.scrollY > 50);

            const sections = ['hero', 'about', 'skills', 'experience', 'education', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // Add animations on load
        document.body.style.overflow = 'auto';

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const skills = {
        frontend: ['React', 'Angular', 'HTML5', 'CSS3', 'JavaScript'],
        backend: ['Node.js', 'Express.js', 'APIs RESTful'],
        database: ['MongoDB', 'MySQL', 'Sequelize'],
        tools: ['Git', 'GitHub', 'Postman', 'GA4', 'Tag Manager'],
        design: ['Figma', 'Adobe Illustrator', 'UX/UI'],
        ads: ['Meta', 'Google'],
        methodologies: ['Scrum', 'Kanban', 'Patrón MVC']
    };

    const softSkills = [
        { name: 'Trabajo en equipo', icon: Users },
        { name: 'Toma de decisión', icon: Target },
        { name: 'Resolución de problemas', icon: Zap },
        { name: 'Formación continua', icon: Rocket },
        { name: 'Creatividad', icon: Sparkles },
        { name: 'Adaptabilidad', icon: Globe },
        { name: 'Proactividad', icon: Briefcase },
        { name: 'Compromiso', icon: Award }
    ];

    const experience = [
        {
            title: 'Desarrollador, Marketer Digital',
            company: 'Quakmedia',
            period: 'Octubre 2024 – Actualidad',
            color: 'from-blue-400 to-purple-600',
            tasks: [
                'Desarrollo de soluciones personalizadas de alta y baja complejidad',
                'Mejoras de experiencia de usuario y rendimiento',
                'Colaboración directa con clientes para la comprensión y cumplimiento de sus objetivos',
                'Creación y control de campañas publicitarias',
                'Automatización de procesos'
            ]
        },
        {
            title: 'Data Entry',
            company: 'Gestion.docs',
            period: 'Abril 2022 - Actualidad',
            color: 'from-purple-400 to-pink-600',
            tasks: [
                'Gestión de documentación',
                'Contacto estrecho con el cliente para la carga de documentación',
                'Automatización de tareas para flujo la carga de documentación',
                'Mantenimiento de Automatización'
            ]
        },
        {
            title: 'Desarrollador Freelance',
            company: 'Quantica Soft',
            period: 'Noviembre 2023 - Septiembre 2024',
            color: 'from-pink-400 to-red-600',
            tasks: [
                'Desarrollo de soluciones personalizadas de alta y baja complejidad',
                'Optimización de Código',
                'Colaboración directa con clientes para la comprensión y cumplimiento de sus objetivos'
            ]
        }
    ];

    const education = [
        {
            institution: 'Universidad Abierta Interamericana - UAI',
            degree: 'Ingeniería en sistemas informáticos',
            period: 'Abril 2024 - Actualidad',
            current: true,
            icon: '🎓'
        },
        {
            institution: 'Universidad Tecnológica Nacional - UTN',
            degree: 'Ingeniería en sistemas de la información',
            period: 'Mayo 2020 - Diciembre 2023',
            icon: '📚'
        },
        {
            institution: 'Colegio Salesiano San Jose - Nº8013',
            degree: 'Técnico en Electrónica',
            period: 'Abril 2013 - Diciembre 2018',
            icon: '⚡',
            highlights: [
                'Conocimientos en lectura, cálculos y diseño de circuitos eléctricos',
                'Desarrollo de habilidades en lenguajes de programación (C, C++, C#, Arduino)',
                'Programación de microcontroladores e integración hardware-software'
            ]
        }
    ];

    const certifications = [
        {
            name: 'Diseñador UX-UI',
            institution: 'Telecom - Digit@lers',
            period: 'Mayo 2023 – Septiembre 2023',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Desarrollador Full stack',
            institution: 'Digital House',
            period: 'Abril 2022 – Noviembre 2022',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <>
            <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
      `}</style>

            <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
                {/* Progress Bar */}
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
                    <div
                        className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>

                {/* Custom Cursor Effect */}
                <div
                    className="pointer-events-none fixed w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl transition-all duration-500 ease-out z-0"
                    style={{
                        left: `${mousePosition.x - 192}px`,
                        top: `${mousePosition.y - 192}px`,
                    }}
                />

                {/* Navigation */}
                <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-2xl py-4' : 'bg-transparent py-6'}`}>
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center">
                            <a
                                href="#hero"
                                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                                className="text-2xl font-bold relative group"
                            >
                                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">LDA</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                            </a>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex space-x-8">
                                {['Inicio', 'Sobre mí', 'Habilidades', 'Experiencia', 'Educación', 'Contacto'].map((item, index) => {
                                    const sectionId = ['hero', 'about', 'skills', 'experience', 'education', 'contact'][index];
                                    return (
                                        <a
                                            key={item}
                                            href={`#${sectionId}`}
                                            onClick={(e) => { e.preventDefault(); scrollToSection(sectionId); }}
                                            className={`relative group transition-all duration-300 ${activeSection === sectionId ? 'text-blue-400' : 'hover:text-blue-400'}`}
                                        >
                                            {item}
                                            <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 ${activeSection === sectionId ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden relative w-8 h-8 flex items-center justify-center"
                            >
                                <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                                <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                        <div className="container mx-auto px-4 py-4">
                            {['Inicio', 'Sobre mí', 'Habilidades', 'Experiencia', 'Educación', 'Contacto'].map((item, index) => {
                                const sectionId = ['hero', 'about', 'skills', 'experience', 'education', 'contact'][index];
                                return (
                                    <a
                                        key={item}
                                        href={`#${sectionId}`}
                                        onClick={(e) => { e.preventDefault(); scrollToSection(sectionId); }}
                                        className="block py-3 hover:text-blue-400 transition-colors"
                                    >
                                        {item}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="hero" className="min-h-screen flex items-center justify-center relative">
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                    </div>

                    <div className="container mx-auto px-4 z-10">
                        <div className="text-center">
                            <h1 className="text-6xl md:text-8xl font-bold mb-6">
                                <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                                    Lautaro David
                                </span>
                                <br />
                                <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient animation-delay-2000">
                                    Alvarez
                                </span>
                            </h1>

                            <h2 className="text-2xl md:text-4xl mb-6 text-gray-300">
                                Desarrollador Full Stack • Diseñador UX-UI
                            </h2>

                            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
                                Especializado en el diseño de interfaces modernas y experiencias de usuario intuitivas.
                                Construyo soluciones escalables y eficientes con las tecnologías más actuales.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                <a href="https://github.com/LauDAlvarez" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur hover:bg-gray-700/50 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-800/50">
                                    <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/lautarodalvarez" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-blue-600/20 backdrop-blur hover:bg-blue-600/30 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50">
                                    <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                                    LinkedIn
                                </a>
                                <a href="mailto:lautarodalvarez@gmail.com" className="group flex items-center gap-2 px-6 py-3 bg-purple-600/20 backdrop-blur hover:bg-purple-600/30 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/50">
                                    <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                                    Email
                                </a>
                            </div>

                            <div className="animate-bounce">
                                <ChevronDown size={40} className="mx-auto text-gray-400" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent"></div>
                    <div className="container mx-auto px-4 relative">
                        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent fade-in">
                            Sobre mí
                        </h2>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="fade-in">
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg"></div>
                                        <div className="relative bg-gray-800/50 backdrop-blur p-8 rounded-2xl">
                                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                                Soy un apasionado desarrollador con experiencia en crear soluciones web completas y atractivas.
                                                Actualmente curso Ingeniería en Sistemas Informáticos en la UAI, combinando mis estudios con proyectos profesionales.
                                            </p>
                                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                                Mi objetivo se centra en construir aplicaciones que no solo funcionen acorde a lo pedido, sino que también
                                                brinden experiencias únicas y personalizadas a los usuarios. Me especializo en tecnologías modernas y mejores prácticas de desarrollo.
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                                <div className="flex items-center gap-3 text-gray-400">
                                                    <MapPin size={20} className="text-blue-400" />
                                                    <span>Rosario, Santa Fe, Argentina</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-400">
                                                    <Phone size={20} className="text-green-400" />
                                                    <span>341-541-4963</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-400">
                                                    <Calendar size={20} className="text-purple-400" />
                                                    <span>23/04/2000</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-400">
                                                    <Mail size={20} className="text-pink-400" />
                                                    <span>lautarodalvarez@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 fade-in">
                                    <div className="group bg-gradient-to-br from-blue-600/10 to-blue-600/5 p-8 rounded-2xl text-center hover:from-blue-600/20 hover:to-blue-600/10 transition-all duration-300 hover:scale-105">
                                        <Code size={48} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                                        <h3 className="font-semibold text-lg mb-2">Full Stack</h3>
                                        <p className="text-sm text-gray-400">Frontend & Backend</p>
                                    </div>
                                    <div className="group bg-gradient-to-br from-purple-600/10 to-purple-600/5 p-8 rounded-2xl text-center hover:from-purple-600/20 hover:to-purple-600/10 transition-all duration-300 hover:scale-105">
                                        <Palette size={48} className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                                        <h3 className="font-semibold text-lg mb-2">UX/UI</h3>
                                        <p className="text-sm text-gray-400">Diseño Moderno</p>
                                    </div>
                                    <div className="group bg-gradient-to-br from-green-600/10 to-green-600/5 p-8 rounded-2xl text-center hover:from-green-600/20 hover:to-green-600/10 transition-all duration-300 hover:scale-105">
                                        <Database size={48} className="mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                                        <h3 className="font-semibold text-lg mb-2">Bases de Datos</h3>
                                        <p className="text-sm text-gray-400">SQL & NoSQL</p>
                                    </div>
                                    <div className="group bg-gradient-to-br from-pink-600/10 to-pink-600/5 p-8 rounded-2xl text-center hover:from-pink-600/20 hover:to-pink-600/10 transition-all duration-300 hover:scale-105">
                                        <Users size={48} className="mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                                        <h3 className="font-semibold text-lg mb-2">Trabajo en Equipo</h3>
                                        <p className="text-sm text-gray-400">Scrum & Kanban</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20 relative bg-gray-800/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent fade-in">
                            Habilidades
                        </h2>

                        {/* Technical Skills */}
                        <div className="max-w-7xl mx-auto mb-16">
                            <h3 className="text-3xl font-semibold mb-12 text-center text-gray-300 fade-in">Habilidades Técnicas</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category} className="fade-in">
                                        <div className="group bg-gray-800/50 backdrop-blur p-6 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                                            <h4 className="text-lg font-semibold mb-4 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                                                {category === 'frontend' ? 'Frontend' :
                                                    category === 'backend' ? 'Backend' :
                                                        category === 'database' ? 'Bases de Datos' :
                                                            category === 'tools' ? 'Herramientas' :
                                                                category === 'design' ? 'Diseño' :
                                                                    category === 'ads' ? 'Plataformas ADS' :
                                                                        'Metodologías'}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {items.map((skill) => (
                                                    <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-gray-600/50 transition-colors">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="max-w-6xl mx-auto">
                            <h3 className="text-3xl font-semibold mb-12 text-center text-gray-300 fade-in">Habilidades Blandas</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {softSkills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div key={skill.name} className="fade-in">
                                            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-6 rounded-2xl text-center hover:from-gray-700/50 hover:to-gray-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                                <Icon size={32} className="mx-auto mb-3 text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                                <p className="text-sm">{skill.name}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
                    <div className="container mx-auto px-4 relative">
                        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent fade-in">
                            Experiencia Profesional
                        </h2>

                        <div className="max-w-5xl mx-auto">
                            {experience.map((job, index) => (
                                <div key={index} className="mb-12 relative fade-in">
                                    {/* Timeline line */}
                                    {index < experience.length - 1 && (
                                        <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-gray-600 to-transparent"></div>
                                    )}

                                    <div className="flex gap-6">
                                        {/* Timeline dot */}
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative group">
                                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${job.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                            <Briefcase size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            <div className="bg-gray-800/50 backdrop-blur p-8 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 group">
                                                <div className="flex flex-wrap justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className={`text-2xl font-semibold bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>
                                                            {job.title}
                                                        </h3>
                                                        <p className="text-xl text-gray-300 mt-1">{job.company}</p>
                                                    </div>
                                                    <span className="text-gray-400 flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
                                                        <Calendar size={16} />
                                                        {job.period}
                                                    </span>
                                                </div>
                                                <ul className="space-y-3">
                                                    {job.tasks.map((task, taskIndex) => (
                                                        <li key={taskIndex} className="text-gray-300 flex items-start">
                                                            <span className={`text-transparent bg-gradient-to-r ${job.color} bg-clip-text mr-3`}>•</span>
                                                            {task}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="py-20 bg-gray-800/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent fade-in">
                            Educación
                        </h2>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid gap-8">
                                {education.map((edu, index) => (
                                    <div key={index} className="fade-in">
                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                                            <div className="relative bg-gray-800/50 backdrop-blur p-8 rounded-2xl hover:bg-gray-700/50 transition-all duration-300">
                                                <div className="flex items-start gap-6">
                                                    <div className="text-4xl animate-float">{edu.icon}</div>
                                                    <div className="flex-grow">
                                                        <div className="flex flex-wrap justify-between items-start mb-4">
                                                            <div>
                                                                <h3 className="text-2xl font-semibold text-blue-400">{edu.degree}</h3>
                                                                <p className="text-xl text-gray-300 mt-1">{edu.institution}</p>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Calendar size={16} className="text-gray-400" />
                                                                <span className="text-gray-400">{edu.period}</span>
                                                                {edu.current && (
                                                                    <span className="ml-2 px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full animate-pulse">
                                                                        En curso
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {edu.highlights && (
                                                            <ul className="space-y-2">
                                                                {edu.highlights.map((highlight, i) => (
                                                                    <li key={i} className="text-gray-400 flex items-start">
                                                                        <span className="text-gray-500 mr-2">•</span>
                                                                        {highlight}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <div className="mt-16">
                                <h3 className="text-3xl font-semibold mb-8 text-center text-gray-300 fade-in">Certificaciones</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="fade-in">
                                            <div className="group relative overflow-hidden bg-gray-800/50 backdrop-blur p-6 rounded-2xl hover:bg-gray-700/50 transition-all duration-300">
                                                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                                <div className="relative flex items-center gap-4">
                                                    <Award size={32} className="text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                                    <div>
                                                        <h4 className="font-semibold text-lg">{cert.name}</h4>
                                                        <p className="text-gray-400">{cert.institution}</p>
                                                        <p className="text-sm text-gray-500 mt-1">{cert.period}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="mt-16 text-center fade-in">
                                <h3 className="text-2xl font-semibold mb-8 text-gray-300">Idiomas</h3>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <div className="bg-gray-800/50 backdrop-blur px-6 py-4 rounded-full flex items-center gap-3 hover:bg-gray-700/50 transition-colors">
                                        <Globe size={24} className="text-blue-400" />
                                        <span className="text-lg">Español: Nativo</span>
                                    </div>
                                    <div className="bg-gray-800/50 backdrop-blur px-6 py-4 rounded-full flex items-center gap-3 hover:bg-gray-700/50 transition-colors">
                                        <Globe size={24} className="text-green-400" />
                                        <span className="text-lg">Inglés: Lectura y Comprensión</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="container mx-auto px-4 relative">
                        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent fade-in">
                            Contacto
                        </h2>

                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-xl text-gray-300 mb-12 fade-in">
                                ¿Tienes un proyecto en mente? ¡Me encantaría escucharte!
                                No dudes en contactarme para discutir cómo puedo ayudarte a llevar tus ideas al siguiente nivel.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <a href="mailto:lautarodalvarez@gmail.com" className="fade-in group">
                                    <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur p-8 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <Mail size={40} className="mx-auto mb-4 text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                                        <p className="text-sm text-gray-400 break-all">lautarodalvarez@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+543415414963" className="fade-in group">
                                    <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur p-8 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <Phone size={40} className="mx-auto mb-4 text-green-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                        <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                                        <p className="text-sm text-gray-400">341-541-4963</p>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/lautarodalvarez" target="_blank" rel="noopener noreferrer" className="fade-in group">
                                    <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur p-8 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <Linkedin size={40} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                        <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                                        <p className="text-sm text-gray-400">lautarodalvarez</p>
                                    </div>
                                </a>
                            </div>

                            <div className="fade-in">
                                <a href="https://github.com/LauDAlvarez" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                                    <Github size={24} />
                                    Ver mis proyectos en GitHub
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 py-8 border-t border-gray-800">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-gray-400">
                            © 2025 Lautaro David Alvarez. Todos los derechos reservados.
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            Diseñado y desarrollado con <span className="text-red-500">❤</span> usando React
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Portfolio;