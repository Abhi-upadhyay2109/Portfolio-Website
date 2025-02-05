import React from 'react'
import './MyWork.css'
import theme_pattern from '/assets/theme_pattern.svg'
import mywork_data from './mywork_data'


function MyWork() {
  return (
    <div className='mywork' id='portfolio'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
  {mywork_data.map((Work, index) => {
    return (
      <div className="container-img" key={index}>
       
        <a href={Work.w_website_link} target="_self" rel="noopener noreferrer">
          <img src={Work.w_img} alt="Project Preview" className="work-img" />
           
        </a>
        
        
        <div className="github-link">
          <a href={Work.W_github_link} target="_self" rel="noopener noreferrer">
            🔗 View Code on GitHub
          </a>
        </div>
      </div>
    );
  })}
</div>

    </div>
  )
}

export default MyWork