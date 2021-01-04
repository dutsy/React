import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap'


class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dish: null
        }
    }

    render() {
        //just i have to make the all the elements as a called function instead of writing the code and elements it self in the return in the render thank all wish you all the best.
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className='row'>
                        <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                            <Card tag="li">
                                <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardImgOverlay>
                                    <CardTitle heading>
                                        {this.props.dish.name}
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card tag='li'>
                                <CardBody>
                                    <CardTitle heading>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.comments[0].author}</CardText>
                                    <CardText>{this.props.dish.comments[0].comment}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
}

export default DishDetail;
