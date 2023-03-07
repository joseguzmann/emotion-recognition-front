import "animate.css/animate.min.css";
import React, { useContext, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import LoadingContext from "../../context/loading.context";
import sendAudio from "../../lib/back";
import classes from "./About.module.css";

import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import postAudioData from "../../lib/back";

const About = () => {
  const recorderControls = useAudioRecorder();

  const { loading, setLoading } = useContext(LoadingContext);

  const [audio, setAudio] = useState(null);
  const [texto, setTexto] = useState("No identificado");

  const accept = (blob) => {
    console.log("Enviando audio");
    handleBlob(blob);
  };

  const reject = () => {
    console.log("Audio no enviado");
  };

  const confirm = (blob) => {
    confirmDialog({
      message: "Deseas enviar el audio?",
      header: "Analizando audio",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sí",
      accept: () => accept(blob),
      reject,
    });
  };

  const handleBlob = async (blob) => {
    setLoading(true);
    const response = await postAudioData(blob);
    if (response) {
      console.log("Emocion recibida: ", response.message);
      // switch (response.message) {
      //   case "female_fear":
      //     setTexto(response.message);
      //     setAudio("fear");
      //     break;

      //   default:
      //     setTexto("No identificado");
      //     setAudio(null);
      //     break;
      // }
    }
    setLoading(false);
  };

  return (
    <div className={classes.box} id="about">
      <span className={classes.head}>
        MODELO DE RECONOCIMIENTO DE EMOCIONES
      </span>
      <h2 className={classes.heading}>ABOUT</h2>
      <div className={classes.About}>
        <p>
          A continuación se presenta el front-end de nuestro proyecto,
          construido en React, que consume el servicio de la API RESTful
          desarrollada a partir de Flask para consumir nuestro modelo .h5 desde
          python. Para realizar el reconocimiento se debe grabar un archivo de
          audio, mismo que será enviado a través de un POST HTTP hacia el
          back-end para ser analizado y a partir de ahí recuperar un string que
          nos indique de qué tipo de emoción y genero se trata.
        </p>
        <br />
        <p>
          Para grabar y enviar el audio se debe utilizar el siguiente
          componente:
        </p>
        <AudioRecorder
          onRecordingComplete={(blob) => confirm(blob)}
          recorderControls={recorderControls}
        />
        <br />
        <p>El resultado de la emoción es: </p>
        <br />
        <h4>{texto.toUpperCase()}</h4>
        <br />
        <ReactAudioPlayer
          src={window.location.origin + "/music/" + audio + ".mp3"}
          autoPlay={true}
          controls
        />
      </div>
      <ConfirmDialog />
    </div>
  );
};

export default About;
