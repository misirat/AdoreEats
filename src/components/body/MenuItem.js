import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = props => {
    console.log(props);
    return (
        <div>
            <div>
                <Card style={{ margin: '10px' }}>
                    <CardImg
                        alt={props.dish.name}
                        src={props.dish.image}
                        width="100%"
                        style={{ opacity: "0.5" }}
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h4" onClick={props.onDishSelect} style={{ color: 'black', fontFamily: 'Tahoma', WebkitTextStroke: '1px purple', cursor: 'pointer' }}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        </div >
    );
}

export default MenuItem;