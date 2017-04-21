l/**
 * Created by Administrator on 2017/4/18 0018.
 */
const [http,io,mysql]=[require("http"),require("socket.io"),require('mysql')];

//http服务器
let server=http.createServer();
server.linsten(666);
//webSocket服务器
let wsServer=io.listen(server);
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'video'
})