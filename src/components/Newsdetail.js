import React from 'react'


export default function Newsdetail({item}) {
   
  return (
    <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">

                                <span class="color-aqua"><a href="blog-category-01.html" title="">Lifestyle</a></span>

                                <h1>{item}</h1>

                                <div class="blog-meta big-meta text-muted">
                                    <small>21 July,2017 </small>
                                    <small>by Jessica</small>
                                </div>
                            </div>

                            <div class="single-post-media">
                                <img src="upload/menu_08.jpg" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    {item}
                                </div>

                                <img src="upload/menu_05.jpg" alt="" class="img-fluid img-fullwidth"/>

                                
                            </div>     

                            <hr class="invis1"/>

                            
                        </div>
                    </div>

                   
                </div>
            </div>
  </section>
  )
}
