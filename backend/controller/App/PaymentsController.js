import crypto from "crypto"
import Razorpay from "razorpay"
var instance = new Razorpay({
    key_id: 'rzp_test_QypuRVCy3b0nhq',
    key_secret: 't141CNSdS8aczZkVzaU1F77X',
});

export const order = async (req, res) => {
    try {
        let amount = req.body.amount * 100
        const min = 1000000;
        const max = 9999999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        const data = await instance.orders.create({
            amount: amount,
            currency: req.body.currency,
            receipt: `INV_${randomNumber}`,
            notes: {
                key1: "value3",
                key2: "value2"
            }
        })
        // console.log("order")
        res.json(data)
    } catch (error) {
        console.log(error, '==error')
    }
}

export const orderValidate = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;
        // const payment = await instance.payments.fetch(razorpay_payment_id);
        const sha = crypto.createHmac("sha256", "t141CNSdS8aczZkVzaU1F77X");
        sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const digest = sha.digest("hex");
        if (digest !== razorpay_signature) {
            return res.status(400).json({ msg: "Transaction is not legit!" });
        }
        res.json({
            msg: "success",
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
        });
    } catch (error) {
        console.log(error, '==error')
    }
}