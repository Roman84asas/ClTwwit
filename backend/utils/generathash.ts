import crypto from 'crypto';

export const generatedHash = (value: string): string => {
    return crypto.createHash('md5').update(value).digest('hex');
}