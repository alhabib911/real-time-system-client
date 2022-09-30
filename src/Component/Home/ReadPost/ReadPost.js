import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Modal } from 'semantic-ui-react';
import ProfilePhoto from '../../../Image/ProfilePhotos.jpg'
import { IoIosImages } from 'react-icons/io';
import { RiCloseCircleLine } from 'react-icons/ri';



function exampleReducer(state, action) {
    switch (action.type) {
        case 'close':
            return { open: false }
        case 'open':
            return { open: true, size: action.size }
        default:
            throw new Error('Unsupported action...')
    }
}


const ReadPost = () => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        size: undefined,
    })
    const { open, size } = state
    return (
        <div className='flex gap-10 mx-36 mt-5'>
            <div className='flex justify-between w-2/5 h-96 bg-slate-50 px-5 py-5 rounded-lg'>
                <h2 className='text-2xl font-extrabold'>Photos</h2>
                <Link className='text-lg text-blue-500 font-semibold' to='/photos'>All Photos</Link>
            </div>
            <div className='w-3/5 rounded-lg'>
                <div className='bg-slate-50 px-5 py-5'>
                    <div className='flex gap-5'>
                        <div>
                            <img className='rounded-full w-12' src={ProfilePhoto} alt="" />
                        </div>
                        <div className='pt-2 bg-white rounded-lg text-lg'>
                            <Input className='w-[550px] pl-3' transparent placeholder='What do you want talk about?' onClick={() => dispatch({ type: 'open', size: 'tiny' })} />

                            <Modal
                                size={size}
                                open={open}
                                onClose={() => dispatch({ type: 'close' })}
                            >
                                <div className='flex justify-between mx-10 py-2'>
                                    <h1 className='text-2xl text-gray-500 font-extrabold pt-5'>Create Post</h1>
                                    <div className='text-right'>
                                        <button className='text-4xl text-red-500 pt-5' onClick={() => dispatch({ type: 'close' })}>
                                            <RiCloseCircleLine />
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <Modal.Content >
                                    <Input transparent placeholder='What do you want talk about?' />

                                </Modal.Content>
                                <Modal.Actions className='flex justify-center'>
                                    <Button primary>
                                        <input type="submit" value="Post" />
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                        </div>
                    </div>
                    <div className='py-5'>
                        <hr />
                    </div>
                    <div className='flex items-center gap-3 '>
                        <div className='text-green-600 text-3xl'>
                            <IoIosImages />
                        </div>
                        <div className='text-gray-400 text-xl'>
                            <button onClick={() => dispatch({ type: 'open', size: 'tiny' })}>Add Photos</button>
                        </div>
                    </div>
                </div>
                <div className=' bg-slate-50 px-5 py-5 rounded-lg mt-5'>
                    habib
                </div>
            </div>
        </div>
    );
};

export default ReadPost;