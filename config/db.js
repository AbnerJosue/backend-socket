import  mongoose from 'mongoose';
import env from 'dotenv'
env.config({path: '.env'});

const connetion = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {});

        console.log('🚀 🚀 🚀 Base de datos corriendo');
    } catch (e) {
       if(e instanceof Error) {
        console.log(e.message)
        process.exit(1);
       }
    }
}

export default connetion;