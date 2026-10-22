import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe2,
  Languages,
  Monitor,
  Cloud,
  FileText,
  ChevronRight,
  Lightbulb,
  Landmark,
  Atom,
  Dna,  
  TrendingUp,
  BriefcaseBusiness,
  Scale,
  Users,
  Brain,
} from "lucide-react";

// =====================================================
// BOARD-WISE SUBJECT DATA
// =====================================================

// -----------------------------------------------------
// COMMON ICONS
// -----------------------------------------------------
// Mathematics  -> Calculator
// Languages    -> Languages / BookOpen
// Science      -> FlaskConical
// Social Sci.  -> Globe2
// Computer     -> Monitor
// Business     -> FileText
// Cloud / IT   -> Cloud


// =====================================================
// CBSE
// =====================================================

const cbseSubjectData = {
  // =====================================================
  // PRIMARY
  // =====================================================

  1: [
    {
      name: "Mathematics",
      description: "Build strong number sense and problem-solving skills",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Develop reading, writing, speaking and listening skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "Develop vocabulary, grammar, reading and writing skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description: "मराठी भाषा, वाचन, लेखन आणि व्याकरण कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  2: [
    {
      name: "Mathematics",
      description: "Strengthen numerical thinking and problem-solving skills",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Improve reading, writing and communication skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा, वाचन आणि लेखन कौशल्य विकसित करें",
      icon: Languages,
    },
    {
      name: "Marathi",
      description: "मराठी भाषा, वाचन, लेखन आणि व्याकरण कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  3: [
    {
      name: "Mathematics",
      description: "Develop logical thinking and problem-solving skills",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Enhance reading, writing and communication skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा और व्याकरण की समझ विकसित करें",
      icon: Languages,
    },
    {
      name: "Marathi",
      description: "मराठी वाचन, लेखन आणि भाषा कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  // =====================================================
  // CLASS 4
  // =====================================================

  4: [
    {
      name: "Mathematics",
      description:
        "Develop number sense, operations, fractions, geometry and data handling",
      icon: Calculator,
    },
    {
      name: "English",
      description:
        "Build reading, writing, speaking and listening skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop vocabulary, grammar, reading and literary skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, व्याकरण, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Environmental Studies",
      description:
        "Explore nature, communities, health, food, water and living organisms",
      icon: Globe2,
    },
  ],

  // =====================================================
  // CLASS 5
  // =====================================================

  5: [
    {
      name: "Mathematics",
      description:
        "Strengthen number systems, fractions, decimals, geometry and data handling",
      icon: Calculator,
    },
    {
      name: "English",
      description:
        "Develop reading comprehension, communication and foundational grammar",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Build literature appreciation, grammar and creative expression",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी वाचन, लेखन, व्याकरण आणि अभिव्यक्ती कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Environmental Studies",
      description:
        "Explore the world around us, science, society and environmental care",
      icon: Globe2,
    },
  ],

  // =====================================================
  // CLASS 6
  // =====================================================

  6: [
    {
      name: "Mathematics",
      description:
        "Build foundations in algebra, integers, fractions, geometry and data handling",
      icon: Calculator,
    },
    {
      name: "Science",
      description:
        "Explore fundamental concepts in physical, chemical and biological sciences",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description:
        "Study history, geography, society, government and civic life",
      icon: Globe2,
    },
    {
      name: "English",
      description:
        "Develop grammar, comprehension, literature and communication skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop language structures, literature and communication skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, वाचन, लेखन आणि व्याकरण कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  // =====================================================
  // CLASS 7
  // =====================================================

  7: [
    {
      name: "Mathematics",
      description:
        "Develop skills in rational numbers, equations, geometry and data handling",
      icon: Calculator,
    },
    {
      name: "Science",
      description:
        "Explore nutrition, heat, matter, reactions, respiration and light",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description:
        "Study history, geography, society, equality and government",
      icon: Globe2,
    },
    {
      name: "English",
      description:
        "Strengthen vocabulary, grammar, writing and literature skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop advanced grammar, writing and literary understanding",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  // =====================================================
  // CLASS 8
  // =====================================================

  8: [
    {
      name: "Mathematics",
      description:
        "Build skills in equations, algebra, geometry, mensuration and data handling",
      icon: Calculator,
    },
    {
      name: "Science",
      description:
        "Explore cells, reproduction, force, pressure, sound and chemical effects",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description:
        "Study modern history, resources, constitution, society and public life",
      icon: Globe2,
    },
    {
      name: "English",
      description:
        "Develop composition, grammar, comprehension and literature skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Strengthen language structure, writing and literary comprehension",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, वाचन, लेखन, व्याकरण आणि साहित्य कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  // =====================================================
  // CLASS 9
  // =====================================================

  9: [
    {
      name: "Mathematics",
      description:
        "Study number systems, algebra, geometry, statistics and coordinate geometry",
      icon: Calculator,
    },
    {
      name: "Science",
      description:
        "Explore physics, chemistry and biology fundamentals",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description:
        "Study history, geography, democratic politics and economics",
      icon: Globe2,
    },
    {
      name: "English",
      description:
        "Develop advanced grammar, comprehension, composition and literature",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Choose and develop Hindi language and literature through Course A or B",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Information Technology",
      description:
        "Develop practical digital and information technology skills",
      icon: Monitor,
    },
    {
      name: "Artificial Intelligence",
      description:
        "Build foundational understanding of artificial intelligence",
      icon: Cloud,
    },
  ],

  // =====================================================
  // CLASS 10
  // =====================================================

  10: [
    {
      name: "Mathematics",
      description:
        "Study algebra, geometry, trigonometry, statistics and probability",
      icon: Calculator,
    },
    {
      name: "Science",
      description:
        "Explore physics, chemistry and biology through integrated science",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description:
        "Study history, geography, democratic politics and economics",
      icon: Globe2,
    },
    {
      name: "English",
      description:
        "Develop advanced language, comprehension and literature skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop Hindi language and literature through Course A or B",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Information Technology",
      description:
        "Develop practical IT and digital application skills",
      icon: Monitor,
    },
    {
      name: "Artificial Intelligence",
      description:
        "Explore foundational AI concepts and applications",
      icon: Cloud,
    },
  ],

  // =====================================================
  // CLASS 11
  // =====================================================

  11: [
    // Common
    {
      name: "English Core",
      description:
        "Develop advanced language, communication and literary skills",
      icon: BookOpen,
    },

    // Science
    {
      name: "Physics",
      description:
        "Study mechanics, thermodynamics, waves and gravitation",
      icon: Atom,
    },
    {
      name: "Chemistry",
      description:
        "Study atomic structure, bonding, thermodynamics and organic chemistry",
      icon: FlaskConical,
    },
    {
      name: "Mathematics",
      description:
        "Explore sets, relations, functions, coordinate geometry and calculus foundations",
      icon: Calculator,
    },
    {
      name: "Biology",
      description:
        "Study living organisms, cells, plant and animal physiology",
      icon: Dna,
    },

    // Commerce
    {
      name: "Accountancy",
      description:
        "Learn accounting processes and preparation of financial statements",
      icon: FileText,
    },
    {
      name: "Business Studies",
      description:
        "Understand business foundations, trade and organizational practices",
      icon: BriefcaseBusiness,
    },
    {
      name: "Economics",
      description:
        "Study microeconomics and statistics for economics",
      icon: TrendingUp,
    },

    // Humanities
    {
      name: "History",
      description:
        "Explore themes and developments in world history",
      icon: Landmark,
    },
    {
      name: "Political Science",
      description:
        "Study the Indian Constitution and political theory",
      icon: Scale,
    },
    {
      name: "Geography",
      description:
        "Understand physical geography and Earth's systems",
      icon: Globe2,
    },
    {
      name: "Sociology",
      description:
        "Understand society, social institutions and human relationships",
      icon: Users,
    },
    {
      name: "Psychology",
      description:
        "Explore psychological attributes, behaviour and mental processes",
      icon: Brain,
    },

    // Common electives
    {
      name: "Computer Science",
      description:
        "Develop programming and computational thinking skills",
      icon: Monitor,
    },
    {
      name: "Informatics Practices",
      description:
        "Learn computing, data handling and information practices",
      icon: Monitor,
    },
    {
      name: "Artificial Intelligence",
      description:
        "Explore artificial intelligence concepts and applications",
      icon: Cloud,
    },
    {
      name: "Physical Education",
      description:
        "Develop knowledge of physical fitness, health and wellbeing",
      icon: GraduationCap,
    },
  ],

  // =====================================================
  // CLASS 12
  // =====================================================

  12: [
    // Common
    {
      name: "English Core",
      description:
        "Strengthen advanced language, communication and literary skills",
      icon: BookOpen,
    },

    // Science
    {
      name: "Physics",
      description:
        "Study electrostatics, current electricity, magnetism, optics and modern physics",
      icon: Atom,
    },
    {
      name: "Chemistry",
      description:
        "Explore solutions, electrochemistry, organic chemistry and coordination compounds",
      icon: FlaskConical,
    },
    {
      name: "Mathematics",
      description:
        "Study calculus, vectors, matrices, determinants, 3D geometry and probability",
      icon: Calculator,
    },
    {
      name: "Biology",
      description:
        "Explore reproduction, genetics, evolution, biotechnology and ecology",
      icon: Dna,
    },

    // Commerce
    {
      name: "Accountancy",
      description:
        "Study partnership accounts, company accounts and financial analysis",
      icon: FileText,
    },
    {
      name: "Business Studies",
      description:
        "Study management, finance, marketing and consumer protection",
      icon: BriefcaseBusiness,
    },
    {
      name: "Economics",
      description:
        "Study macroeconomics and Indian economic development",
      icon: TrendingUp,
    },

    // Humanities
    {
      name: "History",
      description:
        "Explore ancient, medieval and modern Indian history",
      icon: Landmark,
    },
    {
      name: "Political Science",
      description:
        "Study contemporary world politics and politics in India",
      icon: Scale,
    },
    {
      name: "Geography",
      description:
        "Study human geography, India's people and its economy",
      icon: Globe2,
    },
    {
      name: "Sociology",
      description:
        "Understand social structures, institutions and contemporary society",
      icon: Users,
    },
    {
      name: "Psychology",
      description:
        "Explore psychological processes, behaviour and therapeutic approaches",
      icon: Brain,
    },

    // Common electives
    {
      name: "Computer Science",
      description:
        "Master programming, algorithms and computational concepts",
      icon: Monitor,
    },
    {
      name: "Informatics Practices",
      description:
        "Develop skills in computing, data and information systems",
      icon: Monitor,
    },
    {
      name: "Artificial Intelligence",
      description:
        "Explore AI concepts, techniques and real-world applications",
      icon: Cloud,
    },
    {
      name: "Physical Education",
      description:
        "Develop knowledge of fitness, health, sports and wellbeing",
      icon: GraduationCap,
    },
  ],
};


// =====================================================
// CISCE — ICSE / ISC
// =====================================================

const cisceSubjectData = {
  1: [
    {
      name: "English Language",
      description:
        "Develop foundational reading, writing, vocabulary and communication skills",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Explore age-appropriate stories, poems and literary texts",
      icon: BookOpen,
    },
    {
      name: "Mathematics",
      description:
        "Build strong foundations in numbers, counting and mathematical problem-solving",
      icon: Calculator,
    },
    {
      name: "Environmental Studies",
      description:
        "Explore surroundings, nature, family, community, health and everyday life",
      icon: Globe2,
    },
    {
      name: "Hindi",
      description:
        "Develop foundational Hindi reading, writing and communication skills",
      icon: Languages,
    },
  ],

  2: [
    {
      name: "English Language",
      description:
        "Strengthen reading, writing, vocabulary and communication skills",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Explore stories, poems and age-appropriate literary texts",
      icon: BookOpen,
    },
    {
      name: "Mathematics",
      description:
        "Develop numerical understanding, calculations and problem-solving skills",
      icon: Calculator,
    },
    {
      name: "Environmental Studies",
      description:
        "Learn about nature, surroundings, health, family and community",
      icon: Globe2,
    },
    {
      name: "Hindi",
      description:
        "Develop Hindi reading, writing, vocabulary and communication skills",
      icon: Languages,
    },
  ],

  3: [
    {
      name: "English Language",
      description:
        "Develop grammar, reading, writing and effective communication skills",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Explore stories, poems and literary texts while developing comprehension",
      icon: BookOpen,
    },
    {
      name: "Mathematics",
      description:
        "Strengthen numerical concepts, calculations and mathematical reasoning",
      icon: Calculator,
    },
    {
      name: "Environmental Studies",
      description:
        "Explore nature, surroundings, communities, health and everyday life",
      icon: Globe2,
    },
    {
      name: "Hindi",
      description:
        "Develop Hindi language, reading, writing and communication skills",
      icon: Languages,
    },
    {
      name: "Computer Studies",
      description:
        "Build foundational computer knowledge and digital literacy skills",
      icon: Monitor,
    },
  ],

  // Keep your existing 4–12 data below
  4: [
    {
      name: "Mathematics",
      description:
        "Build strong foundations in numbers, calculations and mathematical problem-solving",
      icon: Calculator,
    },
    {
      name: "Science",
      description:
        "Explore basic scientific concepts and understand the world around us",
      icon: FlaskConical,
    },
    {
      name: "Social Studies",
      description:
        "Learn about society, communities, history and the world around us",
      icon: Globe2,
    },
    {
      name: "English Language",
      description:
        "Develop grammar, vocabulary, reading, writing and communication skills",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Explore stories, poems and literary works while developing comprehension skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop Hindi language, reading, writing and communication skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, वाचन, लेखन आणि व्याकरण कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Computer Studies",
      description:
        "Build foundational computer and digital literacy skills",
      icon: Monitor,
    },
  ],

  5: [
    {
      name: "Mathematics",
      description:
        "Strengthen numerical understanding and mathematical problem-solving",
      icon: Calculator,
    },
    {
      name: "Science",
      description:
        "Explore scientific concepts through observation and experimentation",
      icon: FlaskConical,
    },
    {
      name: "Social Studies",
      description:
        "Understand society, communities, history and geographical surroundings",
      icon: Globe2,
    },
    {
      name: "English Language",
      description:
        "Improve grammar, vocabulary, comprehension and communication",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Develop literary appreciation through stories, poems and texts",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop Hindi reading, writing, grammar and communication skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी वाचन, लेखन, व्याकरण आणि अभिव्यक्ती कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Computer Studies",
      description:
        "Develop foundational computer knowledge and digital skills",
      icon: Monitor,
    },
  ],

  6: [
    {
      name: "Physics",
      description:
        "Build foundations in physical science and understand fundamental phenomena",
      icon: Atom,
    },
    {
      name: "Chemistry",
      description:
        "Explore matter, materials and fundamental chemical concepts",
      icon: FlaskConical,
    },
    {
      name: "Biology",
      description:
        "Study living organisms, life processes and biological concepts",
      icon: Dna,
    },
    {
      name: "History & Civics",
      description:
        "Understand historical developments, society and civic life",
      icon: Landmark,
    },
    {
      name: "Geography",
      description:
        "Explore places, environments, physical features and geographical processes",
      icon: Globe2,
    },
    {
      name: "Mathematics",
      description:
        "Develop mathematical reasoning, calculations and problem-solving skills",
      icon: Calculator,
    },
    {
      name: "English Language",
      description:
        "Strengthen grammar, comprehension, writing and communication",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Explore literary texts and develop interpretation and appreciation",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop Hindi language, grammar, reading and writing skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Computer Studies",
      description:
        "Develop computer literacy and foundational digital skills",
      icon: Monitor,
    },
  ],

  7: [
    {
      name: "Physics",
      description:
        "Explore fundamental physical concepts and scientific phenomena",
      icon: Atom,
    },
    {
      name: "Chemistry",
      description:
        "Understand matter, materials and fundamental chemical principles",
      icon: FlaskConical,
    },
    {
      name: "Biology",
      description:
        "Study living organisms, life processes and biological systems",
      icon: Dna,
    },
    {
      name: "History & Civics",
      description:
        "Explore historical events, society and principles of civic life",
      icon: Landmark,
    },
    {
      name: "Geography",
      description:
        "Understand physical and human geography and the environment",
      icon: Globe2,
    },
    {
      name: "Mathematics",
      description:
        "Strengthen mathematical reasoning, concepts and problem-solving",
      icon: Calculator,
    },
    {
      name: "English Language",
      description:
        "Develop advanced grammar, comprehension, writing and communication",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Analyse literary texts and develop interpretation skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Strengthen Hindi language, grammar, literature and communication",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Computer Studies",
      description:
        "Build computer knowledge and practical digital skills",
      icon: Monitor,
    },
  ],

  8: [
    {
      name: "Physics",
      description:
        "Develop deeper understanding of physical principles and phenomena",
      icon: Atom,
    },
    {
      name: "Chemistry",
      description:
        "Explore chemical concepts, matter and scientific processes",
      icon: FlaskConical,
    },
    {
      name: "Biology",
      description:
        "Study life processes, organisms and biological systems",
      icon: Dna,
    },
    {
      name: "History & Civics",
      description:
        "Understand historical developments and principles of citizenship",
      icon: Landmark,
    },
    {
      name: "Geography",
      description:
        "Explore physical features, environments and human geography",
      icon: Globe2,
    },
    {
      name: "Mathematics",
      description:
        "Strengthen mathematical concepts, reasoning and problem-solving",
      icon: Calculator,
    },
    {
      name: "English Language",
      description:
        "Develop advanced language, grammar, comprehension and writing skills",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Study literary works and develop critical reading skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop Hindi language, literature and communication skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Computer Studies",
      description:
        "Develop practical computer and digital literacy skills",
      icon: Monitor,
    },
  ],

  9: [
    {
      name: "English Language",
      description:
        "Develop advanced grammar, composition, comprehension and communication",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Study literary works and develop analytical and interpretive skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop Hindi language, literature and communication skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "History & Civics",
      description:
        "Study historical developments and principles of civic life",
      icon: Landmark,
    },
    {
      name: "Geography",
      description:
        "Explore physical and human geography and geographical processes",
      icon: Globe2,
    },
    {
      name: "Mathematics",
      description:
        "Develop mathematical reasoning, algebra, geometry and problem-solving",
      icon: Calculator,
    },
    {
      name: "Physics",
      description:
        "Study fundamental concepts and principles of physics",
      icon: Atom,
    },
    {
      name: "Chemistry",
      description:
        "Explore matter, chemical reactions and fundamental chemistry",
      icon: FlaskConical,
    },
    {
      name: "Biology",
      description:
        "Study living organisms, life processes and biological systems",
      icon: Dna,
    },
    {
      name: "Commercial Studies / Economics",
      description:
        "Explore commercial concepts, economics and practical business understanding",
      icon: TrendingUp,
    },
    {
      name: "Computer Applications",
      description:
        "Develop programming, computational and practical computer skills",
      icon: Monitor,
    },
    {
      name: "Commercial Applications",
      description:
        "Build understanding of commercial and business applications",
      icon: BriefcaseBusiness,
    },
  ],

  10: [
    {
      name: "English Language",
      description:
        "Strengthen advanced grammar, composition, comprehension and communication",
      icon: BookOpen,
    },
    {
      name: "English Literature",
      description:
        "Analyse literary works and develop critical interpretation skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description:
        "Develop Hindi language, literature and communication skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "History & Civics",
      description:
        "Study historical developments and principles of civic life",
      icon: Landmark,
    },
    {
      name: "Geography",
      description:
        "Understand physical and human geography and geographical processes",
      icon: Globe2,
    },
    {
      name: "Mathematics",
      description:
        "Build strong mathematical reasoning and problem-solving skills",
      icon: Calculator,
    },
    {
      name: "Physics",
      description:
        "Develop understanding of fundamental physical principles",
      icon: Atom,
    },
    {
      name: "Chemistry",
      description:
        "Explore chemical concepts, reactions and properties of matter",
      icon: FlaskConical,
    },
    {
      name: "Biology",
      description:
        "Study organisms, life processes and biological systems",
      icon: Dna,
    },
    {
      name: "Computer Applications",
      description:
        "Develop programming and practical computer application skills",
      icon: Monitor,
    },
    {
      name: "Commercial Applications",
      description:
        "Understand commercial concepts and practical business applications",
      icon: BriefcaseBusiness,
    },
  ],

  11: [
    // Compulsory
    {
      name: "English (Language & Literature)",
      description:
        "Develop advanced language, communication and literary skills",
      icon: BookOpen,
    },

    // Science Stream
    {
      name: "Physics",
      description:
        "Study fundamental principles and applications of physics",
      icon: Atom,
    },
    {
      name: "Chemistry",
      description:
        "Explore chemical principles, matter and chemical processes",
      icon: FlaskConical,
    },
    {
      name: "Mathematics",
      description:
        "Develop advanced mathematical reasoning and problem-solving skills",
      icon: Calculator,
    },
    {
      name: "Biology",
      description:
        "Study living organisms, biological processes and life sciences",
      icon: Dna,
    },
    {
      name: "Computer Science",
      description:
        "Develop programming, computational thinking and computer science skills",
      icon: Monitor,
    },

    // Commerce Stream
    {
      name: "Commerce",
      description:
        "Understand commerce, business activities and economic processes",
      icon: BriefcaseBusiness,
    },
    {
      name: "Accountancy",
      description:
        "Learn accounting concepts, records and financial principles",
      icon: FileText,
    },
    {
      name: "Economics",
      description:
        "Understand economic concepts, markets and economic activities",
      icon: TrendingUp,
    },
    {
      name: "Business Studies",
      description:
        "Explore business organisations, management and commercial practices",
      icon: BriefcaseBusiness,
    },
    {
      name: "Business Mathematics",
      description:
        "Apply mathematical concepts to business and commercial situations",
      icon: Calculator,
    },

    // Humanities / Arts
    {
      name: "History",
      description:
        "Explore historical developments, events and societies",
      icon: Landmark,
    },
    {
      name: "Political Science",
      description:
        "Study political systems, institutions and political ideas",
      icon: Scale,
    },
    {
      name: "Geography",
      description:
        "Study physical and human geography and geographical processes",
      icon: Globe2,
    },
    {
      name: "Sociology",
      description:
        "Understand society, social institutions and human relationships",
      icon: Users,
    },
    {
      name: "Psychology",
      description:
        "Explore human behaviour, psychological processes and development",
      icon: Brain,
    },

    // General Electives
    {
      name: "Hindi",
      description:
        "Develop Hindi language, literature and communication skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Environmental Science",
      description:
        "Explore environmental systems, sustainability and ecological issues",
      icon: Globe2,
    },
    {
      name: "Physical Education",
      description:
        "Develop knowledge of physical fitness, health and wellbeing",
      icon: GraduationCap,
    },
    {
      name: "Art",
      description:
        "Develop creativity, visual expression and artistic skills",
      icon: Lightbulb,
    },
  ],

  12: [
    // Compulsory
    {
      name: "English (Language & Literature)",
      description:
        "Strengthen advanced language, communication and literary skills",
      icon: BookOpen,
    },

    // Science Stream
    {
      name: "Physics",
      description:
        "Study advanced principles and applications of physics",
      icon: Atom,
    },
    {
      name: "Chemistry",
      description:
        "Explore advanced chemical principles and processes",
      icon: FlaskConical,
    },
    {
      name: "Mathematics",
      description:
        "Develop advanced mathematical reasoning and problem-solving",
      icon: Calculator,
    },
    {
      name: "Biology",
      description:
        "Study advanced biological concepts and life processes",
      icon: Dna,
    },
    {
      name: "Computer Science",
      description:
        "Develop advanced programming and computational skills",
      icon: Monitor,
    },

    // Commerce Stream
    {
      name: "Commerce",
      description:
        "Explore commerce, business activities and economic processes",
      icon: BriefcaseBusiness,
    },
    {
      name: "Accountancy",
      description:
        "Study accounting principles, financial records and analysis",
      icon: FileText,
    },
    {
      name: "Economics",
      description:
        "Explore economic theories, markets and economic activities",
      icon: TrendingUp,
    },
    {
      name: "Business Studies",
      description:
        "Study business organisations, management and commercial practices",
      icon: BriefcaseBusiness,
    },
    {
      name: "Business Mathematics",
      description:
        "Apply mathematical concepts to business and commercial problems",
      icon: Calculator,
    },

    // Humanities / Arts
    {
      name: "History",
      description:
        "Explore historical developments, events and societies",
      icon: Landmark,
    },
    {
      name: "Political Science",
      description:
        "Study political systems, institutions and political ideas",
      icon: Scale,
    },
    {
      name: "Geography",
      description:
        "Study physical and human geography and geographical processes",
      icon: Globe2,
    },
    {
      name: "Sociology",
      description:
        "Understand society, social structures and contemporary social life",
      icon: Users,
    },
    {
      name: "Psychology",
      description:
        "Explore human behaviour, psychological processes and development",
      icon: Brain,
    },

    // General Electives
    {
      name: "Hindi",
      description:
        "Develop Hindi language, literature and communication skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description:
        "मराठी भाषा, साहित्य, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
    {
      name: "Environmental Science",
      description:
        "Explore environmental systems, sustainability and ecological issues",
      icon: Globe2,
    },
    {
      name: "Physical Education",
      description:
        "Develop knowledge of physical fitness, health and wellbeing",
      icon: GraduationCap,
    },
    {
      name: "Art",
      description:
        "Develop creativity, visual expression and artistic skills",
      icon: Lightbulb,
    },
  ],
};


// =====================================================
// NIOS
// =====================================================
const niosSubjectData = {
  // =========================================================
  // OBE - LEVEL A
  // Equivalent to Classes 1st - 3rd
  // =========================================================

  1: [
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Basic Language Skills",
      description:
        "Build foundational Hindi and English language, reading and communication skills",
      icon: Languages,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Mathematics",
      description:
        "Develop basic number sense, calculations and mathematical understanding",
      icon: Calculator,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Environmental Studies",
      description:
        "Explore surroundings, nature, family, community, health and everyday life",
      icon: Globe2,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Basic Computer Skills",
      description:
        "Develop foundational computer and digital literacy skills",
      icon: Monitor,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Vocational Skills",
      description:
        "Develop basic practical and vocational skills",
      icon: BriefcaseBusiness,
    },
  ],

  2: [
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Basic Language Skills",
      description:
        "Build foundational Hindi and English language, reading and communication skills",
      icon: Languages,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Mathematics",
      description:
        "Strengthen number sense, calculations and basic mathematical reasoning",
      icon: Calculator,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Environmental Studies",
      description:
        "Learn about nature, surroundings, family, community and everyday life",
      icon: Globe2,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Basic Computer Skills",
      description:
        "Build foundational computer and digital literacy skills",
      icon: Monitor,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Vocational Skills",
      description:
        "Develop basic practical and vocational skills",
      icon: BriefcaseBusiness,
    },
  ],

  3: [
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Basic Language Skills",
      description:
        "Develop foundational Hindi and English reading, writing and communication skills",
      icon: Languages,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Mathematics",
      description:
        "Develop mathematical understanding, calculations and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Environmental Studies",
      description:
        "Explore nature, surroundings, communities, health and everyday life",
      icon: Globe2,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Basic Computer Skills",
      description:
        "Develop basic computer and digital literacy skills",
      icon: Monitor,
    },
    {
      group: "OBE Level A",
      groupLabel: "Equivalent to Classes 1st – 3rd",
      name: "Vocational Skills",
      description:
        "Develop basic practical and vocational skills",
      icon: BriefcaseBusiness,
    },
  ],

  // =========================================================
  // OBE - LEVEL B
  // Equivalent to Classes 4th - 5th
  // =========================================================

  4: [
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Language Skills",
      description:
        "Strengthen language, reading, writing and communication skills",
      icon: Languages,
    },
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Mathematics",
      description:
        "Develop mathematical concepts, calculations and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Environmental Studies",
      description:
        "Explore environment, society, nature, health and everyday surroundings",
      icon: Globe2,
    },
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Basic Computer Skills",
      description:
        "Develop foundational computer and digital skills",
      icon: Monitor,
    },
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Pre-Vocational Education",
      description:
        "Develop practical skills and early vocational awareness",
      icon: BriefcaseBusiness,
    },
  ],

  5: [
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Language Skills",
      description:
        "Strengthen language comprehension, reading, writing and communication",
      icon: Languages,
    },
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Mathematics",
      description:
        "Build stronger mathematical reasoning and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Environmental Studies",
      description:
        "Explore natural surroundings, society, health and environmental awareness",
      icon: Globe2,
    },
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Basic Computer Skills",
      description:
        "Develop practical computer and digital literacy skills",
      icon: Monitor,
    },
    {
      group: "OBE Level B",
      groupLabel: "Equivalent to Classes 4th – 5th",
      name: "Pre-Vocational Education",
      description:
        "Build practical skills and vocational awareness",
      icon: BriefcaseBusiness,
    },
  ],

  // =========================================================
  // OBE - LEVEL C
  // Equivalent to Classes 6th - 8th
  // =========================================================

  6: [
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "English Language",
      description:
        "Develop English reading, writing, grammar and communication skills",
      icon: BookOpen,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Hindi",
      description:
        "Develop Hindi language, reading, writing and communication skills",
      icon: Languages,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Mathematics",
      description:
        "Build mathematical reasoning, concepts and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Science",
      description:
        "Explore fundamental concepts in physical, chemical and biological sciences",
      icon: FlaskConical,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Social Science",
      description:
        "Explore history, geography, society and civic life",
      icon: Globe2,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Basic Computer Skills",
      description:
        "Develop practical computer and digital literacy skills",
      icon: Monitor,
    },
  ],

  7: [
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "English Language",
      description:
        "Strengthen English grammar, comprehension, writing and communication",
      icon: BookOpen,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Hindi",
      description:
        "Strengthen Hindi language, reading and writing skills",
      icon: Languages,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Mathematics",
      description:
        "Develop mathematical concepts, reasoning and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Science",
      description:
        "Explore scientific concepts and applications",
      icon: FlaskConical,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Social Science",
      description:
        "Study history, geography, society and civic concepts",
      icon: Globe2,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Basic Computer Skills",
      description:
        "Build practical computer and digital skills",
      icon: Monitor,
    },
  ],

  8: [
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "English Language",
      description:
        "Develop advanced English language and communication skills",
      icon: BookOpen,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Hindi",
      description:
        "Develop Hindi language, comprehension and communication skills",
      icon: Languages,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Mathematics",
      description:
        "Strengthen mathematical reasoning and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Science",
      description:
        "Explore fundamental scientific principles and applications",
      icon: FlaskConical,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Social Science",
      description:
        "Study history, geography, society and civic life",
      icon: Globe2,
    },
    {
      group: "OBE Level C",
      groupLabel: "Equivalent to Classes 6th – 8th",
      name: "Basic Computer Skills",
      description:
        "Develop practical computer knowledge and digital skills",
      icon: Monitor,
    },
  ],

  // =========================================================
  // SECONDARY COURSE
  // Classes 9th - 10th
  // =========================================================

  9: [
    // Group A - Languages
    {
      group: "Group A",
      groupLabel: "Languages — Choose 1 or 2",
      name: "Hindi",
      code: "201",
      description:
        "Develop Hindi language, literature, comprehension and communication skills",
      icon: Languages,
    },
    {
      group: "Group A",
      groupLabel: "Languages — Choose 1 or 2",
      name: "English",
      code: "202",
      description:
        "Develop English language, comprehension, writing and communication skills",
      icon: BookOpen,
    },
    {
      group: "Group A",
      groupLabel: "Languages — Wisenery offering",
      name: "Marathi",
      description:
        "मराठी भाषा, वाचन, लेखन आणि व्याकरण कौशल्य विकसित करा",
      icon: Languages,
    },

    // Group B - Core & Skill Academic Subjects
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Mathematics",
      code: "211",
      description:
        "Develop mathematical reasoning, concepts and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Science and Technology",
      code: "212",
      description:
        "Explore fundamental concepts in science and technology",
      icon: FlaskConical,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Social Science",
      code: "213",
      description:
        "Study society, history, geography and civic concepts",
      icon: Globe2,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Economics",
      code: "214",
      description:
        "Understand economic concepts, activities and systems",
      icon: TrendingUp,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Business Studies",
      code: "215",
      description:
        "Explore business concepts, organisations and commercial activities",
      icon: BriefcaseBusiness,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Home Science",
      code: "216",
      description:
        "Explore concepts related to home, family, nutrition and everyday living",
      icon: GraduationCap,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Psychology",
      code: "222",
      description:
        "Explore human behaviour, psychological processes and development",
      icon: Brain,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Indian Culture and Heritage",
      code: "223",
      description:
        "Explore India's cultural heritage, traditions and historical development",
      icon: Landmark,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Data Entry Operations",
      code: "229",
      description:
        "Develop practical data entry and digital workplace skills",
      icon: Monitor,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Accountancy",
      code: "224",
      description:
        "Learn accounting concepts, records and financial principles",
      icon: FileText,
    },
  ],

  10: [
    // Group A - Languages
    {
      group: "Group A",
      groupLabel: "Languages — Choose 1 or 2",
      name: "Hindi",
      code: "201",
      description:
        "Develop Hindi language, literature, comprehension and communication skills",
      icon: Languages,
    },
    {
      group: "Group A",
      groupLabel: "Languages — Choose 1 or 2",
      name: "English",
      code: "202",
      description:
        "Develop English language, comprehension, writing and communication skills",
      icon: BookOpen,
    },
    {
      group: "Group A",
      groupLabel: "Languages — Wisenery offering",
      name: "Marathi",
      description:
        "मराठी भाषा, वाचन, लेखन आणि व्याकरण कौशल्य विकसित करा",
      icon: Languages,
    },

    // Group B - Core & Skill Academic Subjects
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Mathematics",
      code: "211",
      description:
        "Develop mathematical reasoning, concepts and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Science and Technology",
      code: "212",
      description:
        "Explore fundamental concepts in science and technology",
      icon: FlaskConical,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Social Science",
      code: "213",
      description:
        "Study society, history, geography and civic concepts",
      icon: Globe2,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Economics",
      code: "214",
      description:
        "Understand economic concepts, activities and systems",
      icon: TrendingUp,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Business Studies",
      code: "215",
      description:
        "Explore business concepts, organisations and commercial activities",
      icon: BriefcaseBusiness,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Home Science",
      code: "216",
      description:
        "Explore concepts related to home, family, nutrition and everyday living",
      icon: GraduationCap,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Psychology",
      code: "222",
      description:
        "Explore human behaviour and psychological processes",
      icon: Brain,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Indian Culture and Heritage",
      code: "223",
      description:
        "Explore India's culture, heritage and historical development",
      icon: Landmark,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Data Entry Operations",
      code: "229",
      description:
        "Develop practical data entry and digital workplace skills",
      icon: Monitor,
    },
    {
      group: "Group B",
      groupLabel: "Core & Skill Academic Subjects",
      name: "Accountancy",
      code: "224",
      description:
        "Learn accounting concepts, records and financial principles",
      icon: FileText,
    },
  ],

  // =========================================================
  // SENIOR SECONDARY COURSE
  // Classes 11th - 12th
  // =========================================================

  11: [
    // Group A - Languages
    {
      group: "Group A",
      groupLabel: "Languages — Choose 1 or 2",
      name: "Hindi",
      code: "301",
      description:
        "Develop advanced Hindi language, literature and communication skills",
      icon: Languages,
    },
    {
      group: "Group A",
      groupLabel: "Languages — Choose 1 or 2",
      name: "English",
      code: "302",
      description:
        "Develop advanced English language, comprehension and communication skills",
      icon: BookOpen,
    },

    // Science Stream
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Mathematics",
      code: "311",
      description:
        "Develop advanced mathematical reasoning and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Physics",
      code: "312",
      description:
        "Study fundamental principles and applications of physics",
      icon: Atom,
    },
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Chemistry",
      code: "313",
      description:
        "Explore chemical principles, matter and chemical processes",
      icon: FlaskConical,
    },
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Biology",
      code: "314",
      description:
        "Study living organisms, life processes and biological systems",
      icon: Dna,
    },
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Environmental Science",
      code: "333",
      description:
        "Explore environmental systems, sustainability and ecological concepts",
      icon: Globe2,
    },

    // Commerce Stream
    {
      group: "Commerce Stream Core",
      groupLabel: "Commerce Stream",
      name: "Accountancy",
      code: "320",
      description:
        "Study accounting concepts, records and financial principles",
      icon: FileText,
    },
    {
      group: "Commerce Stream Core",
      groupLabel: "Commerce Stream",
      name: "Business Studies",
      code: "319",
      description:
        "Explore business organisations, management and commercial practices",
      icon: BriefcaseBusiness,
    },
    {
      group: "Commerce Stream Core",
      groupLabel: "Commerce Stream",
      name: "Economics",
      code: "318",
      description:
        "Study economic concepts, markets and economic activities",
      icon: TrendingUp,
    },

    // Humanities / Arts
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "History",
      code: "315",
      description:
        "Explore historical developments, events and societies",
      icon: Landmark,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Geography",
      code: "316",
      description:
        "Study physical and human geography and geographical processes",
      icon: Globe2,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Political Science",
      code: "317",
      description:
        "Study political systems, institutions and political ideas",
      icon: Scale,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Psychology",
      code: "328",
      description:
        "Explore human behaviour, psychological processes and development",
      icon: Brain,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Sociology",
      code: "331",
      description:
        "Understand society, social structures and social relationships",
      icon: Users,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Painting",
      code: "332",
      description:
        "Develop artistic expression, creativity and visual skills",
      icon: Lightbulb,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Mass Communication",
      code: "335",
      description:
        "Explore communication, media and mass communication concepts",
      icon: Globe2,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Library & Information Science",
      code: "339",
      description:
        "Develop understanding of information organisation and library systems",
      icon: BookOpen,
    },

    // Technical & IT
    {
      group: "Technical & IT Core",
      groupLabel: "Technical & IT",
      name: "Computer Science",
      code: "330",
      description:
        "Develop programming, computational thinking and computer science skills",
      icon: Monitor,
    },
    {
      group: "Technical & IT Core",
      groupLabel: "Technical & IT",
      name: "Data Entry Operations",
      code: "336",
      description:
        "Develop practical data entry and digital workplace skills",
      icon: Monitor,
    },
    {
      group: "Technical & IT Core",
      groupLabel: "Technical & IT",
      name: "Web Designing",
      code: "349",
      description:
        "Learn foundational web design and website development concepts",
      icon: Monitor,
    },
  ],

  12: [
    // Group A - Languages
    {
      group: "Group A",
      groupLabel: "Languages — Choose 1 or 2",
      name: "Hindi",
      code: "301",
      description:
        "Develop advanced Hindi language, literature and communication skills",
      icon: Languages,
    },
    {
      group: "Group A",
      groupLabel: "Languages — Choose 1 or 2",
      name: "English",
      code: "302",
      description:
        "Develop advanced English language, comprehension and communication skills",
      icon: BookOpen,
    },

    // Science Stream
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Mathematics",
      code: "311",
      description:
        "Develop advanced mathematical reasoning and problem-solving skills",
      icon: Calculator,
    },
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Physics",
      code: "312",
      description:
        "Study advanced principles and applications of physics",
      icon: Atom,
    },
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Chemistry",
      code: "313",
      description:
        "Explore advanced chemical principles and processes",
      icon: FlaskConical,
    },
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Biology",
      code: "314",
      description:
        "Study advanced biological concepts and life processes",
      icon: Dna,
    },
    {
      group: "Science Stream Core",
      groupLabel: "Science Stream",
      name: "Environmental Science",
      code: "333",
      description:
        "Explore environmental systems, sustainability and ecological issues",
      icon: Globe2,
    },

    // Commerce Stream
    {
      group: "Commerce Stream Core",
      groupLabel: "Commerce Stream",
      name: "Accountancy",
      code: "320",
      description:
        "Study accounting principles, financial records and analysis",
      icon: FileText,
    },
    {
      group: "Commerce Stream Core",
      groupLabel: "Commerce Stream",
      name: "Business Studies",
      code: "319",
      description:
        "Study business organisations, management and commercial practices",
      icon: BriefcaseBusiness,
    },
    {
      group: "Commerce Stream Core",
      groupLabel: "Commerce Stream",
      name: "Economics",
      code: "318",
      description:
        "Explore economic theories, markets and economic activities",
      icon: TrendingUp,
    },

    // Humanities / Arts
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "History",
      code: "315",
      description:
        "Explore historical developments, events and societies",
      icon: Landmark,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Geography",
      code: "316",
      description:
        "Study physical and human geography and geographical processes",
      icon: Globe2,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Political Science",
      code: "317",
      description:
        "Study political systems, institutions and political ideas",
      icon: Scale,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Psychology",
      code: "328",
      description:
        "Explore human behaviour, psychological processes and development",
      icon: Brain,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Sociology",
      code: "331",
      description:
        "Understand society, social structures and contemporary social life",
      icon: Users,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Painting",
      code: "332",
      description:
        "Develop artistic expression, creativity and visual skills",
      icon: Lightbulb,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Mass Communication",
      code: "335",
      description:
        "Explore communication, media and mass communication concepts",
      icon: Globe2,
    },
    {
      group: "Humanities / Arts Core",
      groupLabel: "Humanities / Arts Stream",
      name: "Library & Information Science",
      code: "339",
      description:
        "Develop understanding of information organisation and library systems",
      icon: BookOpen,
    },

    // Technical & IT
    {
      group: "Technical & IT Core",
      groupLabel: "Technical & IT",
      name: "Computer Science",
      code: "330",
      description:
        "Develop programming, computational thinking and computer science skills",
      icon: Monitor,
    },
    {
      group: "Technical & IT Core",
      groupLabel: "Technical & IT",
      name: "Data Entry Operations",
      code: "336",
      description:
        "Develop practical data entry and digital workplace skills",
      icon: Monitor,
    },
    {
      group: "Technical & IT Core",
      groupLabel: "Technical & IT",
      name: "Web Designing",
      code: "349",
      description:
        "Learn web design and website development concepts",
      icon: Monitor,
    },
  ],
};


// =====================================================
// STATE BOARDS
// =====================================================
// This represents Wisenery's current common offering.
// It is NOT presented as one official syllabus for every
// Indian state board.

// =====================================================
// STATE BOARDS
// =====================================================
// This represents Wisenery's current common offering.
// It is NOT presented as one official syllabus for every
// Indian state.

const stateBoardSubjectData = {
  1: [
    { name: "Marathi", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Mathematics", icon: Calculator },
  ],

  2: [
    { name: "Marathi", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Mathematics", icon: Calculator },
  ],

  3: [
    { name: "Marathi", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Mathematics", icon: Calculator },
    { name: "Environmental Studies", icon: Globe2 },
  ],

  4: [
    { name: "Marathi Sulabhbharati", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Mathematics", icon: Calculator },
    {
      name: "Environmental Studies – Part 1",
      icon: Globe2,
    },
    {
      name: "Environmental Studies – Part 2 (Shivachhatrapati)",
      icon: Landmark,
    },
  ],

  5: [
    { name: "Marathi", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Mathematics", icon: Calculator },
    {
      name: "Environmental Studies – Part 1",
      icon: Globe2,
    },
    {
      name: "Environmental Studies – Part 2",
      icon: Globe2,
    },
  ],

  6: [
    { name: "Marathi", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Hindi", icon: Languages },
    { name: "Mathematics", icon: Calculator },
    { name: "General Science", icon: FlaskConical },
    { name: "History", icon: Landmark },
    { name: "Geography", icon: Globe2 },
  ],

  7: [
    { name: "Marathi", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Hindi", icon: Languages },
    { name: "Mathematics", icon: Calculator },
    { name: "General Science", icon: FlaskConical },
    { name: "History", icon: Landmark },
    { name: "Geography", icon: Globe2 },
  ],

  8: [
    { name: "Marathi", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Hindi", icon: Languages },
    { name: "Mathematics", icon: Calculator },
    { name: "General Science", icon: FlaskConical },
    { name: "History", icon: Landmark },
    { name: "Geography", icon: Globe2 },
  ],

  9: [
    { name: "Marathi", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Hindi", icon: Languages },
    { name: "Mathematics – Part 1", icon: Calculator },
    { name: "Mathematics – Part 2", icon: Calculator },
    {
      name: "Science & Technology – Part 1",
      icon: FlaskConical,
    },
    {
      name: "Science & Technology – Part 2",
      icon: FlaskConical,
    },
    {
      name: "History & Political Science",
      icon: Landmark,
    },
    { name: "Geography", icon: Globe2 },
  ],

  10: [
    { name: "Marathi", icon: Languages },
    { name: "English", icon: Languages },
    { name: "Hindi", icon: Languages },
    { name: "Mathematics – Part 1", icon: Calculator },
    { name: "Mathematics – Part 2", icon: Calculator },
    {
      name: "Science & Technology – Part 1",
      icon: FlaskConical,
    },
    {
      name: "Science & Technology – Part 2",
      icon: FlaskConical,
    },
    {
      name: "History & Political Science",
      icon: Landmark,
    },
    { name: "Geography", icon: Globe2 },
  ],

  11: [
    // Science
    { name: "English", icon: Languages },
    { name: "Marathi", icon: Languages },
    {
      name: "Mathematics & Statistics",
      icon: Calculator,
    },
    { name: "Physics", icon: Atom },
    { name: "Chemistry", icon: FlaskConical },
    { name: "Biology", icon: Dna },
    { name: "Information Technology", icon: Monitor },

    // Commerce
    { name: "Economics", icon: TrendingUp },
    {
      name: "Book-Keeping & Accountancy",
      icon: Calculator,
    },
    {
      name: "Organisation of Commerce & Management",
      icon: BriefcaseBusiness,
    },
    {
      name: "Secretarial Practice",
      icon: FileText,
    },

    // Arts
    { name: "History", icon: Landmark },
    { name: "Geography", icon: Globe2 },
    { name: "Political Science", icon: Scale },
    { name: "Sociology", icon: Users },
    { name: "Psychology", icon: Brain },
  ],

  12: [
    // Science
    { name: "English", icon: Languages },
    { name: "Marathi", icon: Languages },
    {
      name: "Mathematics & Statistics",
      icon: Calculator,
    },
    { name: "Physics", icon: Atom },
    { name: "Chemistry", icon: FlaskConical },
    { name: "Biology", icon: Dna },
    { name: "Information Technology", icon: Monitor },

    // Commerce
    { name: "Economics", icon: TrendingUp },
    {
      name: "Book-Keeping & Accountancy",
      icon: Calculator,
    },
    {
      name: "Organisation of Commerce & Management",
      icon: BriefcaseBusiness,
    },
    {
      name: "Secretarial Practice",
      icon: FileText,
    },

    // Arts
    { name: "History", icon: Landmark },
    { name: "Geography", icon: Globe2 },
    { name: "Political Science", icon: Scale },
    { name: "Sociology", icon: Users },
    { name: "Psychology", icon: Brain },
  ],
};


// =====================================================
// INTERNATIONAL BOARDS
// =====================================================
// Wisenery-facing common subjects for IB / Cambridge-style
// international learning. International curricula vary by
// programme and school.

const internationalSubjectData = {
  1: [
    {
      name: "Mathematics",
      description: "Develop number sense, reasoning and problem solving",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Build reading, writing and communication skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "Develop language and communication skills",
      icon: Languages,
    },
    {
      name: "Marathi",
      description: "मराठी भाषा, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  2: [
    {
      name: "Mathematics",
      description: "Strengthen mathematical thinking and reasoning",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Improve reading, vocabulary and communication",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा और संचार कौशल विकसित करें",
      icon: Languages,
    },
    {
      name: "Marathi",
      description: "मराठी भाषा आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  3: [
    {
      name: "Mathematics",
      description: "Develop logical reasoning and problem solving",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Enhance language and communication skills",
      icon: BookOpen,
    },
    {
      name: "Science",
      description: "Explore the world through scientific inquiry",
      icon: FlaskConical,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा और लेखन कौशल विकसित करें",
      icon: Languages,
    },
    {
      name: "Marathi",
      description: "मराठी वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  4: [
    {
      name: "Mathematics",
      description: "Build mathematical reasoning and problem solving",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Develop advanced reading and communication skills",
      icon: BookOpen,
    },
    {
      name: "Science",
      description: "Explore scientific ideas through inquiry",
      icon: FlaskConical,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा और व्याकरण की समझ विकसित करें",
      icon: Languages,
    },
    {
      name: "Marathi",
      description: "मराठी भाषा, वाचन आणि लेखन विकसित करा",
      icon: Languages,
    },
  ],

  5: [
    {
      name: "Mathematics",
      description: "Strengthen analytical and mathematical thinking",
      icon: Calculator,
    },
    {
      name: "Science",
      description: "Explore scientific concepts and real-world connections",
      icon: FlaskConical,
    },
    {
      name: "English",
      description: "Build strong communication and literacy skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा और साहित्य की समझ विकसित करें",
      icon: Languages,
    },
    {
      name: "Marathi",
      description: "मराठी भाषा, वाचन आणि लेखन कौशल्य विकसित करा",
      icon: Languages,
    },
  ],

  6: [
    {
      name: "Language & Literature",
      description: "Develop language, literature and communication skills",
      icon: BookOpen,
    },
    {
      name: "Mathematics",
      description: "Develop analytical and mathematical reasoning",
      icon: Calculator,
    },
    {
      name: "Sciences",
      description: "Explore scientific concepts through inquiry",
      icon: FlaskConical,
    },
    {
      name: "Individuals & Societies",
      description: "Understand people, societies and the world",
      icon: Globe2,
    },
    {
      name: "Design",
      description: "Develop creative and problem solving skills",
      icon: Monitor,
    },
    {
      name: "Arts",
      description: "Explore creative expression and artistic thinking",
      icon: BookOpen,
    },
    {
      name: "Physical & Health Education",
      description: "Develop physical, social and personal wellbeing",
      icon: GraduationCap,
    },
  ],

  7: [
    {
      name: "Language & Literature",
      description: "Strengthen communication and literary analysis",
      icon: BookOpen,
    },
    {
      name: "Mathematics",
      description: "Develop logical and analytical thinking",
      icon: Calculator,
    },
    {
      name: "Sciences",
      description: "Explore scientific principles and inquiry",
      icon: FlaskConical,
    },
    {
      name: "Individuals & Societies",
      description: "Explore history, geography and society",
      icon: Globe2,
    },
    {
      name: "Design",
      description: "Apply creative thinking to real-world problems",
      icon: Monitor,
    },
    {
      name: "Arts",
      description: "Develop creativity and artistic expression",
      icon: BookOpen,
    },
    {
      name: "Physical & Health Education",
      description: "Build physical and personal wellbeing",
      icon: GraduationCap,
    },
  ],

  8: [
    {
      name: "Language & Literature",
      description: "Develop advanced language and literary skills",
      icon: BookOpen,
    },
    {
      name: "Mathematics",
      description: "Strengthen mathematical and analytical reasoning",
      icon: Calculator,
    },
    {
      name: "Sciences",
      description: "Explore scientific concepts and investigations",
      icon: FlaskConical,
    },
    {
      name: "Individuals & Societies",
      description: "Understand societies, history and geography",
      icon: Globe2,
    },
    {
      name: "Design",
      description: "Develop design thinking and digital skills",
      icon: Monitor,
    },
    {
      name: "Arts",
      description: "Explore visual and performing arts",
      icon: BookOpen,
    },
    {
      name: "Physical & Health Education",
      description: "Develop physical and personal wellbeing",
      icon: GraduationCap,
    },
  ],

  9: [
    {
      name: "Language & Literature",
      description: "Strengthen language and literary analysis",
      icon: BookOpen,
    },
    {
      name: "Language Acquisition",
      description: "Develop proficiency in an additional language",
      icon: Languages,
    },
    {
      name: "Individuals & Societies",
      description: "Explore history, geography and global societies",
      icon: Globe2,
    },
    {
      name: "Sciences",
      description: "Explore scientific concepts and inquiry",
      icon: FlaskConical,
    },
    {
      name: "Mathematics",
      description: "Develop advanced mathematical reasoning",
      icon: Calculator,
    },
    {
      name: "Arts",
      description: "Develop creativity and artistic expression",
      icon: BookOpen,
    },
    {
      name: "Design",
      description: "Apply design thinking to practical problems",
      icon: Monitor,
    },
    {
      name: "Physical & Health Education",
      description: "Build physical, social and personal wellbeing",
      icon: GraduationCap,
    },
  ],

  10: [
    {
      name: "Language & Literature",
      description: "Develop advanced language and literary skills",
      icon: BookOpen,
    },
    {
      name: "Language Acquisition",
      description: "Strengthen additional language proficiency",
      icon: Languages,
    },
    {
      name: "Individuals & Societies",
      description: "Understand global societies and systems",
      icon: Globe2,
    },
    {
      name: "Sciences",
      description: "Study scientific concepts through inquiry",
      icon: FlaskConical,
    },
    {
      name: "Mathematics",
      description: "Master mathematical concepts and reasoning",
      icon: Calculator,
    },
    {
      name: "Arts",
      description: "Explore artistic creation and expression",
      icon: BookOpen,
    },
    {
      name: "Design",
      description: "Develop design and problem solving skills",
      icon: Monitor,
    },
    {
      name: "Physical & Health Education",
      description: "Develop physical and personal wellbeing",
      icon: GraduationCap,
    },
  ],

  11: [
    {
      name: "Language & Literature",
      description: "Develop advanced language and literary analysis",
      icon: BookOpen,
    },
    {
      name: "Language Acquisition",
      description: "Develop proficiency in an additional language",
      icon: Languages,
    },
    {
      name: "Mathematics",
      description: "Study advanced mathematical concepts",
      icon: Calculator,
    },
    {
      name: "Physics",
      description: "Explore advanced concepts in physics",
      icon: FlaskConical,
    },
    {
      name: "Chemistry",
      description: "Study chemical principles and applications",
      icon: FlaskConical,
    },
    {
      name: "Biology",
      description: "Explore biological systems and processes",
      icon: FlaskConical,
    },
    {
      name: "Computer Science",
      description: "Develop computational and programming skills",
      icon: Monitor,
    },
    {
      name: "Economics",
      description: "Understand economic theory and global markets",
      icon: FileText,
    },
  ],

  12: [
    {
      name: "Language & Literature",
      description: "Master advanced language and literary analysis",
      icon: BookOpen,
    },
    {
      name: "Language Acquisition",
      description: "Strengthen additional language proficiency",
      icon: Languages,
    },
    {
      name: "Mathematics",
      description: "Master advanced mathematical concepts",
      icon: Calculator,
    },
    {
      name: "Physics",
      description: "Master advanced physics concepts",
      icon: FlaskConical,
    },
    {
      name: "Chemistry",
      description: "Explore advanced chemistry concepts",
      icon: FlaskConical,
    },
    {
      name: "Biology",
      description: "Understand advanced biological systems",
      icon: FlaskConical,
    },
    {
      name: "Computer Science",
      description: "Master programming and computational thinking",
      icon: Monitor,
    },
    {
      name: "Economics",
      description: "Explore economic theory and applications",
      icon: FileText,
    },
  ],
};

const boardConfigs = {
  cbse: {
    title: "CBSE BOARD",
    pageHeading: "CBSE Online Coaching Classes",
    aboutTitle: "What is CBSE?",
    aboutDescription: "The CBSE Schools in Pune follow a nationally recognized education system designed to provide a balanced and structured learning experience. The board focuses on conceptual understanding, academic development, and preparation for competitive examinations. Its curriculum is widely followed across India, making it a popular choice for students who may relocate or pursue higher education in different states.",
    aboutPoints: [
      "Full form — Central Board of Secondary Education",
      "National-level board in India",
      "Offers education from primary grades through Class 12 through affiliated schools",
      "Follows the NCERT-based curriculum for many subjects",
      "Emphasizes conceptual learning and application-based understanding",
      "Suitable for students preparing for competitive examinations",
    ],
    description:
      "Explore Wisenery's CBSE online coaching classes and subject support across grade levels.",
    curriculumLabel: "CBSE Language Curriculum",
    grades: Array.from({ length: 12 }, (_, i) => i + 1),
    categories: [
      { name: "Primary", range: [1, 5] },
      { name: "Middle School", range: [6, 8] },
      { name: "Secondary", range: [9, 10] },
      { name: "Senior Secondary", range: [11, 12] },
    ],
    note:
      "CBSE language choices can depend on the school and the student's language pathway.",
    subjectsByGrade: cbseSubjectData,
  },

  cisce: {
    title: "CISCE BOARD",
    pageHeading: "ICSE / CISCE Online Coaching Classes",
    aboutTitle: "What is ICSE / CISCE?",
    aboutDescription: "The ICSE Schools in Pune offer a comprehensive education system that emphasizes language skills, analytical thinking, and a broad understanding of academic subjects. The curriculum encourages students to develop strong reading, writing, and problem-solving abilities. With its detailed subject coverage and balanced approach to academics, it is a popular option for students seeking an in-depth learning experience.",
    aboutPoints: [
      "Full form — Indian Certificate of Secondary Education (ICSE)",
      "Conducted by the Council for the Indian School Certificate Examinations (CISCE)",
      "ICSE examination is generally taken at Class 10",
      "Offers a broad and detailed curriculum",
      "Emphasizes English language proficiency and practical learning",
      "Suitable for students who prefer in-depth subject understanding",
    ],
    description:
      "Explore Wisenery's ICSE / CISCE online coaching classes and subject support across grade levels.",
    curriculumLabel: "CISCE Language Curriculum",
    grades: Array.from({ length: 12 }, (_, i) => i + 1),
    categories: [
      { name: "Primary", range: [1, 5] },
      { name: "Upper Primary", range: [6, 8] },
      { name: "ICSE", range: [9, 10] },
      { name: "ISC", range: [11, 12] },
    ],
    note:
      "CISCE subject structures vary by stage and school offerings. ICSE and ISC have their own subject groups and language choices.",
    subjectsByGrade: cisceSubjectData,
  },

nios: {
  title: "NIOS",
  pageHeading: "NIOS Online Coaching Classes",
  aboutTitle: "What is NIOS?",
  aboutDescription: "The NIOS Schools in Pune is one of the largest open schooling systems in the world. It is designed to provide flexible education to learners who cannot attend regular schools. Students can study at their own pace and appear for exams when they feel prepared. This makes it a highly student-friendly system compared to traditional boards.",
  aboutPoints: [
    "Full form — National Institute of Open Schooling",
    "Established by Government of India",
    "Offers Class 10 and Class 12 certification",
    "Flexible learning and exam system",
    "Recognized by universities and government bodies",
    "Ideal for second chance learners",
  ],
  description:
    "Explore Wisenery's NIOS online coaching classes and learning support for Open Basic Education, Secondary and Senior Secondary programmes.",

  curriculumLabel: "NIOS Curriculum",

  grades: Array.from({ length: 12 }, (_, i) => i + 1),

  categories: [
    {
      name: "OBE Level A",
      range: [1, 3],
    },
    {
      name: "OBE Level B",
      range: [4, 5],
    },
    {
      name: "OBE Level C",
      range: [6, 8],
    },
    {
      name: "Secondary",
      range: [9, 10],
    },
    {
      name: "Senior Secondary",
      range: [11, 12],
    },
  ],

  note:
    "NIOS follows different learning stages and course structures. Classes 1–8 are represented through the Open Basic Education (OBE) Levels A, B and C, while Classes 9–10 follow the Secondary Course and Classes 11–12 follow the Senior Secondary Course. Subject choices at Secondary and Senior Secondary levels are organised into language and academic/stream groups.",

  subjectsByGrade: niosSubjectData,
},

  state: {
    title: "STATE BOARDS",
    pageHeading: "Maharashtra State Board Online Coaching Classes",
    aboutTitle: "What is the Maharashtra State Board?",
    aboutDescription: "The Maharashtra State Board Schools in Pune follow a curriculum designed to meet the educational needs of students across Maharashtra. The board provides a structured learning pathway with subjects and syllabi aligned with state education requirements. It is a widely followed option for students who want to continue their education within Maharashtra and prepare for state-level academic opportunities.",
    aboutPoints: [
      "Full form — Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
      "State-level education board in Maharashtra",
      "Conducts SSC examinations for Class 10",
      "Conducts HSC examinations for Class 12",
      "Offers curriculum aligned with Maharashtra's education system",
      "Suitable for students planning further studies within Maharashtra",
    ],
    description:
      "Explore Wisenery's Maharashtra State Board online coaching classes and subject support for state-board learners.",
    curriculumLabel: "State Board Language Curriculum",
    grades: Array.from({ length: 12 }, (_, i) => i + 1),
    categories: [
      { name: "Primary", range: [1, 5] },
      { name: "Middle School", range: [6, 8] },
      { name: "Secondary", range: [9, 10] },
      { name: "Higher Secondary", range: [11, 12] },
    ],
    note:
      "State-board subject combinations vary by state, medium and school. Wisenery currently offers English, Hindi and Marathi as its three language options.",
    subjectsByGrade: stateBoardSubjectData,
  },

  international: {
    title: "INTERNATIONAL BOARDS",
    pageHeading: "International Board Online Coaching Classes",
    aboutTitle: "What are International Boards?",
    aboutDescription: "International board education in Pune provides students with learning approaches that encourage inquiry, independent thinking, and the practical application of knowledge. Boards such as Cambridge International and the International Baccalaureate (IB) offer internationally oriented curricula designed to develop academic skills and global perspectives. These programs can be suitable for students considering international higher education.",
    aboutPoints: [
      "Includes boards such as Cambridge International and the International Baccalaureate (IB)",
      "Offers internationally oriented curricula",
      "Encourages critical thinking and independent learning",
      "Emphasizes research, inquiry, and practical application",
      "Provides different academic pathways depending on the board and program",
      "Suitable for students considering international universities",
    ],
    description:
      "Explore Wisenery's international board online coaching classes and subject support for international-curriculum learners.",
    curriculumLabel: "International Language Curriculum",
    grades: Array.from({ length: 12 }, (_, i) => i + 1),
    categories: [
      { name: "Primary", range: [1, 5] },
      { name: "Middle Years", range: [6, 8] },
      { name: "Secondary", range: [9, 10] },
      { name: "Senior Secondary", range: [11, 12] },
    ],
    note:
      "International curricula vary by programme and school. Wisenery presents a common learning structure covering language, mathematics, sciences and related areas.",
    subjectsByGrade: internationalSubjectData,
  },
};

const getCategoryRange = (category, categories) =>
  categories.find((item) => item.name === category)?.range || [];

const boardAliases = {
  icse: "cisce",
  isc: "cisce",
  "state-board": "state",
  "state-boards": "state",
  "stateboard": "state",
  "international-board": "international",
  "international-boards": "international",
  "internationalboard": "international",
};

export default function BoardDetails() {
  const { boardId } = useParams();

  const rawBoardKey = (boardId || "cbse").toLowerCase();
  const boardKey = boardAliases[rawBoardKey] || rawBoardKey;
  const board = boardConfigs[boardKey] || boardConfigs.cbse;

  const [selectedGrade, setSelectedGrade] = useState(board.grades[0]);

  useEffect(() => {
    setSelectedGrade(board.grades[0]);
  }, [boardKey]);

  const subjects =
    board.subjectsByGrade[selectedGrade] || board.subjectsByGrade[board.grades[0]] || [];

  const selectedIndex = board.grades.indexOf(selectedGrade);

  
const maharashtraBooksByGrade = {
  1: [
    {
      name: "Marathi",
      url: "https://ebooks.ebalbharati.in/pdfs/101050001.pdf",
    },
    {
      name: "Mathematics",
      url: "https://ebooks.ebalbharati.in/pdfs/101050004.pdf",
    },
    {
      name: "English",
      url: "https://ebooks.ebalbharati.in/pdfs/103050035.pdf",
    },
  ],
  2: [
    {
      name: "Marathi",
      url: "https://ebooks.ebalbharati.in/pdfs/201060001.pdf",
    },
    {
      name: "Mathematics",
      url: "https://ebooks.ebalbharati.in/pdfs/201060004.pdf",
    },
    {
      name: "English",
      url: "https://ebooks.ebalbharati.in/pdfs/203060035.pdf",
    },
  ],
  3: [
    {
      name: "Marathi",
      url: "https://ebooks.ebalbharati.in/pdfs/301060001.pdf",
    },
    {
      name: "Mathematics",
      url: "https://ebooks.ebalbharati.in/pdfs/301060004.pdf",
    },
    {
      name: "English",
      url: "https://ebooks.ebalbharati.in/pdfs/303060035.pdf",
    },
    {
      name: "Environmental Studies — Part 2",
      url: "https://ebooks.ebalbharati.in/pdfs/301000869.pdf",
    },
  ],
  4: [
    {
      name: "Marathi",
      url: "https://ebooks.ebalbharati.in/pdfs/401060001.pdf",
    },
    {
      name: "Mathematics",
      url: "https://ebooks.ebalbharati.in/pdfs/401060004.pdf",
    },
    {
      name: "English",
      url: "https://ebooks.ebalbharati.in/pdfs/403060035.pdf",
    },
    {
      name: "Environmental Studies — Part 1",
      url: "https://ebooks.ebalbharati.in/pdfs/401000868.pdf",
    },
    {
      name: "Environmental Studies — Part 2",
      url: "https://ebooks.ebalbharati.in/pdfs/401000869.pdf",
    },
  ],
  
  5: [
    {
      name: "Balbharati (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/501020001.pdf",
    },
    {
      name: "Balbharati (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/503020001.pdf",
    },
    {
      name: "Mathematics (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/503020004.pdf",
    },
    {
      name: "Mathematics (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/501020004.pdf",
    },
    {
      name: "English",
      url: "https://ebooks.ebalbharati.in/pdfs/501020035.pdf",
    },
    {
      name: "Environmental Studies — Part 1 (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/501000541.pdf",
    },
    {
      name: "Environmental Studies — Part 1 (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/503000541.pdf",
    },
    {
      name: "Environmental Studies — Part 2 (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/501000542.pdf",
    },
    {
      name: "Environmental Studies — Part 2 (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/503000542.pdf",
    },
  ],

  6: [
    {
      name: "Balbharati (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/601060001.pdf",
    },
    {
      name: "Balbharati (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/603060001.pdf",
    },
    {
      name: "Mathematics (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/603060004.pdf",
    },
    {
      name: "Mathematics (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/601060004.pdf",
    },
    {
      name: "Geography (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/601050011.pdf",
    },
    {
      name: "Geography (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/603050011.pdf",
    },
    {
      name: "General Science (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/601050012.pdf",
    },
    {
      name: "General Science (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/603050012.pdf",
    },
    {
      name: "History (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/601030584.pdf",
    },
  ],

  7: [
    {
      name: "Balbharati (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/701020001.pdf",
    },
    {
      name: "Balbharati (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/703020001.pdf",
    },
    {
      name: "English",
      url: "https://ebooks.ebalbharati.in/pdfs/703020035.pdf",
    },
    {
      name: "Hindi",
      url: "https://ebooks.ebalbharati.in/pdfs/702020021.pdf",
    },
    {
      name: "General Science (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/701020012.pdf",
    },
    {
      name: "General Science (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/703020012.pdf",
    },
    {
      name: "Geography (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/701020011.pdf",
    },
    {
      name: "Geography (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/703020011.pdf",
    },
    {
      name: "History and Civics (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/701000584.pdf",
    },
    {
      name: "History and Civics (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/703000584.pdf",
    },
    {
      name: "Mathematics (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/703020004.pdf",
    },
    {
      name: "Mathematics (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/701020004.pdf",
    },
  ],

  8: [
    {
      name: "Balbharati (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/801020001.pdf",
    },
    {
      name: "Balbharati (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/803020001.pdf",
    },
    {
      name: "English",
      url: "https://ebooks.ebalbharati.in/pdfs/803020035.pdf",
    },
    {
      name: "Hindi",
      url: "https://ebooks.ebalbharati.in/pdfs/802020021.pdf",
    },
    {
      name: "General Science (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/801020012.pdf",
    },
    {
      name: "General Science (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/803020012.pdf",
    },
    {
      name: "Geography (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/801020011.pdf",
    },
    {
      name: "Geography (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/803020011.pdf",
    },
    {
      name: "History and Civics (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/801000584.pdf",
    },
    {
      name: "History and Civics (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/803000584.pdf",
    },
    {
      name: "Mathematics (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/803020004.pdf",
    },
    {
      name: "Mathematics (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/801020004.pdf",
    },
  ],

  9: [
    {
      name: "History and Political Science (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/901010491.pdf",
    },
    {
      name: "History and Political Science (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/903010491.pdf",
    },
    {
      name: "Geography (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/901020011.pdf",
    },
    {
      name: "Geography (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/903020011.pdf",
    },
    {
      name: "Kumarbharati (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/901030024.pdf",
    },
    {
      name: "Kumarbharati (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/903030024.pdf",
    },
    {
      name: "Mathematics — Part 1 (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/903000608.pdf",
    },
    {
      name: "Mathematics — Part 1 (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/901000608.pdf",
    },
    {
      name: "Mathematics — Part 2 (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/903000609.pdf",
    },
    {
      name: "Mathematics — Part 2 (Marathi)",
      url: "https://ebooks.ebalbharati.in/pdfs/901000609.pdf",
    },
    {
      name: "Hindi",
      url: "https://ebooks.ebalbharati.in/pdfs/902030027.pdf",
    },
    {
      name: "Science and Technology (English)",
      url: "https://ebooks.ebalbharati.in/pdfs/903020456.pdf",
    },
    {
      name: "Science and Technology (medium to confirm)",
      url: "https://ebooks.ebalbharati.in/pdfs/903000607.pdf",
    },
  ],

};

const isMaharashtraBoard = boardKey === "state";

const gradeBooks = isMaharashtraBoard
  ? maharashtraBooksByGrade[Number(selectedGrade)] || []
  : [];


  return (
    <main className="min-h-screen bg-white px-4 py-6 text-[#111827] sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-[1450px]">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <section className="mb-7 text-center sm:mb-8">
          <p className="text-sm font-bold tracking-wide text-[#f36f21] sm:text-base">
            {board.title}
          </p>

          <div className="mx-auto mt-3 h-[2px] w-11 bg-[#f36f21]" />

          <h1
            className="
              mt-2
              text-[32px]
              font-bold
              leading-tight
              tracking-tight
              text-[#101318]
              sm:text-5xl
              lg:text-[52px]
            "
          >
            {board.pageHeading}
          </h1>

          <p
            className="
              mx-auto mt-3 max-w-[650px]
              text-[14px] leading-6
              text-gray-600
              sm:text-lg
            "
          >
            {board.description}
          </p>
        </section>

        {/* =====================================================
            ABOUT THE BOARD
        ===================================================== */}
        <section
          className="
            mb-5 rounded-2xl border border-orange-100
            bg-gradient-to-br from-orange-50/70 via-white to-white
            px-5 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.035)]
            sm:mb-6 sm:px-7 sm:py-6
          "
          aria-labelledby="about-board-heading"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100/70 sm:h-12 sm:w-12">
              <GraduationCap size={24} strokeWidth={1.8} className="text-[#f36f21]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f36f21]">
                Know your board
              </p>
              <h2
                id="about-board-heading"
                className="mt-1 text-xl font-bold tracking-tight text-[#101318] sm:text-2xl"
              >
                {board.aboutTitle}
              </h2>
              <p className="mt-2 max-w-[1100px] text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                {board.aboutDescription}
              </p>
              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {board.aboutPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f36f21]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =====================================================
            GRADE SELECTOR — ORANGE SECTION
        ===================================================== */}
        <section
          className="
            rounded-2xl
            border border-orange-100
            bg-gradient-to-br from-orange-50/50 via-white to-white
            px-4 py-5
            shadow-[0_2px_10px_rgba(0,0,0,0.04)]
            sm:px-7 sm:py-6
          "
        >
          {/* Section heading */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                bg-orange-100/70
                sm:h-11 sm:w-11
              "
            >
              <GraduationCap
                size={23}
                strokeWidth={1.8}
                className="text-[#f36f21]"
              />
            </div>

            <h2 className="text-base font-semibold sm:text-lg">
              1. Select your grade
            </h2>

            <div className="hidden h-px flex-1 bg-orange-100 sm:block" />
          </div>

          {/* Grade selector */}
          <div className="mt-6 overflow-x-auto pb-3 sm:mt-7">
            <div className="min-w-[820px] px-2">

              {/* Grade numbers */}
              <div className="relative flex items-start justify-between">

                {/* Background line */}
                <div className="absolute left-[25px] right-[25px] top-[23px] h-px bg-gray-300" />

                {/* Active orange line */}
                <div
                  className="
                    absolute
                    top-[22px]
                    h-[2px]
                    bg-[#f36f21]
                    transition-all
                    duration-300
                  "
                  style={{
                    left: "25px",
                    width:
                      selectedIndex <= 0
                        ? "0%"
                        : `${(selectedIndex / (board.grades.length - 1)) * 100}%`,
                  }}
                />

                {board.grades.map((grade) => {
                  const isSelected = selectedGrade === grade;

                  return (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => setSelectedGrade(grade)}
                      className="
                        group
                        relative
                        z-10
                        flex
                        min-w-[50px]
                        flex-col
                        items-center
                      "
                    >
                      <span
                        className={`
                          flex h-11 w-11 items-center justify-center
                          rounded-full border
                          text-sm font-medium
                          transition-all duration-200
                          sm:h-12 sm:w-12 sm:text-base
                          ${
                            isSelected
                              ? "scale-105 border-[#f36f21] bg-[#f36f21] text-white shadow-md"
                              : "border-gray-300 bg-white text-gray-800 hover:border-[#f36f21] hover:text-[#f36f21]"
                          }
                        `}
                      >
                        {grade}
                      </span>

                      <span
                        className={`
                          mt-2 whitespace-nowrap text-xs font-medium
                          sm:mt-3 sm:text-sm
                          ${
                            isSelected
                              ? "font-bold text-[#f36f21]"
                              : "text-gray-800"
                          }
                        `}
                      >
                        Class {grade}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Category labels */}
{/* Category labels */}
<div className="mt-7 flex sm:mt-8">
  {board.categories.map((categoryItem) => {
    const category = categoryItem.name;
    const [start, end] = getCategoryRange(
      category,
      board.categories
    );

    const active =
      selectedGrade >= start && selectedGrade <= end;

    const categoryWidth =
      ((end - start + 1) / board.grades.length) * 100;

    return (
      <div
        key={category}
        className="flex shrink-0 items-center justify-center gap-2 sm:gap-3"
        style={{
          width: `${categoryWidth}%`,
        }}
      >
        <span
          className={`
            h-px flex-1 border-t border-dotted
            ${
              active
                ? "border-orange-400"
                : "border-gray-300"
            }
          `}
        />

        <span
          className={`
            whitespace-nowrap text-[10px]
            sm:text-xs md:text-sm
            ${
              active
                ? "font-semibold text-[#f36f21]"
                : "text-gray-500"
            }
          `}
        >
          {category}
        </span>

        <span
          className={`
            h-px flex-1 border-t border-dotted
            ${
              active
                ? "border-orange-400"
                : "border-gray-300"
            }
          `}
        />
      </div>
    );
  })}
</div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SUBJECT SECTION — BLUE
        ===================================================== */}

{/* =====================================================
    SUBJECT / TEXTBOOK SECTION — BLUE
===================================================== */}
<section
  className="
    relative mt-3
    rounded-2xl
    border border-blue-100
    bg-white
    px-4 py-5
    shadow-[0_2px_10px_rgba(0,0,0,0.04)]
    sm:px-7 sm:py-6
  "
>
  {/* Blue pointer */}
  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
    <div
      className="
        h-0 w-0
        border-x-[11px]
        border-b-[12px]
        border-x-transparent
        border-b-blue-600
      "
    />
  </div>

  {/* Section header */}
  <div
    className="
      flex flex-col gap-4
      sm:flex-row sm:items-center sm:justify-between
      sm:gap-5
    "
  >
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <div
        className="
          flex h-12 w-12 shrink-0
          items-center justify-center
          rounded-full bg-blue-50
          sm:h-14 sm:w-14
        "
      >
        <BookOpen
          size={26}
          strokeWidth={1.7}
          className="text-blue-600 sm:h-7 sm:w-7"
        />
      </div>

      <div className="min-w-0">
        <h2 className="text-lg font-bold sm:text-xl">
          Class {selectedGrade}{" "}
          {isMaharashtraBoard ? "Textbooks" : "Subjects"}
        </h2>

        <p className="mt-1 text-[13px] leading-5 text-gray-600 sm:text-sm">
          {isMaharashtraBoard
            ? "Explore your textbooks and open the official PDF."
            : "Explore all subjects and start your learning journey."}
        </p>
      </div>
    </div>

    {/* Curriculum button */}
    <button
      type="button"
      onClick={() => {
        if (board.curriculumUrl) {
          window.open(
            board.curriculumUrl,
            "_blank",
            "noopener,noreferrer"
          );
        }
      }}
      disabled={!board.curriculumUrl}
      className="
        flex w-full items-center justify-center gap-2.5
        rounded-full border border-blue-100
        bg-blue-50/40 px-4 py-2.5
        text-sm font-semibold
        transition
        hover:border-blue-300 hover:bg-blue-50
        hover:text-blue-600
        disabled:cursor-not-allowed disabled:opacity-50
        sm:w-fit sm:px-5 sm:py-3
      "
    >
      <FileText size={18} className="text-blue-600" />
      <span>{board.curriculumLabel}</span>
      <ChevronRight size={18} className="text-blue-600" />
    </button>
  </div>

  {/* Maharashtra textbook cards */}
  {isMaharashtraBoard && gradeBooks.length > 0 ? (
    <div
      className="
        mt-5 grid grid-cols-2 gap-3
        sm:mt-6 sm:grid-cols-3 sm:gap-4
        lg:grid-cols-4 xl:grid-cols-5
      "
    >
      {gradeBooks.map((book) => (
        <a
          key={book.url}
          href={book.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open Class ${selectedGrade} ${book.name} textbook PDF`}
          className="
            group overflow-hidden rounded-xl
            border border-blue-100 bg-white
            transition-all duration-200
            hover:-translate-y-1
            hover:border-blue-300
            hover:shadow-[0_5px_18px_rgba(37,99,235,0.10)]
          "
        >
          {/* Book-cover placeholder */}
          <div
            className="
              relative flex aspect-[3/4]
              items-center justify-center
              overflow-hidden bg-gradient-to-br
              from-blue-50 via-white to-blue-100
              p-4
            "
          >
            <div
              className="
                absolute inset-y-0 left-0 w-2
                bg-blue-600/15
              "
            />

            <div className="flex flex-col items-center text-center">
              <BookOpen
                size={38}
                strokeWidth={1.4}
                className="
                  mb-4 text-blue-600
                  transition-transform duration-200
                  group-hover:scale-110
                "
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                Maharashtra State Board
              </span>

              <span className="mt-2 text-sm font-bold leading-snug text-gray-900 sm:text-base">
                {book.name}
              </span>

              <span className="mt-2 text-xs text-gray-500">
                Standard {selectedGrade}
              </span>
            </div>
          </div>

          {/* Card details */}
          <div className="p-3 sm:p-4">
            <h3 className="line-clamp-2 min-h-10 text-sm font-semibold text-gray-900">
              {book.name}
            </h3>

            <div
              className="
                mt-3 flex items-center justify-center gap-1.5
                rounded-full bg-blue-50 px-2 py-2
                text-xs font-semibold text-blue-700
                transition-colors group-hover:bg-blue-600
                group-hover:text-white sm:text-sm
              "
            >
              <FileText size={15} />
              <span>View PDF</span>
              <ChevronRight size={15} />
            </div>
          </div>
        </a>
      ))}
    </div>
  ) : isMaharashtraBoard ? (
    <div className="mt-5 rounded-xl border border-dashed border-blue-200 bg-blue-50/40 px-4 py-8 text-center">
      <BookOpen
        size={30}
        className="mx-auto mb-3 text-blue-500"
      />
      <h3 className="font-semibold text-gray-900">
        Textbooks coming soon
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        Textbook links for Class {selectedGrade} will be added soon.
      </p>
    </div>
  ) : (
    /* Keep the existing subject cards for other boards */
    <div
      className="
        mt-5 grid grid-cols-1 gap-3
        sm:mt-6 sm:grid-cols-2 sm:gap-4
        lg:grid-cols-4
      "
    >
      {subjects.map((subject) => {
        const Icon = subject.icon;

        return (
          <button
            key={subject.name}
            type="button"
            className="
              group flex min-h-[100px] items-center gap-3
              rounded-xl border border-blue-100 bg-white
              px-3.5 py-3.5 text-left
              transition-all duration-200
              hover:-translate-y-0.5 hover:border-blue-300
              hover:bg-blue-50/20
              hover:shadow-[0_5px_18px_rgba(37,99,235,0.08)]
              sm:min-h-[110px] sm:gap-4 sm:px-4 sm:py-4
            "
          >
            <div
              className="
                flex h-12 w-12 shrink-0 items-center
                justify-center rounded-full bg-blue-50
                sm:h-14 sm:w-14
              "
            >
              <Icon
                size={26}
                strokeWidth={1.7}
                className="text-blue-600 sm:h-[29px] sm:w-[29px]"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-[15px] font-semibold text-gray-900 sm:text-base">
                {subject.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-gray-600 sm:text-sm">
                {subject.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  )}

  {/* Bottom information */}
  <div
    className="
      mt-4 flex items-start gap-3
      rounded-xl bg-blue-50/60 px-4 py-3.5
      sm:mt-5 sm:items-center sm:gap-4 sm:px-5 sm:py-4
    "
  >
    <Lightbulb
      size={21}
      strokeWidth={1.8}
      className="mt-0.5 shrink-0 text-blue-600 sm:mt-0"
    />

    <p className="text-[13px] leading-5 text-gray-600 sm:text-sm">
      {isMaharashtraBoard
        ? "Textbook links direct you to the official Balbharati PDF. Book availability may vary by class and medium."
        : "Language offerings are shown for Wisenery's current online language classes and are aligned to the board/programme structure described above."}
    </p>
  </div>
</section>

      </div>
    </main>
  );
}