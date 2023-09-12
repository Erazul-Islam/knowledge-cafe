import PropTypes from 'prop-types';
// import { BsBookmarksFill } from "react-icons/fa";
const Blog = ({blog,handleAdd,handleMark}) => {
    const {title,cover,author,author_image,post_date,reading_time,hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-56 mb-8 h-56' src={cover} alt={`cover picture of the title ${title} `} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-8 h-8 rounded-full'  src={author_image} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>
                            {author}
                        </h3>
                        <p className='text-2xl'>post-date: {post_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-6' onClick={()=> handleAdd(blog)}> click me </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={ () => handleMark(reading_time)} className='text-purple-400'>Mark as Read</button>
        </div>
    );
};
Blog.proptypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;