
type Post = {
  "userId": number,
  "id": number,
  "title": String,
  "body": String
}

type User =  {
    "id": number,
    "name": String,
    "username": String,
    "email": String,
    "address": {
      "street": String,
      "suite": String,
      "city": String,
      "zipcode": String,
      "geo": {
        "lat": String,
        "lng": String
      }
    },
    "phone": String,
    "website": String,
    "company": {
      "name": String,
      "catchPhrase": String,
      "bs": String
    }
  }