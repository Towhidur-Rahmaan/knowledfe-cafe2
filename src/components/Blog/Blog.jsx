import PropTypes from 'prop-types';
import { BsBookmarkHeart } from "react-icons/bs";
const Blog = ({ blog, handleAddToBookMark,handleMarkAsRead}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtag } = blog;

    return (
        <div className='mb-20'>
          <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`}/> 
          <div className=' flex justify-between'>
            <div className='flex'>
                <img className='w-14 rounded-4xl' src={author_img} alt="" />
            <div className='ml-6'>
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
            </div>
            </div>
            
            <div className=''>
            <span>{reading_time} read</span>
            <button  onClick={() => handleAddToBookMark(blog)}
            className='ml-2 text-red-600 text-2xl'><BsBookmarkHeart></BsBookmarkHeart></button>
            </div>

          </div>
          <h2 className="text-4xl">{title}</h2> 
          <div>
            {
                hashtag.map(hash => <span> <a href="">{hash}</a> </span>)
            }
          </div>
          <button onClick={() => handleMarkAsRead(reading_time)}
          className='text-purple-800 font-bold underline'>Mark As Read</button>
          
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired 
}
export default Blog;