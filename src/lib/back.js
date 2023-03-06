const sendAudio = async (blob) => {
  try {
    const audioBlob = blob;
    const formData = new FormData();
    formData.append("audio", audioBlob, "audio.webm");

    const response = await fetch("http://127.0.0.1:3000/backend/audio", {
      method: "POST",
      body: formData,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default sendAudio;
