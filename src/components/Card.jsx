import React from "react";
import "../Card.css";
import "../bootstrap.min.css";

function Card(props) {
  const [Number, setNumber] = React.useState(0);
	const [flag, setFlag] = React.useState(false);
	const [value, setValue] = React.useState({
		flag: true,
		number: 0
	});
  const like = () => {
    setNumber(Number + 1)
  }
  const {text, icon, pic, user} = props
  React.useEffect(() => {
    if(flag){
      document.getElementById('title').textContent = `Le diste Like a la publicación de ${user}`
    }else {
      setFlag(true)
    }
  });
  return (
    <div className="Instagram-card my-2">
      <div className="Instagram-card-header">
        <img src={icon} className="Instagram-card-user-image" alt="png"/>
        <a href="https://github.com/gomez-julian"
          className="Instagram-card-user-name"
        >
          { user }
        </a>
        <div className="Instagram-card-time"> 1 semana </div>
      </div>

      <div className="Instagram-card-image my-5">
        <img src={pic} className="publication" alt="png"/>
      </div>

      <div className="Instagram-card-content">
        <p>
          <button className="btn like" onClick={ like }>❤</button>
        </p>
        <p className="Likes">{ Number } Me gusta</p>
        <p>
          <a className="Instagram-card-content-user" href="https://github.com/gomez-julian">suarez_melida_</a>
          { text }
        </p>
        <p className="comments">Ver los 12 comentarios</p>
        <br />
        <a className="user-comment" href="https://github.com/gomez-julian">chrisobrien64</a> GPI
        <br />
        <a className="user-comment" href="https://github.com/gomez-julian">artie_mcparty</a> TRISTE PERO VERDADERO.
        <br />
        <a className="user-comment" href="https://github.com/gomez-julian">theealeexj</a> ELLA ES CALLAITA
        <hr />
      </div>

      <div className="Instagram-card-footer">
        <a className="footer-action-icons" href="https://github.com/gomez-julian">
          <i className="fa fa-heart-o"></i>
        </a>
        <input
          className="comments-input"
          type="text"
          placeholder="Añade un comentario..."
        />
        <a className="footer-action-icons" href="https://github.com/gomez-julian">
          <i className="fa fa-ellipsis-h"></i>
        </a>
      </div>
    </div>
  );
}

export { Card };
