// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Feed() {
//   return (
//     <div className="d-flex justify-content-center">
//       <Card style={{ width: '15rem', height:'20rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//     </Card>
//     <Card style={{ width: '15rem', height:'20rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//     </Card>
//     <Card style={{ width: '15rem', height:'20rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//     </Card>
//     <Card style={{ width: '15rem', height:'20rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//     </Card>
//     <Card style={{ width: '15rem', height:'20rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//     </Card>
//     </div>
    
//   );
// }

// export default Feed;



import FeedCard from '../feedCard/FeedCard';
import './feed.css'
function Feed() {
  return (
    <div className="feed">
      {/* <h1>sdafsdg</h1> */}
      <div className="wrapper">
        <FeedCard />
      </div>
      <div className="wrapper">
        <FeedCard />
      </div>
      <div className="wrapper">
        <FeedCard />
      </div>
      <div className="wrapper">
        <FeedCard />
      </div>
      <div className="wrapper">
        <FeedCard />
      </div>
      <div className="wrapper">
        <FeedCard />
      </div>
      <div className="wrapper">
        <FeedCard />
      </div>
      <div className="wrapper">
        <FeedCard />
      </div>
      <div className="wrapper">
        <FeedCard />
      </div>
      
    </div>
  );
}

export default Feed;