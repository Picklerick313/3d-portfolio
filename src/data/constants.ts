// Robotics and Engineering Skills Configuration
export enum SkillNames {
  PYTHON = "python",
  CPP = "cpp",
  ROS2 = "ros2",
  SLAM = "slam",
  ROBOTIC_ARM = "robotic_arm",
  AI_TOOLS = "ai_tools",
  LINUX = "linux",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  OPENCV = "opencv",
  PYTORCH = "pytorch",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Primary programming language for robotics and AI development",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CPP]: {
    id: 2,
    name: "cpp",
    label: "C++",
    shortDescription: "High-performance robotics and embedded systems programming",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.ROS2]: {
    id: 3,
    name: "ros2",
    label: "ROS2",
    shortDescription: "Robot Operating System for distributed robotics applications",
    color: "#22314e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg",
  },
  [SkillNames.SLAM]: {
    id: 4,
    name: "slam",
    label: "SLAM",
    shortDescription: "Simultaneous Localization and Mapping for autonomous navigation",
    color: "#ff6b6b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.ROBOTIC_ARM]: {
    id: 5,
    name: "robotic_arm",
    label: "Robotic Arm Manipulation",
    shortDescription: "Motion planning and control for robotic manipulators",
    color: "#4ecdc4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  [SkillNames.AI_TOOLS]: {
    id: 6,
    name: "ai_tools",
    label: "AI Tools",
    shortDescription: "Proficient in using mainstream AI tools and frameworks",
    color: "#ff6f61",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 7,
    name: "linux",
    label: "Linux",
    shortDescription: "Linux system administration and development environment",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.GIT]: {
    id: 8,
    name: "git",
    label: "Git",
    shortDescription: "Version control for collaborative development",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 9,
    name: "github",
    label: "GitHub",
    shortDescription: "Project management and code collaboration",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 10,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization for robotics deployments",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.OPENCV]: {
    id: 11,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "Computer vision for robotics perception",
    color: "#5c3ee8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 12,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Deep learning framework for robotics AI",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};