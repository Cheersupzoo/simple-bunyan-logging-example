var bunyan = require('bunyan');
const createESStream = require('bunyan-elasticsearch-bulk');

var log = bunyan.createLogger({
    name: 'test',
    /* streams: [{
        stream: process.stderr
        // ปริ้นออกมาใน shell เหมือนก่อนหน้า
    }, {
        path: './log/foo.log',
        // เซฟลงในไฟล์ .log 
        // ต้องสร้าง โฟลเดอร์ และไฟล์ .log ก่อนด้วย
    }, {
        level: 'debug',
        stream: createESStream({
            indexPattern: '[foo-]YYYY.MM.DD',
            node: 'http://localhost:9200'
        })
        // เซฟไปที่เซิฟเวอร์ elasticsearch และเก็บเฉพาะระดับ debug **ต้องลง module เพิ่ม
    }] */
});
log.info('hi bug');
log.warn('This is warning');
log.error('This is error');
log.fatal('This is fatal');
log.trace('This is trace');
log.info({source_ip:"127.0.0.1",des_ip:"192.168.0.2"}, 'hi bug');