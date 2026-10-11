const Contact = () => {
    return (
        <div className="text-center gap-y-6 h-screen">
            <div className="m-4 p-4 w-auto h-auto">
                <h1 className="text-3xl font-bold font-sans">Contact Us</h1>
            </div>
            <div className="text-center font-black font-sans">
                <form className="w-1/2 m-auto p-4 text-black flex flex-col border border-black rounded-lg">
                    <label htmlFor="name" className="text-xl font-bold text-black text-left">Name:</label>
                    <input type="text" className="border border-black p-2 my-2 rounded-lg" placeholder="Name" />
                    <label htmlFor="email" className="text-xl , font-bold text-black text-left">Email:</label>
                    <input type="text" className="border border-black p-2 my-2 rounded-lg" placeholder="Email" />
                    <label htmlFor="message" className="text-xl , font-bold text-black text-left">Message:</label>
                    <textarea className="border border-black p-2 my-2 rounded-lg h-30" placeholder="Message" />
                    <button type="submit" className="border border-black p-2 my-2 rounded-lg bg-gray-200 cursor-pointer max-w-3xs">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;