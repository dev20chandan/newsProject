import Razorpay from "razorpay"
var instance = new Razorpay({
    key_id: 'rzp_test_QypuRVCy3b0nhq',
    key_secret: 't141CNSdS8aczZkVzaU1F77X',
});

export const order = async (req, res) => {
    try {

       const data = await instance.orders.create({
            amount: 50000,
            currency: "INR",
            receipt: "receipt#1",
            notes: {
                key1: "value3",
                key2: "value2"
            }
        })
        // console.log("order")
        res.json({"order":data})
    } catch (error) {
        console.log(error, '==error')
    }
}