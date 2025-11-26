// ----- Global Styles -----
document.body.style.margin = "0";
document.body.style.fontFamily = "sans-serif";
document.body.style.paddingTop = "70px"; // top padding for fixed menu
document.body.style.paddingBottom = "150px"; // bottom padding for floating image

// ----- Top Navigation Menu -----
const menuItems = [
  "Home",
  "About",
  "Experience",
  "Activities",
  "Courses",
  "Projects",
  "Resume"
];

const nav = document.createElement("nav");
nav.style.position = "fixed";
nav.style.top = "0";
nav.style.left = "0";
nav.style.width = "100%";
nav.style.background = "#fff";
nav.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
nav.style.padding = "10px 0";
nav.style.zIndex = "1000";

// Flex container for hamburger + list
const navContainer = document.createElement("div");
navContainer.style.display = "flex";
navContainer.style.justifyContent = "space-between";
navContainer.style.alignItems = "center";
navContainer.style.maxWidth = "900px";
navContainer.style.margin = "0 auto";
navContainer.style.padding = "0 15px";

// Hamburger button
const hamburger = document.createElement("div");
hamburger.textContent = "☰";
hamburger.style.fontSize = "1.5rem";
hamburger.style.cursor = "pointer";
hamburger.style.display = "none"; // hidden on desktop

// Nav list
const ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.justifyContent = "center";
ul.style.gap = "20px";
ul.style.margin = "0";
ul.style.padding = "0";

// Populate menu items
menuItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.style.cursor = "pointer";
  li.style.padding = "5px 10px";
  li.style.transition = "background 0.2s, color 0.2s";
  li.onmouseover = () => {
    li.style.background = "#f0f0f0";
    li.style.borderRadius = "6px";
  };
  li.onmouseout = () => {
    li.style.background = "transparent";
  };

  // Smooth scroll
  li.onclick = () => {
    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.getElementById(item.replace(/\s+/g, "-").toLowerCase());
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }

    // Close menu on mobile after click
    if (window.innerWidth <= 600) {
      ul.style.display = "none";
    }
  };

  ul.appendChild(li);
});

// Toggle menu on small screens
hamburger.onclick = () => {
  if (ul.style.display === "none" || ul.style.display === "") {
    ul.style.display = "flex";
    ul.style.flexDirection = "column";
    ul.style.gap = "10px";
    ul.style.marginTop = "10px";
  } else {
    ul.style.display = "none";
  }
};

// Responsive behavior
function handleResize() {
  if (window.innerWidth <= 600) {
    hamburger.style.display = "block";
    ul.style.display = "none"; // collapsed by default
    ul.style.flexDirection = "column";
    ul.style.width = "100%";
  } else {
    hamburger.style.display = "none";
    ul.style.display = "flex";
    ul.style.flexDirection = "row";
  }
}

window.addEventListener("resize", handleResize);
handleResize();

// Put it all together
navContainer.appendChild(hamburger);
navContainer.appendChild(ul);
nav.appendChild(navContainer);
document.body.appendChild(nav);


// ----- Home Section -----
const homeTitle = document.createElement("h1");
homeTitle.textContent = "Alexander Speigle";
homeTitle.style.textAlign = "center";
homeTitle.style.fontSize = "3rem";
homeTitle.style.margin = "40px 0";
document.body.insertBefore(homeTitle, document.body.firstChild);

// Cards container
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "20px";
container.style.maxWidth = "400px";
container.style.margin = "0 auto";
document.body.insertBefore(container, homeTitle.nextSibling);

const cards = [
  { label: "Email", value: "speigad@umich.edu", type: "copy", icon: "📋" },
  { label: "Phone", value: "248-482-9381", type: "copy", icon: "📋" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/alexander-speigle-aa5724265/", type: "link", icon: "🔗" },
  { label: "GitHub", link: "https://github.com/adsfibonacci", type: "link", icon: "🔗" },
];

function copyText(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    alert(`${text} copied!`);
  } catch {
    alert("Failed to copy");
  }
  document.body.removeChild(textarea);
}

cards.forEach(({ label, value, link, type, icon }) => {
  const card = document.createElement("div");
  card.textContent = type === "link" ? `${icon} ${label}` : `${icon} ${label}: ${value}`;
  card.style.background = "white";
  card.style.padding = "20px";
  card.style.borderRadius = "12px";
  card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  card.style.cursor = "pointer";
  card.onmouseover = () => (card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)");
  card.onmouseout = () => (card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)");

  card.onclick = () => {
    if (type === "copy" && value) copyText(value);
    else if (type === "link" && link) window.open(link, "_blank");
  };

  container.appendChild(card);
});


// ----- Function to Create Dynamic Sections -----
function createSection(id: string, titleText: string) {
  const section = document.createElement("section");
  section.id = id;

  // Use padding instead of fixed height
  section.style.padding = "20px 20px"; 
  section.style.borderBottom = "2px solid #e0e0e0";

  const title = document.createElement("h2");
  title.textContent = titleText;
  title.style.fontSize = "2.5rem";
  title.style.marginBottom = "20px";

  section.appendChild(title);
  document.body.appendChild(section);
  return section;
}

// Create all sections (excluding Home)
const sections = menuItems.slice(1).map((item) =>
  createSection(item.replace(/\s+/g, "-").toLowerCase(), item)
);

// ----- About Section Example -----
const aboutSection = document.getElementById("about");
if (aboutSection) {
  const paragraphs = [
    "I am pursuing a Masters in Biomedical Engineering at the University of Michigan. My undergraduate degrees were in Mathematical Biology and Biomedical engineering, also from the University of Michigan. I  completed a minor in biochemistry and computer science. I am focusing in systems biology and computational biology. Academic interests include combinatorial optimization, machine learning, and chaos/control theory.",
    "I am working in Dr. Paul Jensen's lab on the minimal genome project, which relies heavily on combinatorial optimization and reinforcement learning. The lab website is ",
    "Programming languages I am familiar with are Python, C++, Matlab, R, Bash, Mathematica, and simulation tools I am familiar with are SolidWorks, FreeCAD, COPASI, and COMSOL."
  ];

  paragraphs.forEach((text, index) => {
    const p = document.createElement("p");
    p.style.marginBottom = "20px";

    if (index === 1) {
      // Split text around the link
      p.textContent = text;
      const link = document.createElement("a");
      link.href = "http://jensenlab.net/";
      link.textContent = "here";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      p.appendChild(link);
      p.appendChild(document.createTextNode(".")); // add period at the end
    } else {
      p.textContent = text;
    }

    aboutSection.appendChild(p);
  });
}


// ----- Floating Profile Image -----
const floatingImage = document.createElement("img");
floatingImage.src = "public/suit-picture-crop.png";
floatingImage.alt = "Profile Image";
floatingImage.style.position = "fixed";
floatingImage.style.bottom = "20px";
floatingImage.style.right = "20px";
floatingImage.style.width = "100px";
floatingImage.style.height = "100px";
floatingImage.style.borderRadius = "50%";
floatingImage.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
floatingImage.style.cursor = "pointer";
floatingImage.onclick = () => alert("This is Alexander Speigle!");
document.body.appendChild(floatingImage);

// ----- Resume Section -----
const resumeSection = document.getElementById("resume");
if (resumeSection) {
  // Download link replaced with "Open in new tab"
  const openLink = document.createElement("a");
  openLink.href = "public/alexander-speigle-full-resume.pdf"; // path relative to public folder
  openLink.textContent = "View Resume PDF";
  openLink.target = "_blank";               // open in a new tab
  openLink.rel = "noopener noreferrer";
  openLink.style.display = "block";
  openLink.style.marginTop = "20px";
  openLink.style.textDecoration = "none";
  openLink.style.color = "#007bff";
  openLink.onmouseover = () => (openLink.style.textDecoration = "underline");
  openLink.onmouseout = () => (openLink.style.textDecoration = "none");

  resumeSection.appendChild(openLink);

  // PDF preview (embedded using <iframe>)
  const pdfFrame = document.createElement("iframe");
  pdfFrame.src = "public/alexander-speigle-full-resume.pdf"; // Make sure your PDF is in the public folder
  pdfFrame.width = "100%";
  pdfFrame.height = "300px";
  pdfFrame.style.border = "1px solid #ccc";
  pdfFrame.style.borderRadius = "8px";
  resumeSection.appendChild(pdfFrame);
}


// ----- Activities Section -----
const activitiesSection = document.getElementById("activities");
if (activitiesSection) {
  const clubs = [
  { title: "Math Corp and Math Circle", description: "The Math Corp at U(M) is a summer camp that strives to teach kids of varying levels and backgrounds about math and how to enjoy it. It is a kids-teaching-kids model which teaches more experienced kids how to teach math to their peers. The same group of people leads the U(M) Math Circle, where guest lecturers create and lead sessions about math topics that are not typically taught in public curriculum, with college students aiding with activities related to the topic. A session I have led was about Benford's Law and I will lead several more in the future." },
    { title: "Walking Club", description: "The morning math walkers meet at 6AM weekdays and explore Ann Arbor. I used to run the evening walks, but the position has been transfered to a current member of the Society of Undergraduate Math Students (SUMS)."},
    { title: "Math Club", description: "Guest lecturers from several graduate programs are given an opportunity to present a math topic of interest at an undergraduate level and increase interest in their research. I will give a talk in early January on the Price of Anarchy." },
    { title: "SEE Camp", description: "The Summer Engineering Exploration Camp is hosted through the Society of Women Engineers to expose high schoolers to different disciplines and career paths." },
  ];

  clubs.forEach(({ title, description }) => {
    const subHeader = document.createElement("h3");
    subHeader.textContent = title;
    subHeader.style.fontSize = "1.5rem";
    subHeader.style.marginTop = "40px";
    subHeader.style.marginBottom = "10px";
    activitiesSection.appendChild(subHeader);

    const p = document.createElement("p");
    p.textContent = description;
    p.style.marginBottom = "20px";
    activitiesSection.appendChild(p);
  });
}

// ----- Experience Section -----
const workSection = document.getElementById("experience");
if (workSection) {
  const experiences = [
    { title: "Jensen Lab - Graduate Researcher", description: `I enjoyed the course in automated science I took with Dr. Jensen and followed up with more design of experiments coursework. I joined the lab for research this past semester to work on the minimal genome project. This is developing a mathematical model to remove as many genes as possible from <em>Streptococcus Mutans</em> while maintaining viability of the cell line. Techniques I use are regression analysis, feature selection, and Monte-Carlo tree search. I am currently working on implementing transformer models, convolutional neural networks, and long-short term memory neural networks as competing models for predicting growth given a genome.` },  
    { title: "Metacoder Bioinformatics Intern", description: "My role at Metacoder preprocessed and analyzed metabolic data for inputs into deep learning algorithms. I used natural language processing algorithms to build disease networks then graph theory to analyze data. My work here is with very large and relatively low dimensional datasets." },
    { title: "Linear Algebra Course Grader", description: "This is a temporary position through the Biomedical Engineering department during the academic semester. My job was to review homeworks submitted by undergraduates taking an introduction to linear algebra and statistics course. " },
    { title: "Student Information Technology Consultant", description: "The SITC role is a temporary position through the Mathematics department during academic semesters. This was an IT consultant job that resolved issues that occured in the computer labs for computational math courses." },
    { title: "Chandrasekaran Lab - Undergraduate Researcher", description: "The lab work here introduced me to the role of optimization research in machine learning algorithms. I also extended my experience with probabilistic machine learning from surface level courses, as well as employed them in a metabolics role. I also compared predictions to baseline methods such as flux balance analysis and other tools in the Cobra toolbox."},
  ];

  experiences.forEach(({ title, description }) => {
    const subHeader = document.createElement("h3");
    subHeader.textContent = title;
    subHeader.style.fontSize = "1.5rem";
    subHeader.style.marginTop = "40px";
    subHeader.style.marginBottom = "10px";
    workSection.appendChild(subHeader);

    const p = document.createElement("p");
    p.innerHTML = description;
    p.style.marginBottom = "20px";
    workSection.appendChild(p);
  });
}

// ----- Courses Section -----
const coursesSection = document.getElementById("courses");
if (coursesSection) {
  const courseCategories = [
    { 
      title: "Mathematics", 
      items: ["Honors Mathematics - 1D Calculus, Exterior Calculus, and Linear Algebra", "Probability and Statistics", "Linear and Nonlinear Regression", "Combinatorics and Graph Theory", "Ordinary Differential Equations - Bifurcations, chaos, and control theory", "Topology - Pointset and Algebraic", "Linear and Nonlinear Programming", "Real and Complex Analysis" ] 
    },
    { 
      title: "Engineering", 
      items: ["Quantitative Cell Biology", "Quantitative Physiology", "Bioreactor Design", "Immunoengineering", "Biomaterials", "Bioinstrumentation" ] 
    },
    { 
      title: "Computer Science", 
      items: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Algorithm Design", "Automated Science", "Computational Biology" ] 
    },
    { 
      title: "Chemistry", 
      items: ["Organic Chemistry", "Protein Chemistry", "Physical Chemistry", "Bioinorganic Chemistry", "Genetics" ] 
    },
  ];

  courseCategories.forEach(({ title, items }) => {
    const subHeader = document.createElement("h3");
    subHeader.textContent = title;
    subHeader.style.fontSize = "1.5rem";
    subHeader.style.marginTop = "40px";
    subHeader.style.marginBottom = "10px";
    coursesSection.appendChild(subHeader);

    const ul = document.createElement("ul");
    ul.style.marginBottom = "20px";
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    coursesSection.appendChild(ul);
  });
}

// ----- Projects Section -----
const projectsSection = document.getElementById("projects");
if (projectsSection) {
  // --- Part 1: DRP ---
  const drpHeader = document.createElement("h2");
  drpHeader.textContent = "DRP";
  drpHeader.style.marginTop = "40px";
  drpHeader.style.marginBottom = "10px";
  projectsSection.appendChild(drpHeader);

  const drpDesc = document.createElement("p");
  drpDesc.textContent = "The Directed Reading Project is an opportunity for an undergraduate student to pair with a graduate math student and learn material from a text book that is not covered in standard course work. At the end of the semester, the undergraduate student prepares and presents some material they learned to an audience. The abstracts and auxilary materials are below.";
  drpDesc.style.marginBottom = "20px";
  projectsSection.appendChild(drpDesc);

  const drpProjects = [
    { 
      title: "The Euclidean Algorithm", 
      description: "The Euclidean Algorithm is a quick way to find the greatest common divisor (GCD) between any two integers. We will define rings, ring norms, and Euclidean domains where the algorithm is guaranteed to converge, then find the GCD of elements in the Gaussian integers and polynomial rings. In particular, we will focus on the worst case time complexity in the different scenarios.",
      slidesPath: "public/euclidean-algorithm.pdf",
      desmosLink: "https://www.desmos.com/calculator/03bvipexfg"
    },
    { 
      title: "Solutions to the Heat Equation", 
      description: "The heat equation is a partial differential equation modeling diffusion of heat and particulate matter through space and time. This talk will provide the necessary interpretations of PDEs as well as methods for solving simple second order equations. The scope will focus on the equation over symmetric domains and characterize the radial solutions. Using the fundamental solutions to the heat equation, variations to the equations will be made to adjust for different models and phenomena."
    }
  ];

  drpProjects.forEach(({ title, description, slidesPath, desmosLink }) => {
    const pTitle = document.createElement("strong");
    pTitle.textContent = title;
    pTitle.style.display = "block";
    pTitle.style.fontSize = "1.2rem";
    pTitle.style.marginTop = "20px";
    projectsSection.appendChild(pTitle);

    const pDesc = document.createElement("p");
    pDesc.textContent = description;
    pDesc.style.marginBottom = "10px";
    projectsSection.appendChild(pDesc);

    if (slidesPath) {
      const slidesAnchor = document.createElement("a");
      slidesAnchor.href = slidesPath;       // link to PDF in public folder
      slidesAnchor.textContent = "View Slides";
      slidesAnchor.target = "_blank";
      slidesAnchor.rel = "noopener noreferrer";
      slidesAnchor.style.display = "block";
      slidesAnchor.style.marginBottom = "5px";
      projectsSection.appendChild(slidesAnchor);
    }

    if (desmosLink) {
      const desmosAnchor = document.createElement("a");
      desmosAnchor.href = desmosLink;
      desmosAnchor.textContent = "View Desmos";
      desmosAnchor.target = "_blank";
      desmosAnchor.rel = "noopener noreferrer";
      desmosAnchor.style.display = "block";
      desmosAnchor.style.marginBottom = "15px";
      projectsSection.appendChild(desmosAnchor);
    }
  });

// --- Part 2: Personal Projects ---
const personalHeader = document.createElement("h2");
personalHeader.textContent = "Personal Projects";
personalHeader.style.marginTop = "50px";
personalHeader.style.marginBottom = "20px";
projectsSection.appendChild(personalHeader);

const personalProjects = [
  { 
    title: "High Dimensional Stats", 
    description: `After taking coursework in experimental design due to the applications in dataset design, I began studying high dimensional and projective statistics to complement my coursework. My main materials of reference are <em>Buhlman and Van de Geer's High Dimensional Statistics</em> and <em>Mukerjee and Wu's Modern Theory of Factorial Design</em>.`
  },
  { 
    title: "Linux", 
    description: "A hobby of mine is testing out new Linux distributions and configurations. I enjoy learning how operating systems interface with hardware. I currently use Arch Linux, but have used Ubuntu, Fedora, RedHat, and Gentoo in the past. I am working on a Linux From Scratch project when I have time." 
  },
  { 
    title: "Server", 
    description: "I use UnRaid to manage docker containers and virtual desktops. The purpose was initially to learn networking protocols, but became useful for syncing and backing up files between devices." 
  }
];

const ul = document.createElement("ul");
ul.style.marginBottom = "30px";

personalProjects.forEach(({ title, description }) => {
  const li = document.createElement("li");
  li.style.marginBottom = "15px";

  const liTitle = document.createElement("strong");
  liTitle.textContent = title;
  liTitle.style.display = "block";
  liTitle.style.marginBottom = "5px";
  li.appendChild(liTitle);

  const liDesc = document.createElement("span");
  liDesc.innerHTML = description; // allow <em> italics
  li.appendChild(liDesc);

  ul.appendChild(li);
});

projectsSection.appendChild(ul);
}