import {Container,Row,Col} from "react-bootstrap";
import NewsList from "./NewsList";

const Hero = ({category,setCategory,currentPage,setCurrentPage,articles}) =>{

   return(
       <>
       <Container fluid  >
         <Row>
           <Col xs={12} md={9}>
             <h3 className="text-center mt-3">Latest<span className="badge bg-warning">News</span></h3>
             <NewsList 
             category={category} 
             currentPage={currentPage}
             articles={articles}
             setCurrentPage={setCurrentPage}
              />
           </Col>
         </Row>
       
       </Container>
       </>
   )
}


export default Hero;