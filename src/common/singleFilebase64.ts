import fs from 'fs';
import path from 'path';

class base64{

    saveBase64Image(base64String, userId){
        const uploadDir = path.join(__dirname, '..', 'uploads', userId);
    
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
    
        const matches = base64String.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
            throw new Error('Invalid base64 image string');
        }
    
        const ext = matches[1];
        const base64Data = matches[2]; 
    
        const filePath = path.join(uploadDir, `image.${ext}`);
    
        fs.writeFileSync(filePath, base64Data, 'base64');
    
        return filePath;
    };
}


export default new base64()
