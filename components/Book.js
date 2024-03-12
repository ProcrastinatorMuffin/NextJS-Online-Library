import Link from 'next/link';

const Book = ({ book }) => {
    return (
        // Container for book details
        <div className="text-center flex flex-col items-center bg-white md:flex-row md:max-w-3xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
            {/* Book image */}
            <img 
                className="transform hover:scale-110 rounded-t-lg md:h-auto md:w-48 sm:h-auto sm:w-48"
                src={book.img}
                alt="Image could not load"
            />
            {/* Book details */}
            <div className="flex flex-col justify-space-around items-center p-4 cursor-pointer">
                {/* Book title */}
                <Link href={`/book/${book.title}`} className='no-underline hover:underline hover:text-blue-800 dark:hover:text-blue-400'>
                    {book.title}
                </Link>
                {/* Book author */}
                <div style={{paddingTop: '1rem'}}>{book.author}</div>
                {/* Book overview */}
                <div className="mt-2">{book.overview}</div>
                {/* Book price */}
                <div className="mt-3" style={{paddingBottom: '1rem'}}>{book.free ? "Free" : "Paid"}</div>
                {/* Visit website button */}
                <button
                    className="w-38 mt-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        window.open(book.url);
                    }}
                >
                    Visit Website
                </button>
            </div>
        </div>
    );
};

export default Book;