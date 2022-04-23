import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody, Badge } from "reactstrap";
import LoadComments from "./LoadComments";

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
                <hr />
                <Badge color="info" pill>
                    Comments
                </Badge>
                <LoadComments comments={props.dish.comments} />
            </Card>

        </div>
    );
}

export default DishDetail;