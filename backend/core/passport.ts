import passport from 'passport';
import { Strategy as LocalStrategy} from 'passport-local';
import { Strategy as JWTstrategy, ExtractJwt} from 'passport-jwt';
import { UserModel, UserModelInterface } from '../models/UserModel';
import { generatedHash } from '../utils/generathash';


passport.use(
    new LocalStrategy(
        async ( username, password, done): Promise<void> => {
            try {
                const user = await UserModel.findOne({$or: [{ email: username }, {username}]}).exec();
                if (!user) {
                    return done(null, false);
                } 
                if (user.confirmed && user.password === generatedHash(password + '8kdF9LEms67Z0Dffq')) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (error) {
                done(error, false);
            }
        },
    ),
);

passport.use(
    new JWTstrategy(
        {
            secretOrKey: '8kdF9LEms67Z0Dffq',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        (jwt_payload, done) => {
            UserModel.findOne({id: jwt_payload.sub}, (err: Error, user: UserModelInterface) => {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                    // or you could create a new account
                }
            });
        }
    )
)

passport.serializeUser<UserModelInterface, any>((user: UserModelInterface, done) => {
    // @ts-ignore
    done(null, user._id);
});

passport.deserializeUser<any, any>((id, done) => {
     UserModel.findById(id, (err: any, user: any) => {
        done(err, user);
    });
});

export {passport};