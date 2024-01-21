
const Product = () => {

    return (
        <section
            id="section"
            className="max-container flex justify-between items-center max-lg:flex-col gap-10"
        >
            <div className="relative xl:w-3/4 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <h5 id="product" className="mt-10 mx-auto text-4xl">
                    <span className="text-red-600 inline-block mt-1">VirtualYou</span>
                </h5>
                <p className="mx-auto font-montserrat text-slate-gray text-lg leading-8 mt-12 mb-2 sm:max-w-lg">
                    VirtualYou is an online service that helps users organize important life data and information
                    that might be needed when in town, traveling, or even in an emergency or death. The goal of the
                    service is to assist in the creation of this data and also to centralize the data within one
                    application or online service. The service is designed to be user-friendly and easy to navigate,
                    with a simple interface that allows users to input and maintain their data with ease.
                </p>
                <p className="mx-auto font-montserrat text-slate-gray text-lg leading-8 mt-2 mb-2 sm:max-w-lg">
                    One of the key features of VirtualYou is the ability to invite someone to help with input,
                    maintenance, and data capture. This feature is especially useful for those who may need assistance
                    with organizing their data, such as older adults or those with limited mobility. The service also
                    allows the invite of a second person to have just read-only access and be able to look in on the
                    user periodically.
                </p>
                <p className="mx-auto font-montserrat text-slate-gray text-lg leading-8 mt-2 mb-2 sm:max-w-lg">
                    VirtualYou is designed to be accessible to any adult with a connected device, regardless of age
                    or technical expertise. The service is marketed towards people 50 and older, but it is of benefit
                    to anyone who wants to keep their important life data organized and easily accessible.
                </p>
                <p className="mx-auto font-montserrat text-slate-gray text-lg leading-8 mt-2 mb-2 sm:max-w-lg">
                    With VirtualYou, users can rest assured that their important life data is organized and easily
                    accessible, no matter where they are or what situation they may find themselves in.
                </p>
            </div>

        </section>
    );
};

export default Product;
