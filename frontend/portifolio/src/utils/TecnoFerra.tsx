import { JSX } from "react";
import {
  FaChartBar,
  FaCode,
  FaDatabase,
  FaFingerprint,
  FaJava,
  FaKey,
  FaLayerGroup,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiAngular,
  SiCplusplus,
  SiCypress,
  SiDjango,
  SiDocker,
  SiDart,
  SiEslint,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGo,
  SiGooglecloud,
  SiIonic,
  SiJavascript,
  SiJest,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiPython,
  SiReact,
  SiRedis,
  SiRuby,
  SiRust,
  SiSpring,
  SiSqlite,
  SiSvelte,
  SiSwift,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiMui,
} from "react-icons/si";

interface TecnoFerraProps {
  icone: string;
  className?: string;
}

const normalizeTechName = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

function TecnoFerra({ icone, className = "w-6 h-6" }: TecnoFerraProps): JSX.Element {
  const iconMap: Record<string, JSX.Element> = {
    react: <SiReact className={className} />,
    nextjs: <FaCode className={className} />,
    vue: <SiVuedotjs className={className} />,
    angular: <SiAngular className={className} />,
    svelte: <SiSvelte className={className} />,
    spring: <SiSpring className={className} />,
    nodejs: <SiNodedotjs className={className} />,
    express: <SiExpress className={className} />,
    nestjs: <SiNestjs className={className} />,
    django: <SiDjango className={className} />,
    flask: <SiFlask className={className} />,
    flutter: <SiFlutter className={className} />,
    ionic: <SiIonic className={className} />,
    swift: <SiSwift className={className} />,
    mongodb: <SiMongodb className={className} />,
    postgresql: <SiPostgresql className={className} />,
    mysql: <SiMysql className={className} />,
    redis: <SiRedis className={className} />,
    sqlite: <SiSqlite className={className} />,
    docker: <SiDocker className={className} />,
    kubernetes: <SiKubernetes className={className} />,
    aws: <FaCode className={className} />,
    gcp: <SiGooglecloud className={className} />,
    firebase: <SiFirebase className={className} />,
    vercel: <SiVercel className={className} />,
    netlify: <SiNetlify className={className} />,
    git: <SiGit className={className} />,
    github: <SiGithub className={className} />,
    gitlab: <SiGitlab className={className} />,
    figma: <SiFigma className={className} />,
    postman: <SiPostman className={className} />,
    jest: <SiJest className={className} />,
    cypress: <SiCypress className={className} />,
    eslint: <SiEslint className={className} />,
    prettier: <SiPrettier className={className} />,
    javascript: <SiJavascript className={className} />,
    typescript: <SiTypescript className={className} />,
    python: <SiPython className={className} />,
    java: <FaJava className={className} />,
    go: <SiGo className={className} />,
    rust: <SiRust className={className} />,
    "c++": <SiCplusplus className={className} />,
    php: <SiPhp className={className} />,
    ruby: <SiRuby className={className} />,
    kotlin: <SiKotlin className={className} />,
    vite: <SiVite className={className} />,
    supabase: <SiSupabase className={className} />,
    tailwind: <SiTailwindcss className={className} />,
    mui: <SiMui className={className} />,
    dart: <SiDart className={className} />,
    hive: <FaDatabase className={className} />,
    dexie: <FaDatabase className={className} />,
    zustand: <FaLayerGroup className={className} />,
    recharts: <FaChartBar className={className} />,
    biometria: <FaFingerprint className={className} />,
    "local auth": <FaLock className={className} />,
    "secure storage": <FaShieldAlt className={className} />,
    "aes 256": <FaKey className={className} />,
  };

  const aliases: Record<string, string> = {
    "spring boot": "spring",
    postgres: "postgresql",
    "tailwind css": "tailwind",
    materialui: "mui",
    "material ui": "mui",
    "mui ui": "mui",
    "aes-256": "aes 256",
    aes256: "aes 256",
    "localauth": "local auth",
    "securestorage": "secure storage",
    "face id": "biometria",
    fingerprint: "biometria",
  };

  const normalizedIcon = normalizeTechName(icone);
  const resolvedIcon = aliases[normalizedIcon] ?? normalizedIcon;

  return (
    <div
      title={icone}
      aria-label={icone}
      className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition-all duration-500 hover:scale-110 hover:rotate-[6deg] hover:shadow-[0_0_25px_var(--color-primary)]"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-transparent opacity-0 blur-md transition-all duration-700 group-hover:opacity-100"></div>

      <div className="relative text-gray-700 transition-transform duration-700 group-hover:rotate-[360deg] group-hover:text-primary">
        {iconMap[resolvedIcon] || <FaCode className={className} />}
      </div>

      <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 animate-pulse-slow group-hover:opacity-40"></div>
    </div>
  );
}

export default TecnoFerra;
