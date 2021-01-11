  import passport from 'passport';
  import { Strategy as LocalStrategy} from 'passport-local';
import { UserModel } from '../models/UserModel';
import { generatedHash } from '../utils/generathash';

  
passport.use(
    new LocalStrategy(async ( username, password, done): Promise<void> => {
        try {
            const user = await UserModel.findOne({ $or: [{email: username}, {username}] }).exec();
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            } else {
                if (user.password === generatedHash(password + '8kdF9LEms67Z0Dffq')) {
                    return done(null, user);
                }                
            }
        } catch (error) {
            return done(null, false);
        }        
    })    
  );
export {passport};