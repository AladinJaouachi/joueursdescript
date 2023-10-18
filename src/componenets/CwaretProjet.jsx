import React from 'react';
import Card from 'react-bootstrap/Card';





const CwaretProjet = ({Players}) => {
    return (
        <div className='cwaret'>
        {Players.map((joueur,index)=>{
            return(
                <Card key={index}  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={joueur.url_img} />
                <Card.Body>
                  <Card.Title>Nom : {joueur.nom}</Card.Title>
                  <Card.Title>Equipe : {joueur.equipe}</Card.Title>
                  <Card.Title>nationalité : {joueur.nationalité}</Card.Title>
                  <Card.Title>num_maillot : {joueur.num_maillot}</Card.Title>
                  <Card.Title>Age : {joueur.age}</Card.Title>

                 
                </Card.Body>
              </Card>
            )
        })}
        
        
        </div>
    );
}

export default CwaretProjet;
