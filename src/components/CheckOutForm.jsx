import { Modal, Form, Input, message } from "antd";
import { useState } from "react";

const CheckoutForm = ({ open, onClose, cartItems = [], }) => {
    const [cartCount, setCartCount] = useState(0);
    const [items, setItems] = useState(
        cartItems.map((item) => ({ ...item, quantity: item.quantity || 3 })) // default 3
    );

    const [form] = Form.useForm();


    const handleSubmit = (values) => {
        console.log("Order Data:", values);
        setCartCount(cartCount + 1);

        // ✅ Apna WhatsApp number (country code ke sath, + bina)
        const phoneNumber = "+923190266227";

        // 🛒 Example product (aap backend/cart se dynamic bhi bhej sakte ho)
        const product = {
            name: "Boxer",
            price: 500,
            quantity: values.quantity || 3, // form se quantity le rahe hain
        };



        const totalPrice = product.price * product.quantity;

        // ✅ WhatsApp Message
        const whatsappMessage = `
📦 New Order Received!
--------------------------
👤 Name: ${values.name}
📞 Phone: ${values.phone}
📧 Email: ${values.email || "N/A"}
🏠 Address: ${values.address}

🛒 Product: ${product.name}
🔢 Quantity: ${product.quantity - 2}
💰 Total: ${totalPrice * (product.quantity - 2)} PKR


✅ Please confirm the order.
`;

        // ✅ WhatsApp link
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        // ✅ Redirect to WhatsApp
        window.open(whatsappURL, "_blank");

        message.success("🎉 Order Confirmed! Redirecting to WhatsApp...");
        onClose();
        form.resetFields();
    };








    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    const updateQuantity = (index, type) => {
        const updated = [...items];
        let currentQty = updated[index].quantity;

        if (type === "increase") {
            currentQty += product.quantity; // +3 karega
        } else if (type === "decrease") {
            currentQty = currentQty - 1 < 1 ? 1 : currentQty - 1; // kam se kam 3
        }

        updated[index].quantity = currentQty;
        setItems(updated);
    };






    if (!open) return null;

    return (
        <>
            <Modal
                title={null}
                open={open}
                onCancel={onClose}
                footer={null}
                centered
                maskClosable={false}
                className="custom-modal"
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center mb-4">Checkout Form</h2>

                    <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[{ required: true, message: "Please enter your name" }]}
                    >
                        <Input placeholder="Enter your full name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email Address"
                        rules={[{ type: "email", message: "Enter a valid email" }]}
                    >
                        <Input placeholder="Enter your email" />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: "Please enter your phone number" }]}
                    >
                        <Input placeholder="03XX-XXXXXXX" />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="Delivery Address"
                        rules={[{ required: true, message: "Please enter your address" }]}
                    >
                        <Input.TextArea rows={3} placeholder="Enter your address" />
                    </Form.Item>


                    <Form.Item>
                        <button
                            onClick={handleAddToCart}
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded"
                        >
                            Confirm Order
                        </button >
                    </Form.Item >
                </Form >
            </Modal >
        </>
    );
};

export default CheckoutForm;
