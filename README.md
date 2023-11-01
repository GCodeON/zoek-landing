# Set Node Version
~~~shell
$ nvm use 16.18.0
~~~

## Running the sample

### Development
1. Build the application
~~~shell
$ npm install
~~~

3. Run the application
~~~shell
$ npm run dev
~~~

4. Go to [localhost:3000](http://localhost:3000)

5. View Database Records
~~~shell
$ npx prisma studio
~~~

### Production
1. Build the application
~~~shell
$ npm install

$ npm build
~~~

2. Run the application
~~~shell
$ npm start
~~~