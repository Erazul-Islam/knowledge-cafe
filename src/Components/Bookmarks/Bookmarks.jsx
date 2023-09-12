import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h1>
                    <h3 className="text-4xl">Reading Time: {readingTime}</h3>
                </h1>
            </div>
            <h2>Bookmarked: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark) => <Bookmark key={bookmark} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;