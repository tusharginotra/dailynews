import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import './Stylesheet.css'
export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitaliseFirstLette = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
    document.title = `${this.capitaliseFirstLette(this.props.category)}-DailyNews`
  }
  
  async updateNews(val) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=46a8c67747104b7eb40f034fc05cf7b4&page=${this.state.page+val}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      
    });
    
  }
  async componentDidMount() {
   
    this.updateNews(0);
    
    if( window.localStorage.getItem("category"))
    {
      let category = window.localStorage.getItem("category")
      document.getElementById(category).style.backgroundColor = '';
      document.getElementById(this.props.category).style.backgroundColor = 'rgb(43, 218, 215)';
      window.localStorage.setItem("category",this.props.category);

    }
    else
    {
      document.getElementById(this.props.category).style.backgroundColor = 'rgb(43, 218, 215)';
      window.localStorage.setItem("category",this.props.category);
    }


  }
 
  handleNextClick = async () => {
   
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      this.setState({ page: this.state.page + 1 });
      
      this.updateNews(1);

    }
  }


    handlePreviousClick = async () => {
      
      if (this.state.page - 1 < 1) {

      }
      else {
        this.setState({ page: this.state.page - 1 });
        
        this.updateNews(-1);

      }
    }


    render() {

      return (
        <div className="container my-3">
          <h2 className='text-center primary font-xl'>Daily News- Top Headlines from <span >{this.capitaliseFirstLette(this.props.category)}</span> </h2>
          {this.state.loading && <Spinner />}
          <div className="row" >
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={element.url}>

                <NewsItem  title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Capture_2-647x363.png?9uP9rv33QPNTCpKpJphSBCPwauRu7uyI"} newsUrl={element.url}
                  author={element.author ? element.author : "DailyNews"} date={element.publishedAt} />

              </div>
            })}
          </div>
          <div className=" container d-flex justify-content-between fixed-bottom mb-5">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePreviousClick}> <i className="fa-solid fa-arrow-left"></i> Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / `${this.props.pageSize}`)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      )
    }
  }

export default News
