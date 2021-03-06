import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';
import { DISHES } from '../dishes';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }


    renderDish(dish) {
        if (dish != null) {
            return (
                <div key={dish.id} className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <h3>{dish.name}</h3>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {
        if(comments==null){
            return(
                <div></div>
            )
        }
        const showComments = comments.map((cmnt) => {
            return(
                <div className="container">
                    <ul>
                        <li key={cmnt.id}>
                            <p>{cmnt.comment}</p>
                            <p>{cmnt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmnt.date)))}</p>
                        </li>
                    </ul>
                </div>
                
            )
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {showComments}
            </div>
        )
    }


    render() {
        
        const dish = this.props.dish;
        if(dish == null)
        {
            return(
                <div></div>
            )
        }
        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);
    
        
        return(
            <div class="container">
                <div className='row'>
                    <div className='col-12'>
                        {dishItem}
                    </div>
                
                    <div className='col-12'>
                        {dishComment}
                    </div>
                </div>
            </div>
            
        );
        
    }
}



export default DishDetail;
   