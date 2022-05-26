import React from "react";
import "../bootstrap.min.css";
import {Store} from "./Store.jsx"

function Form(props) {
  const [array, setArray] = React.useState({
    data : [],
    references : [],
  })
  const [data, setData] = React.useState({
      referenceID : "0",
      monto : 0,
      card : "0000 0000 0000 0000",
      todos : []
  });

  const handlerChangeReference = (event) => {
      const value = event.target.value;
      setData({...data, referenceID: value})
  }

  const handlerChangeMonto = (event) => {
    const value = event.target.value;
    setData({...data, monto: value})
}

const handlerChangeCard = (event) => {
  const value = event.target.value;
  setData({...data,card:value})
}

const handlerChange = (event) => {
  const newData = data
  data[event.target.name] = event.target.value
  setData(data)
  console.log(data)
}

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    // array.data.push(data)
    // array.references.push(data.referenceID)
    // console.log(array.data)
    setData({...data, todos: [...data.todos, data]})
  }

  return (
    <div className="card p-5">
      <form onSubmit={handlerOnSubmit}>
      <div className="mb-3">
        <label htmlFor="referenceID" className="form-label">
          Referencia
        </label>
        <input
          type="text"
          className="form-control"
          id="referenceID"
          name="referenceID"
          aria-describedby="emailHelp"
          value={data.referenceID}
          onChange={handlerChangeReference}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="monto" className="form-label">
          Monto
        </label>
        <input type="number" className="form-control" name="monto" id="monto" value={data.monto} onChange={handlerChangeMonto}/>
      </div>
      <div className="mb-3">
        <label htmlFor="card" className="form-label">
          Tarjeta
        </label>
        <input type="text" className="form-control" name="card" id="card" value={data.card} onChange={handlerChangeCard}/>
      </div>
      <button type="submit" className="btn btn-primary">
        Pagar
      </button>
    </form>
    <div>
      {array.data.map((element) => {
        const {referenceID, monto, card} = element
        return <Store referenceID={referenceID} monto={monto} card={card}/>
      })}
    </div>
    </div>
  );
}

export { Form };
