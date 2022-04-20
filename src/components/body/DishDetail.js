import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";


const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: 'left' }} />
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>
                    <p>{props.dish.description}</p>
                    <p>{props.dish.price}</p>
                </CardText>
            </Card>

        </div>
    );
}

export default DishDetail;