import './MoviesCard.css';
import { FaShareAlt, FaHeart, FaCommentAlt } from 'react-icons/fa';
function MoviesCard(props) {

  return (
    <div className="card" style={{ backgroundImage: `url(${props.bg})` }}>

      <div className="mainDiv" >
        <div className="leftDiv">
          <div className="leftDivUpperContainer">

            <div className="imgContainer">
              <img src={props.profile} alt="" />
            </div>

            <div className="detailContainer">
              <div className="movieTitle">
                <h1>{props.name}</h1>
                <p>{props.year},{props.director}</p>
              </div>
              <div className="detailContainerBottom">
                <div className="time">
                  <p>{props.time}</p>
                </div>

                <div className="movieType">
                  <p>{props.movieType}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="leftDivLowerContainer">
            <p>{props.details}</p>
            <div className="iconCotainer">
              <FaShareAlt />
              <FaHeart />
              <FaCommentAlt />
            </div>
          </div>
        </div>
        <div className="rightDiv"></div>
      </div>

    </div>
  );
}

export default MoviesCard;
