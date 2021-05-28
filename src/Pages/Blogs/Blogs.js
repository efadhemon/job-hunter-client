import React from 'react';
import './Blogs.css';
import Blog1 from '../../images/blog/1.jpg';
import Blog2 from '../../images/blog/2.jpg';
import Blog3 from '../../images/blog/3.jpg';

const blogData = [
    {
        id: 1,
        title: 'JavaScript Basic',
        date: '4 january 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
        tags: 'JavaScript',
        image: Blog1
    }, {
        id: 2,
        title: 'React Basic',
        date: '4 january 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
        tags: 'JavaScript',
        image: Blog2
    }, {
        id: 3,
        title: 'Node Basic',
        date: '4 january 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
        tags: 'JavaScript',
        image: Blog3
    }
]

const Blogs = () => {
    return (

        <section id="blog" className="blog section">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Latest Blog</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        blogData.map(blog => <div key={blog.id} className="blog-box padd-15">
                            <div className="blog-item shadow-dark">
                                <div className="blog-img">
                                    <img src={blog.image} alt="blog" />
                                    <div className="blog-date">
                                        {blog.date}
                                    </div>
                                </div>
                                <div className="blog-info">
                                    <h4 className="blog-title">{blog.title}</h4>
                                    <p className="blog-description">{blog.description}</p>
                                    <p className="blog-tags">Tags : <span>{blog.tags}</span></p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </section>

    );
};

export default Blogs;