koa2 and ej

mysql

安装步骤：
1. 下载网址(https://dev.mysql.com/downloads/mysql/), 正常安装
2. 打开刚刚解压的文件夹 C:\web\mysql-8.0.11 ，在该文件夹下创建 my.ini 配置文件，编辑 my.ini 配置以下基本信息

        [client]
        # 设置mysql客户端默认字符集
        default-character-set=utf8
        
        [mysqld]
        # 设置3306端口
        port = 3306
        # 设置mysql的安装目录
        basedir=C:\\web\\mysql-8.0.28-winx64
        # 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
        # datadir=C:\\web\\sqldata
        # 允许最大连接数
        max_connections=20
        # 服务端使用的字符集默认为8比特编码的latin1字符集
        character-set-server=utf8
        # 创建新表时将使用的默认存储引擎
        default-storage-engine=INNODB

 3. 以管理员身份打开 cmd 命令行工具，切换目录：cd C:\web\mysql-8.0.28-winx64\bin     >   .\mysqld.exe install    >   初始化数据库：mysqld --initialize --console  > 执行完成后，会输出 root 用户的初始默认密码   如：([Server] A temporary password is generated for root@localhost: GU_FH9d??UCB)

 4. fatal: unable to access 'https://github.com/RoberterSP/node-demo.git/': Failed to connect to github.com 
port 443 after 21117 ms: Timed out

解决办法：
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```


jest  (单元测试)

session 和 cookie

<!-- https://koa.bootcss.com/ -->

<!-- 
first step: npm install -g koa-generator   init koa
second: koa2 -e koa2-learn
third: 


 -->