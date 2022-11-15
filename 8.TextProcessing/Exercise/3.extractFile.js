function extractFile(path) {

    const dirs = path.split('\\');
    const file = dirs.pop();
    const lastComma = file.lastIndexOf('.');
    //substring - както със slice реже и прави копие на отрязаното
    const fileName = file.substring(0, lastComma);
    const extention = file.substring(lastComma + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extention}`);

}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')