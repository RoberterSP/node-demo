1. git commit, have not the correct access right
 <1> cat ~/.ssh/id_rsa.pub       
 copy this key and go to github.com and under the Settings  > Deploy keys, add your public key.
 then git push -u origin master


 2. 新建 koa 流程
    1. koa2 -e project-name
    2. cnpm i cross-env -D (用于设置环境变量，同时项目的目录要放到src 下面，符合用户的操作习惯，cross-env  NODE_ENV=dev)