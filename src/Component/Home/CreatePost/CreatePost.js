import React from 'react';
import { Link } from 'react-router-dom';

const CreatePost = () => {
    return (
        <div className='bg-slate-50 '>
            <div className='py-3 mx-48'>
                <hr />
            </div>
            <div className='flex text-lg font-bold mx-48 gap-5 py-3 cursor-pointer'>
                <Link className='hover:text-blue-500' to='/post'>Posts</Link>
                <Link className='hover:text-blue-500' to='/photos   '>Photos</Link>
            </div>
        </div>
    );
};

export default CreatePost;