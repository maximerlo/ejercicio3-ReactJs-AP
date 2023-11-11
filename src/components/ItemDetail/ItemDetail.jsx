import React from 'react'

export default function ItemDetail(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://i.blogs.es/34b8bc/package-delivery-1243499_960_720/840_560.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    Descripción: {props.description}
                </p>
                <p>Precio: {props.price}</p>
                <p>SKU: {props.sku}</p>
                <p>STOCK: {props.stock}</p>
                <a href="#" className="btn btn-primary">
                    LO QUIERO!
                </a>
            </div>
        </div>
  )
}
