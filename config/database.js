if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://mongodb://<dbuser>:<dbpassword>@ds127634.mlab.com:27634/mfirst-app'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}