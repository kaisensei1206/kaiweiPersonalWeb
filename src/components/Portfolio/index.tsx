import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

import ProtfolioCard from "./PortfolioCard";
import demo1 from "../../image/brainLib.png";
import demo2 from "../../image/ai_detec.png";
import demo3 from "../../image/ai_detec.png";
import demo5 from "../../image/image/whisper.jpg";
import demo6 from "../../image/personal_image.jpg";
import demo7 from "../../image/nintendo_img.jpg";
import demo4 from "../../image/discord-logo.jpg";
import demo8 from "../../image/gemini.jpg";

const Portfolio = () => {
  return (
    <div id={"Portfolio"} className={styles.container}>
      <div className={styles.container_bg_secondHeader}></div>
      <div className={styles.container_bg_secondContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              PORTFOLIO
            </header>
            <div className={styles.titleSection_container_subtitle}>
              Here it gets interesting.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <ProtfolioCard
              imageUrl={demo5}
              websiteUrl={""} 
              githubUrl={"https://github.com/kaisensei1206/Whisprtale"}
              title={"說故事Whisprtale"}
              subtitle={
                "The system enables story creation through voice and text input, utilizing Whisper API, ChatGPT LLM API, and DALL-E."
              }
            />

            <ProtfolioCard
              imageUrl={demo4}
              websiteUrl={
                ""
              }
              githubUrl={"https://github.com/kaisensei1206/KaisenseiBot"}
              title={"KaisenseiBot"}
              subtitle={
                "A full function discord music bot using Node.js. "
              }
            />
            <ProtfolioCard
              imageUrl={demo6}
              websiteUrl={"https://kaisenseiwebsite-440314.de.r.appspot.com/"}
              githubUrl={"https://github.com/kaisensei1206/kaiweiPersonalWeb"}
              title={"kaisensei Personal Website"}
              subtitle={
                "This wonderful website is my first personal website using React."
              }
              
            />
            <ProtfolioCard
              imageUrl={demo7}
              websiteUrl={"https://kaisensei1206.github.io/web_nintendo/"}
              githubUrl={"https://github.com/kaisensei1206/web_nintendo"}
              title={"遊戲靜態網頁"}
              subtitle={
                "homepage of a well-known gaming website and host it on GitHub Pages"
             
              }
              />
              <ProtfolioCard
              imageUrl={demo1}
              websiteUrl={""}
              githubUrl={"https://github.com/kaisensei1206/BrainLib"}
              title={"Brainlib"}
              subtitle={
                "A social knowledge-sharing platform for students"
             
              }
              />
              <ProtfolioCard
              imageUrl={demo2}
              websiteUrl={"https://kaisensei1206.github.io/AI-Image-Detector/"}
              githubUrl={"https://github.com/kaisensei1206/AI-Image-Detector"}
              title={"AI-Image-Detector"}
              subtitle={
                "returning color and tag information for the image using Imagga API"
              }
              />
              <ProtfolioCard
              imageUrl={demo8}
              websiteUrl={"https://kaisensei1206.github.io/Google-Gemini-Clone/"}
              githubUrl={"https://github.com/kaisensei1206/Google-Gemini-Clone"}
              title={"Google-Gemini-Clone"}
              subtitle={
                "Google-Gemini-Clone using google Api"
              }
              />
              
              
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
