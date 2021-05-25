const INITIAL_STATE = {
    sections: [
        {
            title: 'fruits',
            imageUrl: 'https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_2100,h_1427,c_scale/v1588088840/iStock-467652436.jpg',
            id: 1,
            linkUrl: 'shop/fruit'
        },
        {
            title: 'vegetables',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg',
            id: 2,
            linkUrl: 'shop/vegetable'
        },
        {
            title: 'flowers',
            imageUrl: 'https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg',
            id: 3,
            linkUrl: 'shop/flower'
        },
        {
            title: 'kitchen',
            imageUrl: 'https://www.cleanipedia.com/images/v2/6923cead8af85aa03ba455009c0fca15-1800w-1200h.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/kitchen'
        },
        {
            title: 'garden',
            imageUrl: 'https://ransoms.je/wp-content/uploads/2021/02/gardening-tools1.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/garden'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
