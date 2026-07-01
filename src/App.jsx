import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import profileImage from "./assets/image.png";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="column1">
                <div className="columnContent1">
                    <section className="profile-image-container">
                        <img
                            className="profile-image imgBlock"
                            src={profileImage}
                        />
                    </section>
                    <section className="block contact-info">
                        <div className="contact-info-content">
                            <div className="contact-info titleRole">
                                <h2>Malcolm Melbourne</h2>
                                <h3>Freelance Developer</h3>
                            </div>

                            <div className="contact-info-meta">
                                <ul>
                                    <li>
                                        <strong>Website:</strong>
                                        malcolmmelbourne.ca
                                    </li>
                                    <li>
                                        <strong>Email:</strong>
                                        me@malcolmmelbourne.ca
                                    </li>
                                    <li>
                                        <strong>Phone:</strong> xxxxxxxxxx
                                    </li>
                                </ul>
                            </div>
                            <p></p>
                            <p></p>
                            <p></p>

                            <div className="additionalInfo">
                                <details>
                                    <summary>Additional Info</summary>
                                    <p>
                                        <strong>Hometown:</strong> London, ON,
                                        CANADA
                                    </p>
                                    <p>
                                        <strong>Role:</strong> Full Stack
                                        Software Developer
                                    </p>
                                    <p>
                                        <strong>Education:</strong> Web
                                        Development and Internet Applications
                                    </p>
                                    <p>
                                        <strong>School:</strong> Fanshawe
                                        College
                                    </p>
                                    <p>
                                        <strong>Language:</strong> English
                                        (Native Proficiency), Korean (Elementary
                                        Proficiency)
                                    </p>
                                </details>
                            </div>
                        </div>

                        <section clas Name="social-media">
                            <div>
                                <p>Social</p>
                            </div>
                        </section>

                        <section className="hire-me-top">
                            <button>Hire me</button>
                        </section>
                        <section className="download-section">
                            <button className="download-btn">
                                Download My Resume
                            </button>
                        </section>
                    </section>
                </div>
            </div>
            <div className="column2">
                <div className="columnContent2">
                    <section className="experience block">
                        <h2>Experience</h2>

                        <section className="experience-item">
                            <p className="company">Freelance Work</p>
                            <span className="duration">
                                September 2026 - Present
                            </span>
                            <section className="roles">
                                <section className="role-item"></section>
                            </section>
                        </section>
                        <section className="experience-item">
                            <p className="company">Fanshawe College</p>
                            <span className="duration">
                                May 2025 - March 2026
                            </span>
                            <section className="roles">
                                <section className="role-item">
                                    <p>Educational Resource Developer</p>
                                    <span className="role-type">
                                        Contract Part-Time
                                    </span>
                                    <span className="duration">
                                        September 2025 - March 2026
                                    </span>
                                    <section className="role-description">
                                        <ul>
                                            <li>
                                                Converted learning content from
                                                Google Docs into Pressbooks
                                                using HTML/CSS, improving
                                                structure, formatting, and
                                                accessibility
                                            </li>
                                            <li>
                                                Supported digital learning
                                                initiatives by contributing to
                                                internal open-source tools and
                                                content workflows
                                            </li>
                                            <li>
                                                Collaborated with faculty and
                                                instructional teams to prepare
                                                course materials for online
                                                publication
                                            </li>
                                            <li>
                                                Applied accessibility best
                                                practices to improve usability
                                                for diverse learners
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <section className="role-item">
                                    <section className="role-heading">
                                        <p>FOL Ambassador</p>
                                        <span className="role-type">
                                            Volunteer
                                        </span>
                                        <span className="duration">
                                            September 4, 2025 - September 10th,
                                            2025
                                        </span>
                                    </section>

                                    <section className="role-description">
                                        <ul>
                                            <li>
                                                Supported student engagement and
                                                promoted the use of Fanshawe
                                                Online learning tools
                                            </li>
                                            <li>
                                                Assisted students with platform
                                                navigation and digital resources
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <section className="role-item">
                                    <section className="role-heading">
                                        <p>Educational Resource Developer</p>
                                        <span className="role-type">
                                            Seasonal
                                        </span>
                                        <span className="duration">
                                            May 2025 - August 2025
                                        </span>
                                    </section>
                                    <section className="role-description">
                                        <ul>
                                            <li>
                                                Assisted with creation and
                                                formatting of digital learning
                                                resources
                                            </li>
                                            <li>
                                                Supported accessibility and
                                                content publishing workflows
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className="experience-item">
                            <p className="company">Shopify, Inc.</p>
                            <span className="duration">
                                January 2021 - February 2024
                            </span>
                            <section className="roles">
                                <section className="role-item">
                                    <section className="role-heading">
                                        <p>Email Deliverability Specialist</p>
                                        <span className="role-type">
                                            Full-Time Permanent
                                        </span>
                                        <span className="duration">
                                            March 2022 - February 2024
                                        </span>
                                    </section>
                                    <section className="role-description">
                                        <ul>
                                            <li>
                                                Provided on-call support during
                                                peak send events, helping
                                                maintain reliable merchant email
                                                delivery in a high-volume
                                                production environment
                                            </li>
                                            <li>
                                                Resolved merchant email delivery
                                                issues involving SPF, DKIM, DNS,
                                                and sender authentication
                                            </li>
                                            <li>
                                                Investigated bounce rates, inbox
                                                placement, and domain reputation
                                                to improve deliverability
                                                performance
                                            </li>
                                            <li>
                                                Served as escalation specialist
                                                for complex technical cases
                                                requiring advanced
                                                troubleshooting
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <section className="role-item">
                                    <section className="role-heading">
                                        <p>Support Advisor</p>
                                        <span className="role-type">
                                            Full-Time Permanent
                                        </span>
                                        <span className="duration">
                                            January 2021 - March 2022
                                        </span>
                                    </section>
                                    <section className="role-description">
                                        <ul>
                                            <li>
                                                Delivered technical and account
                                                support to merchants using
                                                Shopify's platform
                                            </li>
                                            <li>
                                                Diagnosed platform,
                                                configuration, and workflow
                                                issues with high accuracy
                                            </li>
                                            <li>
                                                Documented complex cases and
                                                coordinated escalations across
                                                internal teams
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="tech-stack block">
                        <section className="section-heading">
                            <h2>Tech Stack</h2>
                        </section>
                        <section className="tech-stack-container">
                            <section className="tech-block frontend-container">
                                <h3>Frontend</h3>
                                <ul className="stacks">
                                    <li className="tech frontend">React</li>
                                    <li className="tech frontend">
                                        React Native
                                    </li>
                                    <li className="tech frontend">Angular</li>
                                    <li className="tech frontend">
                                        TypeScript
                                    </li>
                                    <li className="tech frontend">HTML/CSS</li>
                                </ul>
                            </section>
                            <section className="tech-block backend-container">
                                <h3>Backend</h3>
                                <ul className="stacks">
                                    <li className="tech backend">Node.js</li>
                                    <li className="tech backend">Express</li>
                                    <li className="tech backend">PHP</li>
                                </ul>
                            </section>
                            <section className="tech-block databases-container">
                                <h3>Databases</h3>
                                <ul className="stacks">
                                    <li className="tech databases">MySQL</li>
                                    <li className="tech databases">
                                        SQL Server
                                    </li>
                                    <li className="tech databases">
                                        Firebase Firestore
                                    </li>
                                    <li className="tech databases">Oracle</li>
                                </ul>
                            </section>
                            <section className="tech-block tools-cloud-container">
                                <h3>Cloud & Tools</h3>
                                <ul className="stacks">
                                    <li className="tech tools-cloud">
                                        Git/GitHub
                                    </li>
                                    <li className="tech tools-cloud">Docker</li>
                                    <li className="tech tools-cloud">
                                        CloudFlare
                                    </li>
                                    <li className="tech tools-cloud">Azure</li>
                                    <li className="tech tools-cloud">Expo</li>
                                </ul>
                            </section>
                        </section>
                    </section>
                    <section className="education block">
                        <section className="section-heading">
                            <h2>Education</h2>
                        </section>

                        <section className="education-item">
                            <h3>Coming soon...</h3>
                            <h4>Fanshawe College</h4>
                            <span className="duration">
                                ??September 2026 - April 2028??
                            </span>
                        </section>
                        <section className="education-item">
                            <h3>Web Development and Internet Applications</h3>
                            <h4>Fanshawe College</h4>
                            <span className="duration">
                                September 2024 - April 2026
                            </span>
                        </section>
                    </section>

                    <section className="awards block">
                        <section className="section-heading">
                            <h2>Honours & Awards</h2>
                        </section>
                        <section className="awards-item">
                            <h3>President's Honour Roll</h3>
                            <h4>Fanshawe College</h4>
                            <span className="issued">May 2026</span>
                            <p>
                                Awarded for achieving a cumulative GPA of 4.0 or
                                higher.
                            </p>
                        </section>
                        <section className="awards-item">
                            <h3>Dean's Honour Roll (4 Terms)</h3>
                            <h4>Fanshawe College</h4>
                            <span className="issued">
                                September 2024 - April 2026
                            </span>
                            <p></p>
                        </section>
                        <section className="awards-item">
                            <h3>Certificate of Recognition</h3>
                            <h4>Fanshawe College</h4>
                            <span className="issued">January 2026</span>
                            <p>
                                Recognized for participation in a community
                                collaborative partnership sponsored by McCormick
                                Care Foundation.
                            </p>
                        </section>
                        <section className="awards-item">
                            <h3>Dean's Honour Roll (4 Terms)</h3>
                            <h4>Fanshawe College</h4>
                            <span className="issued">July 2025</span>
                            <p>
                                Awarded to Martha Paiz-Domingo and Malcolm
                                Melbourne for TornadoWise, an interactive
                                web-based map visualizing tornado activity and
                                risk across Canada. Recognized for innovation,
                                technical excellence, and contribution to
                                advancing geospatial solutions.
                            </p>
                        </section>
                    </section>
                    <section className="hire-me block">
                        <section className="section-heading">
                            <h2>Hire me!</h2>
                        </section>
                        <span>
                            Open to both freelancing projects and part-time,
                            full-time and contract roles.
                        </span>
                        <p>
                            You can contact me by filling the contact form down
                            below.
                        </p>
                        <section>
                            <button>Contact Me</button>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}

export default App;
