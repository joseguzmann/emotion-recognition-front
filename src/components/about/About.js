import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import "animate.css/animate.min.css";
import sendAudio from "../../lib/back";
import { useState } from "react";

const About = () => {
  const recorderControls = useAudioRecorder();
  const [emocion, setEmocion] = useState(null);

  const handleBlob = async (blob) => {
    console.log(blob);
    const response = await sendAudio(blob);

    console.log(response);
  };

  const addAudioElement = (blob) => {
    handleBlob(blob);
  };

  return (
    <div className={classes.box} id="about">
      <ScrollAnimation
        offset={0}
        animateIn="fadeInLeft"
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>
          MODELO DE RECONOCIMIENTO DE EMOCIONES
        </span>
        <h2 className={classes.heading}>CÓMO UTILIZARLO?</h2>
        <div className={classes.About}>
          <p>
            Nuestro proyecto consiste en desarrollar una aplicación que permita
            grabar el habla y analizar las emociones presentes en la misma en
            tiempo real. Utilizando tecnología de reconocimiento de emociones,
            nuestra aplicación podrá detectar diferentes emociones en el habla
            del usuario, como alegría, tristeza, enojo, entre otras.
          </p>
          <p>
            Para grabar y enviar el audio se debe utilizar el siguiente
            componente:
          </p>
          <AudioRecorder
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
          />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
