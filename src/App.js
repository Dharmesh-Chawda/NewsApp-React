import React, { Component, useState, useEffect } from 'react';


const App = () => {
  const [news, setNews] = useState([]);
  const [searchQuery , setsearchQuery ] = useState("react");
  const [url , setUrl ] = useState("http://hn.algolia.com/api/v1/search?query=react");
  const [loading , setLoading ] = useState(true);

  const fetchNews = () => {
    setLoading(true)
    fetch(url)
    .then(result => result.json())
    // .then(data => console.log(data))
    .then(data => (setNews(data.hits), setLoading(false)))
    .catch(error => console.log(error));

  };

    useEffect (() =>
    {
      fetchNews();
    },[url] );

    const handleChange = (e) => 
    {
      setsearchQuery(e.target.value);
    };

    const handleSubmit = (e) => 
    {
      e.preventDefault();
      setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
    };

  const showSearchform = () => (
    <form onSubmit= {handleSubmit}>
      <input type="text" value ={searchQuery} onChange = {handleChange}/>
      <button>Search</button>
    </form> 
  );

  const showLoading =() => (loading ? <h2>Loading...</h2>: "");

  const showNews = () => (
    news.map((n,i) => (
      <li key ={i}>{n.title}</li>
    ))
  );

  return ( 
      <div style ={{ marginLeft:'50px'}}>
      <h2 >News App</h2>
        {showLoading()}
        {showSearchform()}
        {showNews()}
     </div>
  );
};

export default App;


// COUNTER USING HOOKS

// const App = () => {
//   const [counter, setCount] = useState(0);

//   const increment = () => {
//     setCount(counter +1);
//   };

//   useEffect (() =>
//   {
//     document.title = `Clicked ${counter} times`;
//   }); 

//   return (
//      <div>
//       <h2>Counter App</h2>
//       <button onClick= {increment}>Clicked {counter} times</button>
//      </div>
//   );
// };
// export default App;

//_________________________________________________________________
// COUNTER USING CLASS

// class App extends Component 
// {
//   state =
//   {
//     counter: 0
//   };

//   increment = () => 
//   {
//     this.setState({
//       counter : this.state.counter +1
//     });
//   };

//   componentDidMount()
//   {
//     document.title = `Clicked ${this.state.counter} times`;
//   }
//   componentDidUpdate()
//   {
//     document.title = `Clicked ${this.state.counter} times`;
//   }

//   render() 
//   {
//     return  (
//       <div className="App">
//         <h2>Counter App</h2>
//         <button onClick= {this.increment}>Clicked {this.state.counter} times</button>
//       </div>
//     );
//   };
// }

// export default App;
