import React from 'react';
// import { Button } from 'semantic-ui-react';
import ProfilePhoto from '../../../Image/ProfilePhotos.jpg'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import CreatePost from '../CreatePost/CreatePost';

const Profile = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <div className='bg-slate-50 shadow-sm px-3 py-3 flex justify-between'>
                <div className='mx-36 py-3 flex'>
                    <div>
                        <img className='rounded-full' src={ProfilePhoto} alt="" />
                    </div>
                    <div className='pt-10 pl-4'>
                        <h1 className='text-4xl font-extrabold '>Abdullah Al Habib</h1>
                        <div>
                            <div class="flex items-center space-x-2 text-base">
                                <h4 class="font-semibold text-slate-900">Photos</h4>
                                <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
                            </div>
                            <div class="mt-3 flex -space-x-2 overflow-hidden">
                                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={ProfilePhoto} alt="{user.handle}" />
                                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={ProfilePhoto} alt="{user.handle}" />
                                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={ProfilePhoto} alt="{user.handle}" />
                                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={ProfilePhoto} alt="{user.handle}" />
                            </div>
                            <div class="mt-3 text-sm font-medium">
                                <a href="#" class="text-blue-500">+ 198 others</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-28 mr-44'>
                    <div>
                        <Modal
                            basic
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                            size='small'
                            trigger={<Button primary>Edit Profile</Button>}
                        >
                            <Header icon>
                                <Icon name='archive' />
                                Archive Old Messages
                            </Header>
                            <Modal.Content>
                                <p>
                                    Your inbox is getting full, would you like us to enable automatic
                                    archiving of old messages?
                                </p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='green' inverted onClick={() => setOpen(false)}>
                                    <Icon name='checkmark' /> Save Change
                                </Button>
                                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                                    <Icon name='remove' /> Cancel
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </div>
                </div>
            </div>
            <div>
                <CreatePost/>
            </div>
        </div>
    );
};

export default Profile;