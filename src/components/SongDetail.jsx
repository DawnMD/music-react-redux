import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a Song</div>;
  }
  return (
    <div>
      <h3>Details:</h3>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
