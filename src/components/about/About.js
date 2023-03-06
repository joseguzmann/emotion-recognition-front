import React from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import "animate.css/animate.min.css";
import sendAudio from "../../lib/back";
import ReactAudioPlayer from "react-audio-player";
import { useState, useEffect, useContext } from "react";
import LoadingOverlay from "react-loading-overlay";
import LoadingContext from "../../context/loading.context";
import { useConfirm } from "material-ui-confirm";

const About = () => {
  const recorderControls = useAudioRecorder();

  const { loading, setLoading } = useContext(LoadingContext);

  const [audio, setAudio] = useState(null);
  const [emocion, setEmocion] = useState("No identificado");

  const handleBlob = async (blob) => {
    setLoading(true);
    const response = await sendAudio(blob);
    setLoading(false);
  };

  const addAudioElement = (blob) => {
    handleBlob(blob);
  };

  return (
    <div className={classes.box} id="about">
      <span className={classes.head}>
        MODELO DE RECONOCIMIENTO DE EMOCIONES
      </span>
      <h2 className={classes.heading}>ABOUT</h2>
      <div className={classes.About}>
        <p>
          Nuestro proyecto consiste en desarrollar una aplicación que permita
          grabar el habla y analizar las emociones presentes en la misma en
          tiempo real. Utilizando tecnología de reconocimiento de emociones,
          nuestra aplicación podrá detectar diferentes emociones en el habla del
          usuario, como alegría, tristeza, enojo, entre otras.
        </p>
        <p>
          Para grabar y enviar el audio se debe utilizar el siguiente
          componente:
        </p>
        <AudioRecorder
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
        />
        <br />
        <p>El resultado de la emoción es: </p>
        <h3>{emocion.toUpperCase()}</h3>
        <ReactAudioPlayer
          src={window.location.origin + "/music/" + audio + ".mp3"}
          autoPlay={true}
          controls
        />
      </div>
    </div>
  );
};

export default About;
