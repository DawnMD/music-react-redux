const songReducer = () => {
  return [
    { title: "Straberries & Cigarettes", duration: "3:22" },
    { title: "Sweet", duration: "4:52" },
    { title: "Talking to Myself", duration: "3:51" },
    { title: "Het, Soul Sister", duration: "3:37" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECT") {
    return action.payload;
  }
  return selectedSong;
};
