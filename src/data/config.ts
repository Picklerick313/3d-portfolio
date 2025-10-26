const config = {
  title: "Lyu Xingze (Rick) | Robotics Engineer & Developer",
  description: {
    long: "Explore the portfolio of Lyu Xingze (Rick), an MSc Robotics student at the University of Manchester and first-class graduate from Xi'an Jiaotong-Liverpool University. Specializing in ROS2, SLAM, robotic arm manipulation, and innovative robotics projects.",
    short:
      "Portfolio of Lyu Xingze (Rick), MSc Robotics student and developer specializing in ROS2, SLAM, and robotic systems.",
  },
  keywords: [
    "Lyu Xingze",
    "Rick",
    "portfolio",
    "robotics engineer",
    "MSc Robotics",
    "University of Manchester",
    "Xi'an Jiaotong-Liverpool University",
    "ROS2",
    "SLAM",
    "robotic arm manipulation",
    "Python",
    "C++",
    "AI tools",
    "robotics developer",
    "autonomous systems",
  ],
  author: "Lyu Xingze (Rick)",
  email: "picklerick313@outlook.com",
  site: "https://picklerick313.github.io/3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/Picklerick313",
    linkedin: "https://www.linkedin.com/in/rick-pickle-64a609356/",
    // CV: "https://drive.google.com/file/d/1GD49J8TvZKo90e2-0QpPCWU77AhUSTJ5/view?usp=sharing"
  },
};
export { config };