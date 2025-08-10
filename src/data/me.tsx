export const me = {
    "name": "Jason Luckow",
    "title": "Software Engineer II",
    "about": "I am a software engineer with a passion for building scalable and efficient applications. I have experience in various programming languages and frameworks, and I enjoy solving complex problems.",
    "contact": {
        "email": "json.luck@outlook.com",
        "linkedin": "https://www.linkedin.com/in/jasonluckow",
        "github": "https://github.com/JasonLuckow"
    },
   skills: {
        "backendSkills": [
            "Python", "Java", "C++", "Node.js", "Kafka", "MQTT", "RESTful APIs", "Spring Boot", "Lombok",
            "Unit Testing", "Integration Testing", "System Testing", "gmock", "gtest", "CMake", "JUnit",
            "Mockito", "Maven", "vcpkg", "curl"
        ],
        "frontendSkills": [
            "React", "React Router", "Axios", "Vite", "Material UI", "JavaScript", "HTML", "CSS",
            "Tailwind CSS", "TypeScript"
        ],
        "toolsPlatforms": [
            "Jenkins", "Docker", "Kubernetes", "BitBucket", "Github", "Jira", "Postman",
            "Eclipse", "Visual Studio", "VSCode", "Github Copilot", "Git", "Spotfire",
            "Linux (RHEL 7)", "Windows 10", "Windows 7"
        ],
        "dataSkills": [
            "Spotfire", "SQL", "Prometheus", "Grafana"
        ],
    },
    "education": [
        {
            "degree": "The Odin Project",
            "institution": "theodinproject.com",
            "year": 2024,
            "relevantCourses": [
                "HTML, CSS, JavaScript", "React", "Node.js", "SQL", "webpack", "vite"
            ],
            "funFacts": [
                "Created a full-stack web application without using any frameworks.",
                "Gained a deep understanding of React (router, hooks, context API, state management, refs, etc.)",
                "Created 28 projects, including a full-stack e-commerce application, a weather application, and a portfolio website."
            ]
        },
        {
            "degree": "Bachelor of Science in Computer Engineering",
            "institution": "Texas Tech University",
            "year": 2022,
            "gpa": 3.796,
            "honors": "Magna Cum Laude",
            "relevantCourses": [
                "Data Structures and Algorithms", "Computer Architecture", 
                "Software Engineering", "Web Development"
            ],
            "funFacts": [
                "ECE Freshman of the Year 2019",
            ]
        },
        {
            "degree": "High School Diploma",
            "institution": "Eula High School",
            "year": 2018,
            "gpa": 3.8,
            "honors": "",
            "relevantCourses": [
                "Dual Credit Calculus I - Plotted Graphs using R"
            ],
            "funFacts": [
                "Graduating class was less than 20 students!",
                "I was the class president, beta club president, student council president, and robotics captain!"
            ]
        }
    ],
    "experience": [
        {
            "title": "Software Engineer II",
            "company": "Texas Instruments",
            "duration": "2022 - Present",
            "responsibilities": [
                {
                    "Desktop Applications:" : [
                        "Developed and maintained desktop appplications using Electron, React, TypeScript, Vite, MUI, Java, and Spring Boot.",
                        "Deployed on Windows and Linux platforms.",
                        "Increased end user productivity by 30% by providing users a way to automate data collection and simulate hardware interactions.",
                    ]
                },
                {
                    "Backend Modernization:" : [
                        "Migrated legacy test automation tooling to a modern, scalable Spring Boot application, significantly enhancing throughput and system performance.",
                        "Reduced application load time by 65% through Spring bean tuning and caching.",
                        "Integrated data validation workflows to reduce setup errors and improve UX for factory operators.",
                        "Created Spotfire dashboards and monitoring pipelines to visualize performance and deployment metrics. Used Python to clean the data before pipelining into dashboard.",
                    ]
                },
                {
                    "Cross-Platform Data Library:" : [
                        "Developed and maintained internal C++ libraries for test automation, quality assurance, and data flow from factory to database and vice versa.",
                        "Architected a reusable C++ library that interfaces with Java and C++ clients via IPC (Windows Pipes, POSIX MQ).",
                        "Consumed external REST APIs and exposed flexible API layers for internal production usage.",
                        "Tested REST APIs with Postman.",
                        "Achieved over 95% code coverage via integration tests and unit tests (metrics gathered from llvm-cov).",
                    ]
                },
                {
                    "Continuous Delivery & Deployment Automation": [
                        "Re-architected Jenkins pipelines, cutting runtime by 50% and automating complex test and release workflows.",
                        "Managed Jenkins server upgrades, plugin configurations, and coverage reporting.",
                    ]
                },
                {
                    "Other Responsibilities" : [
                        "Led stakeholder meetings to gather requirements and foster strong relationships across multiple teams and vendors.",
                        "Worked within Agile methodologies with biweekly sprints and daily standups.",
                        "Mentored junior engineers, providing guidance on best practices in software development and testing.",
                    ]
                },
            ],
            "keyAchievements": [
                "Delivered major cost savings by removing entire test insertions from the factory floor. This resulted in a submission for a patent and multiple presentations at internal conferences.",
            ]
        },
        {
            "title": "Software Engineer Intern",
            "company": "Texas Instruments",
            "duration": "May 2021 - August 2021",
            "responsibilities": [
                {
                    "" : [
                        "Designed a minimally viable prober simulator in Java",
                        "Built various Junit test cases at the unit & integration level",
                        "Participated in code reviews, design decisions, and daily stand ups",
                    ]
                }
            ],
            "keyAchievements": [
                "Gained hands-on experience in software development and agile methodologies.",
                "Contributed to the development of internal tools that improved team efficiency."
            ]
        },
        {
            "title": "C++ Tutor",
            "company": "Texas Tech University",
            "duration": "2021 - 2022",
            "responsibilities": [
                {
                    "" : [
                        "Tutored students in C++ programming concepts and problem-solving techniques.",
                        "Assisted students with homework assignments and projects.",
                        "Provided guidance on best practices in coding and debugging."
                    ]
                }
            ],
            "keyAchievements": [
                "Led study sessions before exams, resulting in improved student performance.",
            ]
        }
    ],
    "projects": [
        {
            "name": "Fullstack Ecommerce Analytics Dashboard",
            "description": "A fullstack web application that allows users to view and analyze ecommerce data.",
            "technologies": ["React", "TailwindCSS", "TypeScript", "Vite", "GitHub Actions", "Java", "Spring Boot", "Cassandra", "Prometheus", "Grafana", "Kafka", "Docker"],
            "status": "In Progress",
        },
        {
            "name": "Portfolio Website",
            "description": "A personal portfolio website to showcase my projects and skills.",
            "technologies": ["React", "TailwindCSS", "TypeScript", "Vite", "GitHub Actions"],
            "demoLink": "/assets/portfolio-demo.gif",
            "status": "In Progress"
        },
        {
            "name": "Battleship Game",
            "description": "A vanilla JavaScript battleship game that allows the user to choose drag and drop ships and change rotation.",
            "technologies": ["Programmed using JavaScript", "Unit tested using Jest", "Built using webpack"],
            "demoLink": "/assets/battleship-demo.gif",
            "status": "Completed!"
        },
          
    ]
}