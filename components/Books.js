import Book from './Book';

// Component to display a list of books based on search criteria
const Books = ({ data, searchString }) => {
    // Function to check if a book title or author matches the search string
    const checkCondition = (elem) => {
        return elem.toLowerCase().includes(searchString.toLowerCase());
    }

    return (
        <section className="grid justify-items-center gap-4">
        {
            // Map through the data array and render Book component for matching books
            data.map((book, index) => {
                if (checkCondition(book.title) || checkCondition(book.author)) {
                    return (
                        <div key={index} className="border border-gray-100 mt-1">
                            <Book book={book} />
                        </div>
                    )
                }
                else return <></>
            })
        }
        </section>
    )
}

export default Books;