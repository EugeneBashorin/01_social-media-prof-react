export function getColor(dependData, {itemDocx, itemPdf, itemMp3, itemPsd, itemEpb}){
    let newColor = "white";
    switch(dependData){
        case ".docx":
            newColor = itemDocx;
            break;
        case ".pdf":
            newColor = itemPdf;
            break;
        case ".mp3":
            newColor = itemMp3;
            break;   
        case ".psd":
            newColor = itemPsd;
            break;   
        case ".epb":
                newColor = itemEpb;
                break;                      
        default:
                newColor = itemDocx;
    }
    return newColor;
}