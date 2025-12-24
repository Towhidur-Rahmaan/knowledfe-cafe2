import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className='md:w-1/3 bg-slate-200 ml-4'>
            <div>
                <h3 className="text-4xl">Reading Time :{readingTime}</h3>
            </div>

            <h2 className='text-3xl text-center'>Bookmarked Blogs  : {bookmarks.length}</h2>
            {
                bookmarks.map (bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;