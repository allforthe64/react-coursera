import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import Dishdetail from './dishDetailComponents';


class Menu extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }
    

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImgOverlay>
                            <h3>{dish.name}</h3>
                        </CardImgOverlay>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                    </Card>
                </div>
            );
        });

        return(
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className='row'>
                    <div className="col-12 ml-1">
                        <Dishdetail dish={this.state.selectedDish} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;