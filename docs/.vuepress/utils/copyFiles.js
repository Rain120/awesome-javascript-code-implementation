const fs = require('fs');
const path = require('path');
const child_process = require('child_process')

const defaultSourceDir = path.join(__dirname, '../../../', 'src');
const defaultTargetDir = path.join(__dirname, '../../', 'test');

const copyFile = function(srcPath = defaultSourceDir, tarPath = defaultTargetDir, cb) {
  let rs = fs.createReadStream(srcPath);
  rs.on('error', function(err) {
    if (err) {
      console.log('read error', srcPath);
    }
    cb && cb(err);
  });

  let ws = fs.createWriteStream(tarPath);
  ws.on('error', function(err) {
    if (err) {
      console.log('write error', tarPath);
    }
    cb && cb(err);
  });
  ws.on('close', function(ex) {
    cb && cb(ex);
  });

  rs.pipe(ws);
};

const copyFolder = function(srcDir = defaultSourceDir, tarDir = defaultTargetDir, filters = [], cb) {
  fs.readdir(srcDir, function(err, files) {
    let count = 0;
    let checkEnd = function() {
      ++count == files.length && cb && cb();
    };

    if (err) {
      checkEnd();
      return;
    }

    files.forEach(function(file) {
      let srcPath = path.join(srcDir, file);
      let tarPath = path.join(tarDir, file);

      fs.stat(srcPath, function(err, stats) {
        if (stats.isDirectory()) {
          console.log('mkdir', tarPath);
          fs.mkdir(tarPath, function(err) {
            if (err) {
              console.log(err);
              return;
            }

            copyFolder(srcPath, tarPath, checkEnd);
          });
        } else {
          copyFile(srcPath, tarPath, checkEnd);
        }
      });
    });

    files.length === 0 && cb && cb();
  });
};

const [sourceDir, targetDir, ...rest] = process.argv.slice(2);

function copyFolder1(sourceDir = defaultSourceDir, targetDir = defaultTargetDir, filter = []) {

    function createDir (dirPath) {
        fs.mkdirSync(dirPath);      
    }

    if (fs.existsSync(sourceDir)) {
        if (!fs.existsSync(targetDir)) {
            createDir(targetDir);
        }
        fs.readdir(srcPath, function (err, files) {
            if (err) {
                return;
            }
            files.forEach(filename => {

            });
        });
        child_process.spawn('cp', ['-r', sourceDir, targetDir]);
    } else {
        console.log('do not exist path: ', sourceDir);
    }
}


console.log('\033[42;30m Start \033[40;32m Start Copy\033[0m');
copyFolder(sourceDir, targetDir, ['.ts']);
console.log('\033[42;30m DONE \033[40;32m Copied successfully\033[0m');
