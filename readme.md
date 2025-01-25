# mongodb(本体)のdockerイメージインストール
[はじめてのMongoDB with Docker | zenn](https://zenn.dev/optimisuke/articles/d6b248d45f4f5c) 
[MongoDBとMongo-expressをdocker-composeで立ち上げる | ゆっくりキカイガクシュウ](https://laid-back-scientist.com/docker-mongo) 
[https://qiita.com/mistolteen/items/ce38db7981cc2fe7821a | qiita](https://qiita.com/mistolteen/items/ce38db7981cc2fe7821a) 
[mongo - Official Image | Docker Hub](https://hub.docker.com/_/mongo) 

# mongosh(CLIクライアント)インストール
[mongoshのインストール - MongoDB Shell](https://www.mongodb.com/ja-jp/docs/mongodb-shell/install/)

## `mongosh`で`dockerのmongodb`に接続する
```sh
mongosh "mongodb://root:example@localhost:27017/"
```
- `docker`を構成するネットワークを介して接続するため`mongo:27017`ではなく`localhost:27017`に接続する。

## `mongosh`コマンド
|用途|コマンド|
|-|-|
|db一覧|show dbs|
|dbを切り替える|use `<db_name>`|
|コレクション一覧|show collections|
|コレクション作成|db.createCollection(`<collection_name>`)|
|コレクション削除|db.`<collection_name>`.drop()|
|ドキュメントを取得|db.`<collection_name>`.find()|
|ドキュメントを1件追加|db.`<collection_name>`.insertOne(`{key: value}`)|
|ドキュメントを複数件追加|db.`<collection_name>`.insertMany(`[{key: value}]`)|
|db削除|db.dropDatabase()|
