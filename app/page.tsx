"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Mail, Play, ExternalLink, Calculator, Hand, Car, Ruler, Eye, Shield, Coffee, Zap } from "lucide-react"
import {
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiC,
  SiPython,
  SiArduino,
  SiReact,
  SiJavascript,
  SiTypescript,
} from "react-icons/si"
import { FaLanguage, FaGamepad, FaGoogle } from "react-icons/fa"

export default function Portfolio() {
  const skills = [
    { icon: SiArduino, name: "Arduino", color: "#00979D", level: 70, joke: "My Arduino speaks 6 languages too!" },
    { icon: SiCplusplus, name: "C++", color: "#00599C", level: 40, joke: "Segfault? More like seg-fun!" },
    { icon: SiC, name: "C", color: "#A8B9CC", level: 35, joke: "malloc() my heart ❤️" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26", level: 25, joke: "<div>ine comedy</div>" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6", level: 25, joke: "!important; // like my coffee" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", level: 25, joke: "undefined is not a function... yet" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6", level: 25, joke: "Type safety > life safety" },
    { icon: SiReact, name: "React", color: "#61DAFB", level: 25, joke: "useState([happy, coding])" },
    { icon: SiPython, name: "Python", color: "#3776AB", level: 30, joke: "import antigravity # it works!" },
  ]

  const languages = [
    { name: "Arabic", level: "Native", description: "Mother tongue", position: 1, joke: "أنا مبرمج 👨‍💻" },
    { name: "Tamazight", level: "Fluent", description: "Berber language", position: 2, joke: "Ancient code language" },
    {
      name: "French",
      level: "Advanced",
      description: "Professional proficiency",
      position: 3,
      joke: "Bonjour le monde!",
    },
    { name: "English", level: "Advanced", description: "Technical & Business", position: 4, joke: "Hello World++;" },
    { name: "Spanish", level: "Intermediate", description: "Conversational", position: 5, joke: "¡Hola Mundo!" },
    { name: "Catalan", level: "Basic", description: "Learning", position: 6, joke: "Hola Món! (still learning)" },
  ]

  const interests = [
    {
      icon: FaLanguage,
      name: "Polyglot Journey",
      description: "Mastering 6 languages to debug globally",
      details: "Because bugs speak different languages too! 🐛🌍",
      joke: "I speak more languages than I have working projects",
    },
    {
      icon: FaGamepad,
      name: "Tech Innovation",
      description: "Building the future with caffeine and code",
      details: "Powered by Monster Energy and pure determination ⚡",
      joke: "My code runs on Monster, not coffee",
    },
    {
      icon: FaGoogle,
      name: "Google AI Dream",
      description: "Future Google AI Engineer (hopefully)",
      details: "Currently accepting internship offers... in 3 years 😅",
      joke: "Dear Google: I'm 15 but I debug like I'm 25",
    },
  ]

  const projects = [
    {
      title: "AI-Powered Calculator",
      description: "Smart calculator that uses Wolfram Alpha API because regular math is for regular people.",
      longDescription:
        "Why use a normal calculator when you can over-engineer one with AI? This calculator can solve equations that would make Einstein proud (and probably confused).",
      tech: ["Wolfram API", "JavaScript", "HTML/CSS", "AI Integration", "Caffeine"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Production",
      icon: Calculator,
      github: "#",
      demo: "#",
      joke: "It's smarter than me... which isn't saying much",
    },
    {
      title: "Bionic Hand Prosthetic",
      description: "Arduino R3-based bionic hand that's definitely not plotting world domination.",
      longDescription:
        "Built a bionic hand that responds to gestures. It waves back when you wave at it. Sometimes it waves first. We're still working on that feature.",
      tech: ["Arduino R3", "C++", "Servo Motors", "Sensors", "3D Printing", "Hope"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Beta",
      icon: Hand,
      github: "#",
      demo: "#",
      joke: "It gives better high-fives than I do",
    },
    {
      title: "Autonomous Smart Car",
      description: "Self-driving car that's smarter than most drivers (low bar, I know).",
      longDescription:
        "Built an autonomous car that can navigate obstacles, follow lines, and occasionally question its existence. It's having an identity crisis but at least it doesn't text while driving.",
      tech: ["Arduino R3", "C++", "Stepper Motors", "DC Motors", "Bluetooth", "Existential Dread"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Production",
      icon: Car,
      github: "#",
      demo: "#",
      joke: "Better driver than most humans",
    },
    {
      title: "Digital Measurement Tape",
      description: "Because regular measuring tapes are so analog and boring.",
      longDescription:
        "Digital measuring device that's more accurate than my life plans. Features LCD display and ultrasonic precision. Still can't measure my disappointment though.",
      tech: ["Arduino", "C++", "LCD Display", "Ultrasonic Sensor", "Electronics", "Precision"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Production",
      icon: Ruler,
      github: "#",
      demo: "#",
      joke: "Measures everything except my patience",
    },
    {
      title: "Face Detection System",
      description: "AI that recognizes faces better than I recognize social cues.",
      longDescription:
        "Advanced facial recognition system that can detect faces, emotions, and probably judge your life choices. Built with Python and Arduino integration for maximum over-engineering.",
      tech: ["Python", "OpenCV", "Arduino", "Computer Vision", "Machine Learning", "Judgment"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Development",
      icon: Eye,
      github: "#",
      demo: "#",
      joke: "It sees you when you're coding, it knows when you're debugging",
    },
    {
      title: "Ethical Hacking Toolkit",
      description: "White hat hacking tools for educational purposes (I promise, mom).",
      longDescription:
        "Comprehensive ethical hacking toolkit for penetration testing and security research. Currently in development because I'm still learning how to hack... legally.",
      tech: ["Python", "Kali Linux", "Network Security", "Penetration Testing", "Ethics", "Parental Supervision"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Coming Soon",
      icon: Shield,
      github: "#",
      demo: "#",
      joke: "I hack systems, not people's hearts",
      comingSoon: true,
    },
  ]

  // Monster Energy Easter Egg Counter
  const monsterCount = 6
  const monsterEmojis = "⚡".repeat(monsterCount)

  // Fluid simulation particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 2 + 0.5,
  }))

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-x-hidden">
      {/* Enhanced Cyberpunk Background with Fluid Simulation */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Animated fluid background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(0, 255, 0, 0.3) 0%, transparent 50%),
              conic-gradient(from 0deg at 50% 50%, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1), rgba(0, 255, 0, 0.1), rgba(0, 255, 255, 0.1))
            `,
            animation: "fluid-move 20s ease-in-out infinite alternate",
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400 opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              opacity: [0.2, 0.8, 0.3, 0.2],
            }}
            transition={{
              duration: particle.speed * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated grid with neon outlines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(rgba(255, 0, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px, 50px 50px, 100px 100px, 100px 100px",
              animation: "grid-pulse 4s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>

      {/* Hero Section with Enhanced Neon Effects */}
      <motion.section
        className="min-h-screen flex items-center justify-center px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center max-w-6xl relative">
          {/* Neon outline box */}
          <div
            className="absolute inset-0 rounded-3xl border-2 opacity-50"
            style={{
              borderImage: "linear-gradient(45deg, #00ffff, #ff00ff, #00ff00, #ffff00) 1",
              boxShadow: "0 0 50px rgba(0, 255, 255, 0.3), inset 0 0 50px rgba(255, 0, 255, 0.1)",
              animation: "neon-pulse 3s ease-in-out infinite alternate",
            }}
          />

          <motion.div
            className="mb-8 relative z-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="text-cyan-400 text-xl font-light tracking-wider">
                {"<"} 404aminnotfound {" />"}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)",
                  filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.4))",
                }}
                animate={{
                  textShadow: [
                    "0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)",
                    "0 0 40px rgba(255, 0, 255, 0.5), 0 0 80px rgba(0, 255, 255, 0.3)",
                    "0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                AMINE
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 30px rgba(255, 0, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)",
                  filter: "drop-shadow(0 0 20px rgba(255, 0, 255, 0.4))",
                }}
                animate={{
                  textShadow: [
                    "0 0 30px rgba(255, 0, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)",
                    "0 0 40px rgba(0, 255, 255, 0.5), 0 0 80px rgba(255, 0, 255, 0.3)",
                    "0 0 30px rgba(255, 0, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                ASLIMANI
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl text-cyan-300 mb-4 font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ textShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
          >
            15-Year-Old Tech Enthusiast • Arduino Specialist • Future AI Engineer
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building intelligent systems across 6 languages
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            <Coffee className="text-green-400 h-5 w-5" />
            <span className="text-green-300 text-sm">
              Running on {monsterCount} cans of Monster Energy {monsterEmojis}
            </span>
            <Zap className="text-yellow-400 h-5 w-5 animate-pulse" />
          </motion.div>

          <motion.p
            className="text-md text-purple-300 mb-12 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            🎯 Next Stop: High School → Google AI Engineer
            <br />
            <span className="text-sm text-gray-400">(Currently accepting internship offers... in 3 years 😅)</span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold px-8 py-3 rounded-lg border-2 border-cyan-400 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 relative overflow-hidden group"
              style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold px-8 py-3 rounded-lg border-2 border-red-400 shadow-lg hover:shadow-red-400/50 transition-all duration-300 relative overflow-hidden group"
              style={{ boxShadow: "0 0 20px rgba(255, 0, 100, 0.3)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Play className="mr-2 h-5 w-5" />
              YouTube
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold px-8 py-3 rounded-lg border-2 border-purple-400 shadow-lg hover:shadow-purple-400/50 transition-all duration-300 relative overflow-hidden group"
              style={{ boxShadow: "0 0 20px rgba(128, 0, 255, 0.3)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Language Pyramid Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent relative"
            style={{ textShadow: "0 0 30px rgba(0, 255, 255, 0.3)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-lg opacity-20 -z-10" />
            Language Mastery Pyramid
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Because bugs speak different languages too! 🐛🌍
          </motion.p>

          <div className="flex flex-col items-center space-y-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className="relative group"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                style={{ width: `${100 - index * 12}%`, maxWidth: "600px" }}
              >
                <Card
                  className="bg-gradient-to-r from-gray-900 to-gray-800 border-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    borderColor:
                      index === 0
                        ? "#00ffff"
                        : index === 1
                          ? "#ff00ff"
                          : index === 2
                            ? "#ffff00"
                            : index === 3
                              ? "#00ff00"
                              : index === 4
                                ? "#ff8000"
                                : "#ff0080",
                    boxShadow: `0 0 20px ${index === 0 ? "rgba(0, 255, 255, 0.3)" : index === 1 ? "rgba(255, 0, 255, 0.3)" : index === 2 ? "rgba(255, 255, 0, 0.3)" : index === 3 ? "rgba(0, 255, 0, 0.3)" : index === 4 ? "rgba(255, 128, 0, 0.3)" : "rgba(255, 0, 128, 0.3)"}`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-white mb-1">{lang.name}</h3>
                        <p className="text-gray-300">{lang.description}</p>
                        <p className="text-xs text-gray-500 mt-1 italic">{lang.joke}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className="text-lg font-bold px-4 py-2 rounded-full border-2"
                          style={{
                            color:
                              index === 0
                                ? "#00ffff"
                                : index === 1
                                  ? "#ff00ff"
                                  : index === 2
                                    ? "#ffff00"
                                    : index === 3
                                      ? "#00ff00"
                                      : index === 4
                                        ? "#ff8000"
                                        : "#ff0080",
                            borderColor:
                              index === 0
                                ? "#00ffff"
                                : index === 1
                                  ? "#ff00ff"
                                  : index === 2
                                    ? "#ffff00"
                                    : index === 3
                                      ? "#00ff00"
                                      : index === 4
                                        ? "#ff8000"
                                        : "#ff0080",
                            textShadow: `0 0 10px ${index === 0 ? "rgba(0, 255, 255, 0.5)" : index === 1 ? "rgba(255, 0, 255, 0.5)" : index === 2 ? "rgba(255, 255, 0, 0.5)" : index === 3 ? "rgba(0, 255, 0, 0.5)" : index === 4 ? "rgba(255, 128, 0, 0.5)" : "rgba(255, 0, 128, 0.5)"}`,
                          }}
                        >
                          {lang.level}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent relative"
            style={{ textShadow: "0 0 30px rgba(128, 0, 255, 0.3)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-500 blur-lg opacity-20 -z-10" />
            Technical Arsenal
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Powered by caffeine and questionable life choices ☕💻
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="cursor-pointer group"
              >
                <Card
                  className="bg-gray-900 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 h-full relative overflow-hidden"
                  style={{
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-6 text-center relative z-10">
                    <skill.icon
                      className="w-12 h-12 mx-auto mb-3"
                      style={{
                        color: skill.color,
                        filter: `drop-shadow(0 0 10px ${skill.color}40)`,
                      }}
                    />
                    <p className="text-sm text-gray-300 mb-2">{skill.name}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-xs text-cyan-300 font-bold mb-1">{skill.level}%</p>
                    <p className="text-xs text-gray-500 italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.joke}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Gallery Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent relative"
            style={{ textShadow: "0 0 30px rgba(255, 0, 128, 0.3)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-500 blur-lg opacity-20 -z-10" />
            Innovation Gallery
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Where over-engineering meets teenage ambition 🚀
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card
                  className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 transition-all duration-300 h-full overflow-hidden relative ${
                    project.comingSoon
                      ? "border-yellow-400 hover:border-yellow-300"
                      : "border-gray-700 hover:border-cyan-400"
                  }`}
                  style={{
                    boxShadow: project.comingSoon
                      ? "0 10px 30px rgba(255, 255, 0, 0.2)"
                      : "0 10px 30px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      project.comingSoon
                        ? "bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100"
                        : "bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                      <project.icon
                        className={`w-20 h-20 group-hover:scale-110 transition-transform duration-300 ${
                          project.comingSoon ? "text-yellow-400" : "text-cyan-400"
                        }`}
                        style={{
                          filter: project.comingSoon
                            ? "drop-shadow(0 0 20px rgba(255, 255, 0, 0.5))"
                            : "drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))",
                        }}
                      />
                      {project.comingSoon && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-yellow-400 font-bold text-lg animate-pulse">COMING SOON</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${
                          project.status === "Production"
                            ? "bg-green-500/20 text-green-400 border-green-400"
                            : project.status === "Beta"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-400"
                              : project.status === "Development"
                                ? "bg-blue-500/20 text-blue-400 border-blue-400"
                                : project.status === "Coming Soon"
                                  ? "bg-orange-500/20 text-orange-400 border-orange-400 animate-pulse"
                                  : "bg-purple-500/20 text-purple-400 border-purple-400"
                        }`}
                        style={{
                          boxShadow: `0 0 10px ${
                            project.status === "Production"
                              ? "rgba(0, 255, 0, 0.3)"
                              : project.status === "Beta"
                                ? "rgba(255, 255, 0, 0.3)"
                                : project.status === "Development"
                                  ? "rgba(0, 100, 255, 0.3)"
                                  : project.status === "Coming Soon"
                                    ? "rgba(255, 165, 0, 0.3)"
                                    : "rgba(128, 0, 255, 0.3)"
                          }`,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 relative z-10">
                    <h3
                      className={`text-xl font-bold mb-3 ${project.comingSoon ? "text-yellow-300" : "text-cyan-300"}`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                    <p className="text-gray-400 mb-2 text-xs">{project.longDescription}</p>
                    <p className="text-gray-500 mb-4 text-xs italic">"{project.joke}"</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 bg-gray-800 text-xs rounded border text-cyan-300 ${
                            project.comingSoon ? "border-yellow-400/30" : "border-cyan-400/30"
                          }`}
                          style={{
                            boxShadow: project.comingSoon
                              ? "0 0 5px rgba(255, 255, 0, 0.2)"
                              : "0 0 5px rgba(0, 255, 255, 0.2)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className={`flex-1 border ${
                          project.comingSoon
                            ? "bg-yellow-600 hover:bg-yellow-700 text-black border-yellow-400"
                            : "bg-purple-600 hover:bg-purple-700 text-white border-purple-400"
                        }`}
                        disabled={project.comingSoon}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        {project.comingSoon ? "Soon" : "Code"}
                      </Button>
                      <Button
                        size="sm"
                        className={`flex-1 border ${
                          project.comingSoon
                            ? "bg-orange-600 hover:bg-orange-700 text-white border-orange-400"
                            : "bg-cyan-600 hover:bg-cyan-700 text-white border-cyan-400"
                        }`}
                        disabled={project.comingSoon}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        {project.comingSoon ? "Soon" : "Demo"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interests Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent relative"
            style={{ textShadow: "0 0 30px rgba(0, 255, 0, 0.3)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 blur-lg opacity-20 -z-10" />
            Beyond Code
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            When I'm not debugging my life choices 🤖
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                className="group"
              >
                <Card
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-green-400 transition-all duration-300 h-full relative overflow-hidden"
                  style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-6 text-center relative z-10">
                    <interest.icon
                      className="w-16 h-16 mx-auto mb-4 text-green-400"
                      style={{ filter: "drop-shadow(0 0 10px rgba(0, 255, 0, 0.5))" }}
                    />
                    <h3 className="text-xl font-bold mb-3 text-green-300">{interest.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{interest.description}</p>
                    <p className="text-gray-400 text-xs mb-2">{interest.details}</p>
                    <p className="text-gray-500 text-xs italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {interest.joke}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-cyan-400/30 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Build Tomorrow's Technology?
            </h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              At just 15, I'm already building the future with Arduino, AI, and an unhealthy amount of Monster Energy.
              Let's collaborate and create something extraordinary together!
            </p>
            <p className="text-gray-400 mb-8 text-sm italic">
              Warning: May contain traces of caffeine, ambition, and questionable coding practices 😅
            </p>
            <div className="flex gap-6 justify-center mb-8">
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold px-6 py-3 rounded-lg border-2 border-cyan-400 relative overflow-hidden group"
                style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Mail className="h-5 w-5 mr-2" />
                Contact
              </Button>
              <Button
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-lg border-2 border-red-400 relative overflow-hidden group"
                style={{ boxShadow: "0 0 20px rgba(255, 0, 100, 0.3)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Play className="h-5 w-5 mr-2" />
                Subscribe
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold px-6 py-3 rounded-lg border-2 border-purple-400 relative overflow-hidden group"
                style={{ boxShadow: "0 0 20px rgba(128, 0, 255, 0.3)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Github className="h-5 w-5 mr-2" />
                Follow
              </Button>
            </div>
            <div className="text-gray-500 text-sm">
              <p>© 2024 Amine Aslimani (404aminnotfound). Building the future, one energy drink at a time.</p>
              <p className="mt-2">Next destination: Google AI Team 🚀</p>
              <p className="mt-1 text-xs italic">Disclaimer: No Arduinos were harmed in the making of this portfolio</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
