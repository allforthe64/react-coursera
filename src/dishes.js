import utha from './images/uthappizza.png';
import zucc from './images/zucchipakoda.png';
import vadonut from './images/vadonut.png';
import elai from './images/elaicheesecake.png';

export const DISHES =
[
    {
        id: 0,
        name:'Uthappizza',
        image: utha,
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [{
            id: 0,
            comment: "It was delicious!",
            author: "Billiam",
            date: "Nov 22, 2020"
        }]
    },
    {
        id: 1,
        name:'Zucchipakoda',
        image: zucc,
        category: 'appetizer',
        label:'',
        price:'1.99',
        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter 1accompanied with a sweet-tangy tamarind sauce',
        comments: [{
            id: 1,
            comment: "Delectible!",
            author: "Billiam",
            date: "March 18, 2022"
        }]
    },
    {
        id: 2,
        name:'Vadonut',
        image: vadonut,
        category: 'appetizer',
        label:'New',
        price:'1.99',
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comments: [ { 
                id: 2,
                comment: "Scrumptious!",
                author: "Billiam",
                date: "Feb 17, 2022"
            
        }]                    
    },
    {
        id: 3,
        name:'ElaiCheese Cake',
        image: elai,
        category: 'dessert',
        label:'',
        price:'2.99',
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
        comments: [{
            id: 3,
            comment: "Mind blowing!",
            author: "Billiam",
            date: "Dec 31, 2021"
        }]                       
    }
]