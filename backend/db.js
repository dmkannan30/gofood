const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoURL = 'mongodb+srv://gofood:1234@cluster0.cmizw7g.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("----", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
                // if (err) console.log(err);
                // else {
                //     global.food_items = data;
                //     console.log(global.food_items)
                // }
            })
        }
    });
}

module.exports = mongoDB();