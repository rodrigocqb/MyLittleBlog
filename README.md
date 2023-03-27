# MyLittleBlog
MyLittleBlog is a simple blog where you can see posts, comments, users and their detailed info, using the https://jsonplaceholder.typicode.com/ API.

## Technologies
The following tools and frameworks were used in the construction of this app:
<p>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white" />
</p>

## How to run
1. Create a root project called MyLittleBlog
```bash
mkdir MyLittleBlog
```
2. Clone this repository
```bash
git clone https://github.com/rodrigocqb/MyLittleBlog
```
3. You can run the app as dev (just follow steps 4 and 5) or using Docker (follow step 6 onwards)
4. Install dependencies
```bash
npm i
```
5. Run the app
```bash
npm run dev
```
6. If you don't have docker and/or docker compose, please make sure you have both installed
7. Run docker compose
```bash
docker-compose up --build
```
8. If you have something running on port 80, please close the process so you can run the application. In case you had, just rerun docker compose up. A common reason for that is the apache process on Ubuntu. You can stop it by running:
```bash
sudo /etc/init.d/apache2 stop
```
9. After that, you can access the app through http://localhost:80/
