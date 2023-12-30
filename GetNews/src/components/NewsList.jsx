import CustomPagination from './CustomPagination'
import { Col, Row, Card, Button } from "react-bootstrap";
import image from '../assets/news.jpg'


const NewsList = ({articles,currentPage,loading,setCurrentPage }) => {
  const isempty = articles?.length === 0;


  const pageSize =4;


  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
}
const handlePageClick =(pageNumber)=>{
  onPageChange(pageNumber);
} 
 const totalArticles = articles?.length
 const totalPages = Math.ceil(totalArticles / pageSize);
 const startIndex = (currentPage - 1) * pageSize;
 const endIndex = startIndex + pageSize;
 const currentArticles =articles.slice(startIndex,endIndex);

 
 if (isempty) {
  return <p>No news at the moment!</p>;
}
  return (
    <div className="my-5">
      <Row>
        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border" role="status"></div>
          </div>
        ) :(
          currentArticles?.map((article, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card
                style={{ width: "300px", marginRight: "10px", height: "350px" }}
                className="card mb-3 bg-dark text-white"
              >
                <Card.Body className="card-Body">
                  <Card.Title>
                    {article?.title && article.title.slice(0, 20)}
                  </Card.Title>
                  <Card.Text>
                    {article?.description && article.description.slice(0, 90)}
                    
                      <img
                    
                        src={article?.urlToImage?article.urlToImage:image}
                        alt="articles"
                        style={{ maxWidth: "200px" }}
                      />
                    
                  </Card.Text>

                  <a href={article?.url && article.url} target="_blank" className="text-warning">
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <CustomPagination 
       currentPage={currentPage}
       totalPages={totalPages}
       onPageChange = {onPageChange}
        handlePageClick ={handlePageClick}
      />
    </div>
  );
};

export default NewsList;
