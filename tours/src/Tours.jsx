import Tour from "./Tour"

const Tours = ({ tours, refetch }) => {
    if (tours.length === 0) {
        return (
            <div className="title">
                <h2>no tours left</h2>
                <button className="btn" onClick={refetch}>refresh</button>
            </div>
        )
    } else {
        return (
            <section>
                <div className="title">
                    <h2>our tours</h2>
                </div>
                <div className="tours">
                    {tours.map((tour) => {
                        return (
                            <Tour key={tour.id} {...tour} />
                        )
                    })}
                </div>
            </section>
        )
    }
}
export default Tours