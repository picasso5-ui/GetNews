import { useState, useEffect } from "react";
import Hero from "./components/Hero"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [category,setCategory] = useState("general")
  const [currentPage,setCurrentPage] = useState(1)
  const [articles, setArticle] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [searchQuery,setsearchQuery] = useState("")
  useEffect(() => {
    setIsLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8d233ce53f7a461cb5f7494755c15a4c`;

    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=8d233ce53f7a461cb5f7494755c15a4c`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error, "error occurred");
        setIsLoading(false);
      });
  }, [category, searchQuery]);


  const handleSearchInputChange = (event) => {
    setsearchQuery(event.target.value);
  };

  return (
    <div className="App">
        <Header
        searchQuery={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
        setCategory={setCategory}

         />
        <Hero 
        category={category}
         setCategory={setCategory}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         articles={articles}
         loading={loading}
         
         />
        <Footer />
    </div>
  )
}

export default App;
