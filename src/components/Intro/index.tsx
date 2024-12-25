import React, { useState, useCallback } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import avatar from "../../image/IMG_3153.jpg";

const Intro = () => {
  return (
    <div id={"Intro"} className={styles.container}>
      <div className={styles.container_bg_secondHeader}></div>
      <div className={styles.container_bg_secondContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              INTRO
            </header>
            <div className={styles.titleSection_container_subtitle}>
              What I am all about.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <p>
            Growing up in Vietnam, I strongly believe that computers have had
            a profound impact on modern human history. Computers make life
            easier for human beings in various ways. I want to create my own
            webs and apps. Wherefore this shot in my life, I am interested in
            becoming a Software Engineer Developer.
            </p>
            <p>
            Academically, I have excelled in Logic Thinking and done well in
            Mathematics and Programming skills. I am fulfilling and satisfied
            after solving a question. I enjoy the process of looking for
            programming problem. 
            Becoming a Software Engineer Developer, I know that I should devote 
            myself wholeheartedly to learning various programming technologies 
            and frameworks to get into the world of software engineering. 
            Therefore, I have made a special effort to enhance my proficiency 
            in programming skills.
            </p>
            <p>
            Academically, I have excelled in logical thinking and programming skills.
            I find great fulfillment in problem-solving, whether it’s executing a programming 
            solution perfectly or tackling a challenging question. While I initially focused 
            on software engineering, in my third year, I began exploring backend technologies
            like Node.js and databases, which sparked a growing interest. Since then, I have 
            dedicated myself to strengthening my backend development skills, motivated by the 
            potential impact they can have in both the tech industry and society.
            </p>
            <p>
            To grow further, I am eager to become involved in community work.
            I participated in flag selling every year when I stayed in Vietnam. 
            Also, I have worked as a volunteer in Zhongli Family Center in Taiwan.
            I have developed a sense of empathy. I strongly believe that I
            have to learn to put ourselves into others’ shoes and learn to
            make contributions to our society.
            </p>
            <p>
              I believe that I can showcase my talent to stand in technology and
              would be mutually beneficial and the society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
