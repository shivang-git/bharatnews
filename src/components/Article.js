import React from 'react'

function Article(props) {
 
	let updateNews=async()=>{
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=2ab57204760542da99ff4e59ce2e9e2b&page=${page}&pageSize=${props.pageSize}`;
		let response = await fetch(url);
		let data = await response.json();
		
	  }
	  useEffect(() => {
		updateNews()
		// eslint-disable-next-line
	   },[])
  return (
	
    <div className="container">
    <div className="row">
      <div className="col col-md-8">
    <article>
						<img loading="lazy" decoding="async" src="images/post/post-4.jpg" alt="Post Thumbnail" className="w-100"/>
						<ul className="post-meta mb-2 mt-4">
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{marginRight:"5px",marginTop:"-4px"}} className="text-dark" viewBox="0 0 16 16">
									<path d="M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
									<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
									<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
								</svg> <span>29 May, 2021</span>
							</li>
						</ul>
						<h1 className="my-3">Top 7 Reasons to Visit Denver this Summer</h1>
						
						<div className="content text-left">
							<hr />
							<h2 id="paragraph">Paragraph</h2>
							<p>{props.content}</p>
							

							<hr/>
							
						</div>
					</article>
          </div>
          </div>
          </div>
  )
}

export default Article