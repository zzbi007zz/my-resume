import React, { useState } from 'react';
import { ChevronRight, Briefcase, Award } from 'lucide-react';

const careerData = {
    2023: {
        title: "Senior Software Tester",
        company: "iTech",
        period: "November 2023 - Present",
        responsibilities: [
            "Execute manual and automated regression tests",
            "Conduct test cases and create comprehensive test plans",
            "Develop test scripts for web applications",
            "Collaborate closely with Business Analysts, Designers, and Development teams",
            "Improve test coverage and efficiency through cross-functional collaboration"
        ],
        achievements: [
            "Implemented robust automation frameworks for complex web applications",
            "Significantly reduced testing time through optimized test scripts and processes"
        ]
    },
    2022: {
        title: "Automation/Manual/Mobile Tester",
        company: "U-NICA VIET NAM",
        period: "November 2022 - September 2023",
        responsibilities: [
            "Create and execute test cases for web and mobile applications",
            "Design and implement automation frameworks using Selenium and Appium",
            "Conduct exploratory testing of applications",
            "Report defects using Jira",
            "Work in an Agile development environment"
        ],
        achievements: [
            "Gained expertise in brand protection technology",
            "Improved test efficiency through effective automation strategies"
        ]
    },
    2021: {
        title: "QC/Support",
        company: "SAVILLS",
        period: "September 2021 - October 2022",
        responsibilities: [
            "Write and execute test cases for Web apps and mobile app",
            "Provide exploratory testing for the systems",
            "Work with client coordinators to clarify requirements",
            "Document new modules and support clients in issue resolution",
            "Report defects to Azure",
            "Work in Agile development environment"
        ],
        achievements: [
            "Gained deep knowledge of property management systems",
            "Improved client satisfaction through effective support and issue resolution"
        ]
    },
    2019: {
        title: "Software Tester",
        company: "HAE",
        period: "December 2019 - September 2021",
        responsibilities: [
            "Conduct functional and system integration testing",
            "Write test cases, test plans, and execute test scripts",
            "Develop automated test scripts for regression testing",
            "Design and implement automation scripts using Selenium and WebdriverIO",
            "Manage and improve processes within the department",
            "Work with development teams to create test plans"
        ],
        achievements: [
            "Gained extensive knowledge of logistics processes",
            "Successfully implemented automation strategies, improving regression testing efficiency"
        ]
    },
    2018: {
        title: "Software Tester",
        company: "TMA",
        period: "November 2018 - December 2019",
        responsibilities: [
            "Execute regression test cases (manual and automated)",
            "Write and upload test cases to Jira",
            "Conduct test case reviews and executions",
            "Perform risk analysis and document issues",
            "Generate and present test reports to Project Managers"
        ],
        achievements: [
            "Gained experience with telecommunication systems",
            "Developed proficiency in black box testing and Perl scripting"
        ]
    },
    2017: {
        title: "Front-end Developer",
        company: "BAMBOO",
        period: "December 2017 - May 2018",
        responsibilities: [
            "Develop user interfaces for web applications",
            "Build company website from scratch",
            "Work with e-commerce platforms and frameworks"
        ],
        achievements: [
            "Gained experience with Prestashop framework",
            "Developed expertise in e-commerce website development",
            "Improved skills in CSS, HTML, Bootstrap, and jQuery"
        ]
    },
    2014: {
        title: "IT/Web Developer",
        company: "DRC",
        period: "May 2014 - May 2017",
        responsibilities: [
            "Create and maintain company website",
            "Handle computer and network troubleshooting",
            "Provide IT support to employees"
        ],
        achievements: [
            "Gained knowledge of manufacturing processes in the rubber industry",
            "Developed strong communication skills working with co-workers and customers"
        ]
    },
    2012: {
        title: "Software Developer / Automation Tester",
        company: "INFONAM",
        period: "June 2012 - May 2014",
        responsibilities: [
            "Develop patient portal features including online payments and medical expense tracking",
            "Write test plans and test cases for UI",
            "Develop automation test cases using HP Quicktest Pro (QTP)"
        ],
        achievements: [
            "Successfully developed and deployed patient portal system",
            "Gained experience in Java, Spring MVC 3, Spring security, and Maven",
            "Improved skills in writing test cases and test plans"
        ]
    }
};

const CareerTimeline = () => {
    const [selectedYear, setSelectedYear] = useState(Math.max(...Object.keys(careerData).map(Number)));

    return (
        <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Career Journey</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {Object.keys(careerData).map((year) => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(Number(year))}
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${selectedYear === Number(year)
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md transform scale-105'
                                : 'bg-white text-blue-500 hover:bg-blue-50 hover:shadow'
                            }`}
                    >
                        {year}
                    </button>
                ))}
            </div>
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-blue-500"></div>
                {Object.entries(careerData)
                    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                    .map(([year, data], index) => (
                        <div
                            key={year}
                            className={`relative z-10 mb-8 ${Number(year) === selectedYear ? 'opacity-100 scale-105' : 'opacity-50 scale-100'
                                } transition-all duration-300`}
                        >
                            <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-4' : 'pl-4'}`}>
                                    <h3 className="text-xl font-semibold text-gray-800">{data.title}</h3>
                                    <p className="text-blue-600 font-medium">{data.company}</p>
                                    <p className="text-sm text-gray-500">{data.period}</p>
                                </div>
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                                    <Briefcase className="text-white" size={20} />
                                </div>
                                <div className="w-1/2"></div>
                            </div>
                            {Number(year) === selectedYear && (
                                <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                                            <ChevronRight className="text-blue-500 mr-1" size={18} />
                                            Key Responsibilities
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {data.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="text-gray-600">{resp}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                                            <Award className="text-blue-500 mr-1" size={18} />
                                            Achievements
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {data.achievements.map((achievement, idx) => (
                                                <li key={idx} className="text-gray-600">{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CareerTimeline;