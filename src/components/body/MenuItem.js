import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = props => {
    console.log(props);
    return (
        <div>
            <div>
                <Card inverse>
                    <CardImg
                        alt={props.dish.name}
                        src={props.dish.image}
                        width="100%"
                        style={{ opacity: "0.7" }}
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h4" style={{ color: 'black', fontFamily: 'Tahoma', WebkitTextStroke: '1px purple' }}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        </div >
    );
}

export default MenuItem;