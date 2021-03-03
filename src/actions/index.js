//Action Creator

export const selectSong = (song) => {
  //Action
  return {
    type: "SONG_SELECT",
    payload: song,
  };
};
