
const fs = require('fs');
const dir = './files';
var count = 0;

fs.readdir(dir, (err, files) => {
  count = files.length;
  console.log(count);
});

function getFilesizeInBytes(dir) {
  const stats = fs.statSync(dir);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}


const files = fs.readdirSync(dir)


fs.open('summary.txt', 'w', function(err, file){

  for (const file of files) {
    fs.appendFile('summary.txt',file + ' \r', function(err) {

      if(err) throw err;

    })

    }

    if(err) throw err;

})

const requireFile = async () => {
   const data = fs.readFileSync('./files/a.txt', 'utf-8');
   const len = data.length;
   return len;
};
requireFile().then(res => console.log(res)).catch(err => {
   console.log('some error occured');
})


fs.readFile('./files/a.txt', function (err, data) {
  if (err) throw err;
  if(data.includes('Ipsum')){
   console.log(data)
  }
});

const archivosConPalabra = []

for (const file of files) {

  

}





