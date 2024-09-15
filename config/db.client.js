import mongoose from 'mongoose';

export const DBConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/vayyar-test');
    } catch (err) {
        console.log(err);
    }
}
