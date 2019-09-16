import React from 'react'
import ReactPageScroller from "react-page-scroller"
import nam from './nam.jpg'
import './App.css'

let fakeData = {
  "pagination": {
    "previous": null,
    "next": "https://api.venmo.com/v1/stories/target-or-actor/1363821172097024895?before_id=2812010873105678986&limit=50"
  },
  "data": [
    {
      "date_updated": "2019-09-10T21:11:37",
      "transfer": null,
      "app": {
        "description": "Venmo for iPhone",
        "site_url": null,
        "image_url": "https://venmo.s3.amazonaws.com/oauth/no-image-100x100.png",
        "id": 1,
        "name": "Venmo for iPhone"
      },
      "comments": {
        "count": 0,
        "data": []
      },
      "payment": {
        "status": "settled",
        "id": "2830164488055947845",
        "date_authorized": null,
        "merchant_split_purchase": null,
        "date_completed": "2019-09-10T21:11:37",
        "target": {
          "merchant": null,
          "redeemable_target": null,
          "phone": null,
          "user": {
            "username": "Kabrina-Do",
            "last_name": "Do",
            "friends_count": null,
            "is_group": false,
            "is_active": true,
            "trust_request": null,
            "phone": null,
            "profile_picture_url": "https://venmopics.appspot.com/u/v3/s/68589cd7-d843-41c6-8f7d-a327798b31e7",
            "is_blocked": false,
            "id": "1471756334268416909",
            "identity": null,
            "date_joined": "2014-07-24T15:17:07",
            "about": " ",
            "display_name": "Kabrina Do",
            "first_name": "Kabrina",
            "friend_status": "friend",
            "email": null
          },
          "type": "user",
          "email": null
        },
        "audience": "public",
        "actor": {
          "username": "squishguin",
          "last_name": "Luu",
          "friends_count": null,
          "is_group": false,
          "is_active": true,
          "trust_request": null,
          "phone": null,
          "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/c410ffab-f09c-4073-9866-f478f2f85534",
          "is_blocked": false,
          "id": "1363821172097024895",
          "identity": null,
          "date_joined": "2014-02-25T17:09:13",
          "about": " ",
          "display_name": "Daniel Luu",
          "first_name": "Daniel",
          "friend_status": "not_friend",
          "email": null
        },
        "note": "Coachella Deposit",
        "amount": 233.85,
        "action": "charge",
        "date_created": "2019-09-10T21:11:37",
        "date_reminded": null
      },
      "note": "Coachella Deposit",
      "audience": "public",
      "likes": {
        "count": 0,
        "data": []
      },
      "mentions": {
        "count": 0,
        "data": []
      },
      "date_created": "2019-09-10T21:11:37",
      "type": "payment",
      "id": "2830164488349549260",
      "authorization": null
    },
    {
      "date_updated": "2019-09-10T20:12:46",
      "transfer": null,
      "app": {
        "description": "Venmo for iPhone",
        "site_url": null,
        "image_url": "https://venmo.s3.amazonaws.com/oauth/no-image-100x100.png",
        "id": 1,
        "name": "Venmo for iPhone"
      },
      "comments": {
        "count": 0,
        "data": []
      },
      "payment": {
        "status": "settled",
        "id": "2830134864836034859",
        "date_authorized": null,
        "merchant_split_purchase": null,
        "date_completed": "2019-09-10T20:12:46",
        "target": {
          "merchant": null,
          "redeemable_target": null,
          "phone": null,
          "user": {
            "username": "miotchh",
            "last_name": "Nguyen",
            "friends_count": null,
            "is_group": false,
            "is_active": true,
            "trust_request": null,
            "phone": null,
            "profile_picture_url": "https://venmopics.appspot.com/u/v1/f/9e0aff83-aaf9-496e-b9d6-f55164157d91",
            "is_blocked": false,
            "id": "1916391431077888320",
            "identity": null,
            "date_joined": "2016-03-29T02:47:41",
            "about": " ",
            "display_name": "Mitchell Nguyen",
            "first_name": "Mitchell",
            "friend_status": "friend",
            "email": null
          },
          "type": "user",
          "email": null
        },
        "audience": "public",
        "actor": {
          "username": "squishguin",
          "last_name": "Luu",
          "friends_count": null,
          "is_group": false,
          "is_active": true,
          "trust_request": null,
          "phone": null,
          "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/c410ffab-f09c-4073-9866-f478f2f85534",
          "is_blocked": false,
          "id": "1363821172097024895",
          "identity": null,
          "date_joined": "2014-02-25T17:09:13",
          "about": " ",
          "display_name": "Daniel Luu",
          "first_name": "Daniel",
          "friend_status": "not_friend",
          "email": null
        },
        "note": "Coachella Deposit",
        "amount": 233.85,
        "action": "charge",
        "date_created": "2019-09-10T20:12:46",
        "date_reminded": null
      },
      "note": "Coachella Deposit",
      "audience": "public",
      "likes": {
        "count": 0,
        "data": []
      },
      "mentions": {
        "count": 0,
        "data": []
      },
      "date_created": "2019-09-10T20:12:46",
      "type": "payment",
      "id": "2830134865196745234",
      "authorization": null
    },
    {
      "date_updated": "2019-09-09T18:31:20",
      "transfer": null,
      "app": {
        "description": "Venmo for iPhone",
        "site_url": null,
        "image_url": "https://venmo.s3.amazonaws.com/oauth/no-image-100x100.png",
        "id": 1,
        "name": "Venmo for iPhone"
      },
      "comments": {
        "count": 0,
        "data": []
      },
      "payment": {
        "status": "settled",
        "id": "2829359035088634635",
        "date_authorized": null,
        "merchant_split_purchase": null,
        "date_completed": "2019-09-09T18:31:20",
        "target": {
          "merchant": null,
          "redeemable_target": null,
          "phone": null,
          "user": {
            "username": "Kent-Tong",
            "last_name": "Tong",
            "friends_count": null,
            "is_group": false,
            "is_active": true,
            "trust_request": null,
            "phone": null,
            "profile_picture_url": "https://graph.facebook.com/v2.10/743063329/picture?type=square",
            "is_blocked": false,
            "id": "1372125524918272262",
            "identity": null,
            "date_joined": "2014-03-09T04:08:29",
            "about": " ",
            "display_name": "Kent Tong",
            "first_name": "Kent",
            "friend_status": "friend",
            "email": null
          },
          "type": "user",
          "email": null
        },
        "audience": "private",
        "actor": {
          "username": "squishguin",
          "last_name": "Luu",
          "friends_count": null,
          "is_group": false,
          "is_active": true,
          "trust_request": null,
          "phone": null,
          "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/c410ffab-f09c-4073-9866-f478f2f85534",
          "is_blocked": false,
          "id": "1363821172097024895",
          "identity": null,
          "date_joined": "2014-02-25T17:09:13",
          "about": " ",
          "display_name": "Daniel Luu",
          "first_name": "Daniel",
          "friend_status": "not_friend",
          "email": null
        },
        "note": "Crawfish",
        "amount": 42.24,
        "action": "charge",
        "date_created": "2019-09-09T18:31:20",
        "date_reminded": null
      },
      "note": "Crawfish",
      "audience": "private",
      "likes": {
        "count": 0,
        "data": []
      },
      "mentions": {
        "count": 0,
        "data": []
      },
      "date_created": "2019-09-09T18:31:20",
      "type": "payment",
      "id": "2829359035331903796",
      "authorization": null
    },
    {
      "date_updated": "2019-09-09T18:31:17",
      "transfer": null,
      "app": {
        "description": "Venmo for iPhone",
        "site_url": null,
        "image_url": "https://venmo.s3.amazonaws.com/oauth/no-image-100x100.png",
        "id": 1,
        "name": "Venmo for iPhone"
      },
      "comments": {
        "count": 0,
        "data": []
      },
      "payment": {
        "status": "settled",
        "id": "2829359006265377083",
        "date_authorized": null,
        "merchant_split_purchase": null,
        "date_completed": "2019-09-09T18:31:17",
        "target": {
          "merchant": null,
          "redeemable_target": null,
          "phone": null,
          "user": {
            "username": "Kent-Tong",
            "last_name": "Tong",
            "friends_count": null,
            "is_group": false,
            "is_active": true,
            "trust_request": null,
            "phone": null,
            "profile_picture_url": "https://graph.facebook.com/v2.10/743063329/picture?type=square",
            "is_blocked": false,
            "id": "1372125524918272262",
            "identity": null,
            "date_joined": "2014-03-09T04:08:29",
            "about": " ",
            "display_name": "Kent Tong",
            "first_name": "Kent",
            "friend_status": "friend",
            "email": null
          },
          "type": "user",
          "email": null
        },
        "audience": "private",
        "actor": {
          "username": "squishguin",
          "last_name": "Luu",
          "friends_count": null,
          "is_group": false,
          "is_active": true,
          "trust_request": null,
          "phone": null,
          "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/c410ffab-f09c-4073-9866-f478f2f85534",
          "is_blocked": false,
          "id": "1363821172097024895",
          "identity": null,
          "date_joined": "2014-02-25T17:09:13",
          "about": " ",
          "display_name": "Daniel Luu",
          "first_name": "Daniel",
          "friend_status": "not_friend",
          "email": null
        },
        "note": "Kawi",
        "amount": 38,
        "action": "charge",
        "date_created": "2019-09-09T18:31:17",
        "date_reminded": null
      },
      "note": "Kawi",
      "audience": "private",
      "likes": {
        "count": 0,
        "data": []
      },
      "mentions": {
        "count": 0,
        "data": []
      },
      "date_created": "2019-09-09T18:31:17",
      "type": "payment",
      "id": "2829359006592532861",
      "authorization": null
    },
    {
      "date_updated": "2019-09-07T01:20:14",
      "transfer": null,
      "app": {
        "description": "Venmo for iPhone",
        "site_url": null,
        "image_url": "https://venmo.s3.amazonaws.com/oauth/no-image-100x100.png",
        "id": 1,
        "name": "Venmo for iPhone"
      },
      "comments": {
        "count": 0,
        "data": []
      },
      "payment": {
        "status": "settled",
        "id": "2827390518323839976",
        "date_authorized": null,
        "merchant_split_purchase": null,
        "date_completed": "2019-09-07T01:20:15",
        "target": {
          "merchant": null,
          "redeemable_target": null,
          "phone": null,
          "user": {
            "username": "Carah-Bui",
            "last_name": "Bui",
            "friends_count": null,
            "is_group": false,
            "is_active": true,
            "trust_request": null,
            "phone": null,
            "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/6e59856f-5975-48ba-9603-6de9530064ed",
            "is_blocked": false,
            "id": "1602440646361088271",
            "identity": null,
            "date_joined": "2015-01-20T22:43:31",
            "about": " ",
            "display_name": "Carah Bui",
            "first_name": "Carah",
            "friend_status": "friend",
            "email": null
          },
          "type": "user",
          "email": null
        },
        "audience": "public",
        "actor": {
          "username": "squishguin",
          "last_name": "Luu",
          "friends_count": null,
          "is_group": false,
          "is_active": true,
          "trust_request": null,
          "phone": null,
          "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/c410ffab-f09c-4073-9866-f478f2f85534",
          "is_blocked": false,
          "id": "1363821172097024895",
          "identity": null,
          "date_joined": "2014-02-25T17:09:13",
          "about": " ",
          "display_name": "Daniel Luu",
          "first_name": "Daniel",
          "friend_status": "not_friend",
          "email": null
        },
        "note": "Kawi",
        "amount": 58,
        "action": "charge",
        "date_created": "2019-09-07T01:20:14",
        "date_reminded": null
      },
      "note": "Kawi",
      "audience": "public",
      "likes": {
        "count": 0,
        "data": []
      },
      "mentions": {
        "count": 0,
        "data": []
      },
      "date_created": "2019-09-07T01:20:14",
      "type": "payment",
      "id": "2827390518885875884",
      "authorization": null
    },
    {
      "date_updated": "2019-09-05T17:15:06",
      "transfer": null,
      "app": {
        "description": "Venmo for iPhone",
        "site_url": null,
        "image_url": "https://venmo.s3.amazonaws.com/oauth/no-image-100x100.png",
        "id": 1,
        "name": "Venmo for iPhone"
      },
      "comments": {
        "count": 0,
        "data": []
      },
      "payment": {
        "status": "settled",
        "id": "2826421562100417507",
        "date_authorized": null,
        "merchant_split_purchase": null,
        "date_completed": "2019-09-05T17:15:06",
        "target": {
          "merchant": null,
          "redeemable_target": null,
          "phone": null,
          "user": {
            "username": "squishguin",
            "last_name": "Luu",
            "friends_count": null,
            "is_group": false,
            "is_active": true,
            "trust_request": null,
            "phone": null,
            "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/c410ffab-f09c-4073-9866-f478f2f85534",
            "is_blocked": false,
            "id": "1363821172097024895",
            "identity": null,
            "date_joined": "2014-02-25T17:09:13",
            "about": " ",
            "display_name": "Daniel Luu",
            "first_name": "Daniel",
            "friend_status": "not_friend",
            "email": null
          },
          "type": "user",
          "email": null
        },
        "audience": "public",
        "actor": {
          "username": "nguyenscott94",
          "last_name": "Nguyen",
          "friends_count": null,
          "is_group": false,
          "is_active": true,
          "trust_request": null,
          "phone": null,
          "profile_picture_url": "https://venmopics.appspot.com/u/v1/f/c3eb6951-0e4b-4358-9141-b35ce929e773",
          "is_blocked": false,
          "id": "2364921375358976030",
          "identity": null,
          "date_joined": "2017-12-07T23:16:37",
          "about": " ",
          "display_name": "Scott Nguyen",
          "first_name": "Scott",
          "friend_status": "friend",
          "email": null
        },
        "note": "Coachella",
        "amount": 468,
        "action": "pay",
        "date_created": "2019-09-05T17:15:06",
        "date_reminded": null
      },
      "note": "Coachella",
      "audience": "public",
      "likes": {
        "count": 0,
        "data": []
      },
      "mentions": {
        "count": 0,
        "data": []
      },
      "date_created": "2019-09-05T17:15:06",
      "type": "payment",
      "id": "2826421562419184344",
      "authorization": null
    },
    {
      "date_updated": "2019-09-04T20:27:35",
      "transfer": null,
      "app": {
        "description": "Venmo for Android",
        "site_url": null,
        "image_url": "https://venmo.s3.amazonaws.com/oauth/no-image-100x100.png",
        "id": 4,
        "name": "Venmo for Android"
      },
      "comments": {
        "count": 0,
        "data": []
      },
      "payment": {
        "status": "settled",
        "id": "2825793664305857216",
        "date_authorized": null,
        "merchant_split_purchase": null,
        "date_completed": "2019-09-04T20:27:35",
        "target": {
          "merchant": null,
          "redeemable_target": null,
          "phone": null,
          "user": {
            "username": "Sean-Wang-8",
            "last_name": "Wang",
            "friends_count": null,
            "is_group": false,
            "is_active": true,
            "trust_request": null,
            "phone": null,
            "profile_picture_url": "https://venmopics.appspot.com/u/v1/f/366a35d6-62d6-4293-be16-d66341c5afb0",
            "is_blocked": false,
            "id": "1434857565585408413",
            "identity": null,
            "date_joined": "2014-06-03T17:25:51",
            "about": " ",
            "display_name": "Sean Wang",
            "first_name": "Sean",
            "friend_status": "friend",
            "email": null
          },
          "type": "user",
          "email": null
        },
        "audience": "public",
        "actor": {
          "username": "squishguin",
          "last_name": "Luu",
          "friends_count": null,
          "is_group": false,
          "is_active": true,
          "trust_request": null,
          "phone": null,
          "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/c410ffab-f09c-4073-9866-f478f2f85534",
          "is_blocked": false,
          "id": "1363821172097024895",
          "identity": null,
          "date_joined": "2014-02-25T17:09:13",
          "about": " ",
          "display_name": "Daniel Luu",
          "first_name": "Daniel",
          "friend_status": "not_friend",
          "email": null
        },
        "note": "Robot shit",
        "amount": 20,
        "action": "charge",
        "date_created": "2019-09-04T20:27:35",
        "date_reminded": null
      },
      "note": "Robot shit",
      "audience": "public",
      "likes": {
        "count": 0,
        "data": []
      },
      "mentions": {
        "count": 0,
        "data": []
      },
      "date_created": "2019-09-04T20:27:35",
      "type": "payment",
      "id": "2825793664909836499",
      "authorization": null
    },
    {
      "date_updated": "2019-09-04T14:12:53",
      "transfer": null,
      "app": {
        "description": "Venmo for iPhone",
        "site_url": null,
        "image_url": "https://venmo.s3.amazonaws.com/oauth/no-image-100x100.png",
        "id": 1,
        "name": "Venmo for iPhone"
      },
      "comments": {
        "count": 0,
        "data": []
      },
      "payment": {
        "status": "settled",
        "id": "2825605078205857982",
        "date_authorized": null,
        "merchant_split_purchase": null,
        "date_completed": "2019-09-04T14:12:53",
        "target": {
          "merchant": null,
          "redeemable_target": null,
          "phone": null,
          "user": {
            "username": "squishguin",
            "last_name": "Luu",
            "friends_count": null,
            "is_group": false,
            "is_active": true,
            "trust_request": null,
            "phone": null,
            "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/c410ffab-f09c-4073-9866-f478f2f85534",
            "is_blocked": false,
            "id": "1363821172097024895",
            "identity": null,
            "date_joined": "2014-02-25T17:09:13",
            "about": " ",
            "display_name": "Daniel Luu",
            "first_name": "Daniel",
            "friend_status": "not_friend",
            "email": null
          },
          "type": "user",
          "email": null
        },
        "audience": "friends",
        "actor": {
          "username": "trannikki",
          "last_name": "Tran",
          "friends_count": null,
          "is_group": false,
          "is_active": true,
          "trust_request": null,
          "phone": null,
          "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/e168e5b3-ab2c-401d-94b3-3cdeea88a60e",
          "is_blocked": false,
          "id": "1662669811613696643",
          "identity": null,
          "date_joined": "2015-04-14T01:08:07",
          "about": " ",
          "display_name": "Nikki Tran",
          "first_name": "Nikki",
          "friend_status": "friend",
          "email": null
        },
        "note": "Coachella 🏠!!",
        "amount": 233.85,
        "action": "pay",
        "date_created": "2019-09-04T14:12:53",
        "date_reminded": null
      },
      "note": "Coachella 🏠!!",
      "audience": "friends",
      "likes": {
        "count": 0,
        "data": []
      },
      "mentions": {
        "count": 0,
        "data": []
      },
      "date_created": "2019-09-04T14:12:53",
      "type": "payment",
      "id": "2825605078667231519",
      "authorization": null
    },
    {
      "date_updated": "2019-09-03T16:21:55",
      "transfer": null,
      "app": {
        "description": "Venmo for iPhone",
        "site_url": null,
        "image_url": "https://venmo.s3.amazonaws.com/oauth/no-image-100x100.png",
        "id": 1,
        "name": "Venmo for iPhone"
      },
      "comments": {
        "count": 0,
        "data": []
      },
      "payment": {
        "status": "settled",
        "id": "2824945245811114658",
        "date_authorized": null,
        "merchant_split_purchase": null,
        "date_completed": "2019-09-03T16:21:55",
        "target": {
          "merchant": null,
          "redeemable_target": null,
          "phone": null,
          "user": {
            "username": "squishguin",
            "last_name": "Luu",
            "friends_count": null,
            "is_group": false,
            "is_active": true,
            "trust_request": null,
            "phone": null,
            "profile_picture_url": "https://venmopics.appspot.com/u/v1/s/c410ffab-f09c-4073-9866-f478f2f85534",
            "is_blocked": false,
            "id": "1363821172097024895",
            "identity": null,
            "date_joined": "2014-02-25T17:09:13",
            "about": " ",
            "display_name": "Daniel Luu",
            "first_name": "Daniel",
            "friend_status": "not_friend",
            "email": null
          },
          "type": "user",
          "email": null
        },
        "audience": "friends",
        "actor": {
          "username": "Emma-Kopf",
          "last_name": "Kopf",
          "friends_count": null,
          "is_group": false,
          "is_active": true,
          "trust_request": null,
          "phone": null,
          "profile_picture_url": "https://venmopics.appspot.com/u/v6/s/8f264661-c844-4720-999b-6450aa09ea0d",
          "is_blocked": false,
          "id": "1611888643276800337",
          "identity": null,
          "date_joined": "2015-02-02T23:35:00",
          "about": " ",
          "display_name": "Emma Kopf",
          "first_name": "Emma",
          "friend_status": "friend",
          "email": null
        },
        "note": "🍔🍟",
        "amount": 12,
        "action": "pay",
        "date_created": "2019-09-03T16:21:55",
        "date_reminded": null
      },
      "note": "🍔🍟",
      "audience": "friends",
      "likes": {
        "count": 0,
        "data": []
      },
      "mentions": {
        "count": 0,
        "data": []
      },
      "date_created": "2019-09-03T16:21:55",
      "type": "payment",
      "id": "2824945246188602041",
      "authorization": null
    }
  ]
}

const totalPrice = 3500

class App extends React.Component {
  state = {
    payments: [],
    page: 0,
    countdown: {},
    error: ''
  }

  componentWillMount = () => {
    this.startCountdown('Dec 7, 2019 22:00:00')
    // this.setState({
    //   payments: fakeData.data.filter(p =>
    //     p.payment && p.payment.target.user.username === 'squishguin'
    //   )
    // })
    fetch('/api/payments')
      .then(res => res.json()).then(res => {
        if (res.error)
          return this.setState({ error: res.error })
        this.setState({
          payments: res.data.filter(p =>
            p.payment && p.payment.target.user.username === 'squishguin' && p.payment.note.toLowerCase().indexOf('25yve') !== -1
          )
        })
      })
  }

  startCountdown = (date) => {
    let countDownDate = new Date(date).getTime()
    let x = setInterval(() => {
      getTime()
    }, 1000)

    let getTime = () => {
      // Get today's date and time
      let now = new Date().getTime()
      let distance = countDownDate - now
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // let text = `${days}d ${hours}h ${minutes}m ${seconds}s`
      let text = {
        days,
        hours,
        minutes,
        seconds,
      }

      if (distance < 0) {
        clearInterval(x)
        text = 'You missed it'
      }
      this.setState({ countdown: text })
    }
    getTime()
  }

  getPage = () => {
    let { payments, page } = this.state
    let pages = []
    let newPage = page * 6
    for (let i = newPage; i < (newPage + 5); i++) {
      if (payments[i]) {
        let payment = payments[i].payment
        let user = payment.actor
        pages.push(<div className='payment' key={i}>
          <img style={{
            width: 48,
            height: 48,
          }} src={user.profile_picture_url} />
          <div className='payment-info'>
            {`${user.first_name} ${user.last_name}`}
          </div>
        </div>)
      }
    }
    return pages
  }

  getGoals = (total) => {
    let goals = []
    let currTotal = 300
    let marks = [
      {
        amount: 200,
        icon: 'https://static.thenounproject.com/png/86908-200.png',
        title: 'Pyñata',
      },
      {
        amount: 400,
        icon: 'https://static.thenounproject.com/png/1590652-200.png',
        title: 'Fyte Night',
      },
      {
        amount: 400,
        icon: 'https://static.thenounproject.com/png/1092336-200.png',
        title: 'Lyghts Sound',
      },
      {
        amount: 500,
        icon: 'https://static.thenounproject.com/png/1792741-200.png',
        title: 'Lyquor',
      },
      {
        amount: 1300,
        icon: 'https://static.thenounproject.com/png/79187-200.png',
        title: 'Venue',
      },
    ]
    marks.forEach(goal => {
      goals.push(<div className='goal-mark' style={{
        bottom: currTotal / totalPrice * 100 + '%'
      }}>
        <img className='goal-icon' src={goal.icon} />
        <div className='goal-mark-title'>
          {goal.title}
          <div className='goal-amount' style={{
            color: total > currTotal ? '#34ca96' : 'black'
          }}>${goal.amount}</div>
        </div>
      </div>)
      currTotal += 600
    })
    return goals
  }

  render = () => {
    let { countdown, payments, page, error } = this.state
    let {
      days,
      hours,
      minutes,
      seconds,
    } = countdown

    let total = 0
    payments.forEach(p => total += p.payment.amount)

    return (
      <div className='App' >
        <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
          <div className='section'>
            <div className='header-container'>
              <div className='title'>25YVE</div>
              <div className='countdown'>
                <div className='time-container'>
                  <div className='time-value'>{('0' + days).slice(-2)}</div>
                  <div className='time-unit'>DAYS</div>
                </div>
                <div className='time-container'>
                  <div className='time-value'>{('0' + hours).slice(-2)}</div>
                  <div className='time-unit'>HOURS</div>
                </div>
                <div className='time-container'>
                  <div className='time-value'>{('0' + minutes).slice(-2)}</div>
                  <div className='time-unit'>MINUTES</div>
                </div>
                <div className='time-container'>
                  <div className='time-value'>{('0' + seconds).slice(-2)}</div>
                  <div className='time-unit'>SECONDS</div>
                </div>
              </div>
              <div style={{
                color: 'white',
                position: 'absolute',
                width: 320,
                textAlign: 'center',
                bottom: 20,
              }}>&#11015; help</div>
            </div>
          </div>
          <div className='section'>
            <div className='payments-center'>
              <div className='payments'>
                <div style={{ color: 'white' }}>FUNDING</div>
                <div className='goal-title'>Daniel's 25th Birthday</div>
                <div className='goal-subtitle'>
                  All the goals will definitely be there!<br />
                  But if you want to help cover cost you'd be a real one.<br />
                  Venmo <b>@squishguin</b> with the note "25YVE" to donate
              </div>
                {error && <div className='payments-title'>{error}</div>}
                {!error && <div className='payments-title'>{payments.length} Real Ones</div>}
                {this.getPage()}
                {!error && <div className='btn-bar'>
                  <button className='page-btn' disabled={page === 0} onClick={() => {
                    if (page > 0)
                      this.setState({ page: page - 1 })
                  }}>{'<'}</button>
                  {page + 1}
                  <button className='page-btn' disabled={(page + 1) > (payments.length / 6)} onClick={() => {
                    this.setState({ page: page + 1 })
                  }}>></button>
                </div>}
              </div>
            </div>
            <div style={{
              color: 'white',
              position: 'absolute',
              width: 320,
              textAlign: 'center',
              bottom: 20,
            }}>&#11015; goals</div>
          </div>
          <div className='section'>
            <div className='goal'>
              <div className='progress-bar'>
                <div className='progress-bar-inner' style={{
                  height: (total >= totalPrice ? totalPrice : total) / totalPrice * 100 + '%'
                }}></div>
              </div>
              <div className='marks'>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: 'white' }}>Total Raised</div>
                  <div className='goal-total'>${total.toLocaleString()}</div>
                </div>
                {this.getGoals(total)}
              </div>
            </div>
            <div style={{
              color: 'white',
              position: 'absolute',
              width: 320,
              textAlign: 'center',
              bottom: 20,
            }}>&#11015; bottles</div>
          </div>
          <div className='section'>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <div className='bottles-des'>
                <div className='goal-title'>Tables</div>
                <div className='goal-subtitle'>
                  There will be a limited amount of tables available. Buying a table is just paying for 4 handles! You'll get bottle service, bottle girls (or guys whatever you want), a sign with your name on it, a DJ shoutout, and your own sitting area. Please message me about table details.
                </div>
                <div className='handle-title'>Handle List</div>
                <div className='goal-subtitle'>Handles will be the same price as they are at the liquor store. If you'd like to buy a bottle not on this list please message me.</div>
                <div>
                  <table>
                    <tbody>
                      {
                        [
                          { name: 'Jameson', price: 60 },
                          { name: 'Ketel One', price: 60 },
                          { name: 'Ciroc (Any flavor)', price: 60 },
                          { name: 'Patron', price: 100 },
                        ].map(bottle => {
                          return <tr style={{
                            color: 'white',
                          }}>
                            <td style={{
                              fontWeight: 'bold',
                            }}>{bottle.name}</td>
                            <td>${bottle.price.toLocaleString()}</td>
                          </tr>
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div style={{
              color: 'white',
              position: 'absolute',
              width: 320,
              textAlign: 'center',
              bottom: 20,
            }}>&#11015; details</div>
          </div>
          <div className='section'>
            <div className='bottles-des' style={{
              width: '100%',
            }}>
              <div className='goal-title'>Details</div>
              <div className='goal-subtitle'>
                December 7th, 2019 @ 10 PM to 2 AM
              </div>
              <div style={{
                position: 'relative',
                textAlign: 'right',
                height: 500,
                width: '100%',
              }}>
                <div style={{
                  overflow: 'hidden',
                  background: 'none!important',
                  height: 500,
                  width: '100%',
                }}
                >
                  <iframe
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=330%20Pennsylvania%20Ave%20SE%2C%20Washington%2C%20DC%2020003&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"></iframe>
                  <a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/"></a>
                </div>
              </div>
            </div>
            <div style={{
              color: 'white',
              position: 'absolute',
              width: 320,
              textAlign: 'center',
              bottom: 20,
            }}>&#11015; entertainment</div>
          </div>
          <div className='section'>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
              maxWidth: 600,
            }}>
              <div className='goal-title' style={{
                width: '100%',
                textAlign: 'left',
              }}>DJ Knom</div>
              <div style={{
                marginTop: 20,
                width: '100%',
                height: 500,
                backgroundImage: `url(${nam})`,
                backgroundSize: 'cover',
              }}>
              </div>
            </div>
          </div>
        </ReactPageScroller>
      </div>
    )
  }
}

export default App
