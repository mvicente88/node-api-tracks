const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'
const getItems = async(req, res) => {
    try {
        const listAll = [{
                "_id": 1,
                "name": "This Love",
                "album": "Vulgar Display of Power",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/PanteraVulgarDisplayofPower.jpg/220px-PanteraVulgarDisplayofPower.jpg",
                "artist": {
                    "name": "Pantera",
                    "nickname": "Pantera",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track.mp3`
            },
            {
                "_id": 2,
                "name": "Plush",
                "album": "Core",
                "cover": "https://upload.wikimedia.org/wikipedia/en/1/19/Stonetemplepilotscore.jpeg",
                "artist": {
                    "name": "Stone Temple Pilots",
                    "nickname": "Stone Temple Pilots",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-1.mp3`
            },
            {
                "_id": 3,
                "name": "Personal Jesus",
                "album": "Violator",
                "cover": "https://classicalbumsundays.com/wp-content/uploads/2019/01/CS627679-01A-BIG.jpg",
                "artist": {
                    "name": "Depeche Mode",
                    "nickname": "Depeche Mode",
                    "nationality": "UK"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-2.mp3`
            },
            {
                "_id": 4,
                "name": "Eyeless",
                "album": "Slipknot",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Slipknot_-_Slipknot2.jpg/220px-Slipknot_-_Slipknot2.jpg",
                "artist": {
                    "name": "Slipknot",
                    "nickname": "Slipknot",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-4.mp3`
            },
            {
                "_id": 5,
                "name": "Sweet Leaf",
                "album": "Master of Reality",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Bsmor.jpg/220px-Bsmor.jpg",
                "artist": {
                    "name": "Black Sabbath",
                    "nickname": "Black Sabbath",
                    "nationality": "UK"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-3.mp3`
            },
            {
                "_id": 6,
                "name": "Voice Of The Soul",
                "album": "The Sounds of Perseverance",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/DeathSOP-1998.jpg/220px-DeathSOP-1998.jpg",
                "artist": {
                    "name": "Death",
                    "nickname": "Death",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-5.mp3`
            },
            {
                "_id": 7,
                "name": "Them Bones",
                "album": "Dirt",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg/220px-Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg",
                "artist": {
                    "name": "Alice in Chains",
                    "nickname": "Alice in Chains",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-6.mp3`
            },
            {
                "_id": 8,
                "name": "Rollin’ (Air Raid Vehicle)",
                "album": "Chocolate Starfish and the Hotdog Flavored Water",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Limp_Bizkit_Chocolate_Starfish_and_the_Hotdog_Flavored_Water.jpg/220px-Limp_Bizkit_Chocolate_Starfish_and_the_Hotdog_Flavored_Water.jpg",
                "artist": {
                    "name": "Limp Bizkit",
                    "nickname": "Limp Bizkit",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-7.mp3`
            },
            {
                "_id": 9,
                "name": "Walking in my shoes",
                "album": "Songs of Faith and Devotion",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Depeche_Mode_-_Songs_of_Faith_and_Devotion.png/220px-Depeche_Mode_-_Songs_of_Faith_and_Devotion.png",
                "artist": {
                    "name": "Depeche Mode",
                    "nickname": "Depeche Mode",
                    "nationality": "UK"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-8.mp3`
            },
            {
                "_id": 10,
                "name": "Snuff",
                "album": "All Hope Is Gone",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/All_Hope_is_Gone_%28original%29.jpg/220px-All_Hope_is_Gone_%28original%29.jpg",
                "artist": {
                    "name": "Slipknot",
                    "nickname": "Slipknot",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-9.mp3`
            }
        ]
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }