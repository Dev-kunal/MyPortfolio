import "./blog.css"
import { blogsData } from "../../utils";

export const Blogs = () => {
    return (
        <section id="blogs" className='blogs'>
            <div className='faint-heading'>&lt; Blogs /&gt;</div>
            <div className='blog-list'>
                {blogsData.map(({ id, date, title, url }) => (
                    <a key={id} className='blog-row' href={url} target='_blank' rel='noopener noreferrer'>
                        <span className='blog-date'>{date}</span>
                        <span className='blog-title'>{title}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};
