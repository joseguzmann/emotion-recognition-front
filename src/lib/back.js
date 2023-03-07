const postAudioData = async (blob) => {
  try {
    const audioBlob = blob;
    const formData = new FormData();
    formData.append("audio", audioBlob, "audio.webm");

    const response = await fetch("http://127.0.0.1:3000/backend/audio", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting audio data:", error);
    return null;
  }
};

export default postAudioData;
