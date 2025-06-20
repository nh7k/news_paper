import React, { useEffect, useState } from 'react';
import Card2 from './Card2';
import './news.css';

const Newsapp2 = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]); // Initialize as an empty array
    const API_KEY ="2ff2f077c534485b81e85f5a325d9999";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles || []); // Set to empty array if articles is undefined
    };

    useEffect(() => {
        getData(); // Fetch initial data on mount
    }, []); // Only run once on mount

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const userInput =(event)=>{
      setSearch(event.target.value);
      getData();
    };

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission
        getData(); // Fetch data based on the current search term
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Contact Us</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link1 active my-20px " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Latest</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSearch} value={search}>
                            <input className="form-control me-2" type="text" placeholder="Search" onChange={handleInput} value={search} />
                            <button className="button-33 button-33-outline-success" type="submit" onClick={getData}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div>
                <div className="color">
                <div className="bg">
                <div className='catagoryBtn'>
                    <button id="btn-primary" type="submit" onClick={userInput} value="sports" onSubmit={handleSearch}>Sports</button>
                    <button id="btn-primary" type="button"  onClick={userInput} value="politics" onSubmit={handleSearch}>Politics</button>
                    <button id="btn-primary" type="submit"  onClick={userInput} value="health" onSubmit={handleSearch}>Health</button>
                    <button id="btn-primary" type="reset"  onClick={userInput} value="fitness" onSubmit={handleSearch}>Fitness</button>
                </div>
                </div>
                </div>
            </div>
            <div>
              {newsData? <Card2 data={newsData} /> : null}
                
     {/*return new Promise*/}
</div>
  </>
  )
}

export default Newsapp2