
type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const Modal = ({ isOpen, onClose }: Props) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center ${
                isOpen ? "" : "hidden"
            }`}
        >
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10" />

            {/* Modal */}
            <div className="bg-white rounded-lg p-8 z-50">
                <h2 className="text-lg font-medium mb-4">Thank You</h2>
                <p className="mb-4">You are now subscribed to receive all newsletters.</p>
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    onClick={onClose}
                >Close</button>
            </div>
        </div>
    );
};

export default Modal;
