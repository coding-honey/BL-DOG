프로젝트 : BL-DOG
- 블록체인을 이용한 동물 기록관리 웹 서비스

팀 : 블독주인
- 1591003 김정문 / 웹페이지 구성 및 DB 연동
- 1591042 김하경 / 웹서버 REST API 및 프론트단 퍼블리싱
- 1492033 이준영 / Block-Chain 및 AWS 환경
- 1492035 정동헌 / Block-Chain 및 AWS 환경

Directory 설명
- lib\logic.js , models\org.example.mynetwork.cto , permissions.acl , queries.qry
js, cto, acl, qry 파일을 기반으로 배포가능한 아카이브 파일 tutorial-network@[version].bna 생성.
- package.json
Version, Script, Dependency 관리
- networkadmin.card
블록체인 네트워크에 연결하는데 필요한 모든 정보를 제공.
- bldog-app/
프론트엔드


////////////////////////////////////////////////////////////////////////////////////


﻿< Composer 개발환경 셋팅 >

# Composer용 개발환경 정리된 사이트
https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html#ubuntu

# Ubuntu 16.04.5 LTS (Xenial Xerus) .iso 다운로드
http://releases.ubuntu.com/xenial/ubuntu-16.04.5-desktop-amd64.iso

# VMware Workstation 15 Player 다운로드
https://www.vmware.com/go/getplayer-win
enhanced keyboard 체크

# VMware 15에 Ubuntu 설치할 때 참고
https://recipes4dev.tistory.com/111

# composer 설치 전 요구 사항 ( 사이트 참고 )
https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html#ubuntu

sudo apt-get install curl
sudo apt-get update
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
chmod u+x prereqs-ubuntu.sh
./prereqs-ubuntu.sh
ㅡㅡㅡㅡ재부팅ㅡㅡㅡㅡ

# Composer 설치
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nodejs
sudo apt-get install npm
ㅡㅡㅡㅡ재부팅ㅡㅡㅡㅡ

# Installing the development environment ( 참고 )
https://hyperledger.github.io/composer/latest/installing/development-tools.html

sudo apt-get update
sudo apt-get upgrade
npm install -g composer-cli
npm install -g composer-rest-server
npm install -g generator-hyperledger-composer
npm install -g yo
npm install -g composer-playground

mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz

cd ~/fabric-dev-servers
export FABRIC_VERSION=hlfv12
./downloadFabric.sh

# ★시작할 때★
cd ~/fabric-dev-servers
export FABRIC_VERSION=hlfv12
./startFabric.sh
./createPeerAdminCard.sh

# ★종료할 때★
cd ~/fabric-dev-servers
./stopFabric.sh
./teardownFabric.sh
-----------------------------------------------------------------
#Angular test
npm install -g @angular/cli

(Angular 폴더로 이동)
npm install
npm start
------------------------------------------------------------------
# Composer 튜토리얼 실습
https://d2fault.github.io/2018/05/02/20180502-hyperledger-composer-tutorial/


////////////////////////////////////////////////////////////////////////////////////


#< How To Start >
~/BL-DOG/ 라는 가정하에 작성했습니다.

# Fabric Start
cd ~/BL-DOG/fabric-dev-servers
export FABRIC_VERSION=hlfv12
./startFabric.sh
./createPeerAdminCard.sh

# Network Install, Start
cd ~/BL-DOG
composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.1.bna
composer network start --networkName tutorial-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

# Composer Rest Server
// localhost:3000으로 REST Server 접근
cd ~/BL-DOG
composer-rest-server
admin@tutorial-network
never use namespaces
N
N
Y
(공백)
Y
N

# Angular Install, Start
// localhost:4200으로 홈페이지 접근
cd ~/BL-DOG/bldog-app
npm install
npm start

# ATLAS - Cluster 생성, 작업
https://www.mongodb.com/cloud/atlas 로그인 후 Clusters 생성

@ ATLAS - Cluster
collections 안에 
database와 collection 추가
insert document
@ SECURITY - Network Access
IP Whitelist - ADD IP ADDRESS 추가
@ server.js 작성
connection_url, database, collection 이름 정의 (1번 database, collection이름과 동일)
connection_url : cluster - connection - connect your application - connection String Only 복사 

# DB 연동 // mongoDB
cd ~/BL-DOG/bldog-app/dbService
nodejs server.js

# Fabric Stop
cd ~/BL-DOG/fabric-dev-servers
./stopFabric.sh
