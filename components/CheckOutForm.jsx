import { Modal, Form, Input, message } from "antd";


const CheckoutForm = ({ open, onClose }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Order Data:", values);
        message.success("🎉 Order Confirmed!");
        onClose();
        form.resetFields();
    };

    return (
        <Modal
            title={null} // ❌ title hata diya clean UI k liye
            open={open}
            onCancel={onClose}
            footer={null}
            centered // ✅ center modal
            maskClosable={false} // backdrop click par close na ho
            className="custom-modal"
        >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <h2 className="text-2xl font-bold text-center mb-4">
                    Checkout Form
                </h2>

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
                    rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Enter a valid email" },
                    ]}
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
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded"
                    >
                        Confirm Order
                    </button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CheckoutForm;
