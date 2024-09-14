const MarqueeComponents = ({ target, title }) => {
    return (
        <section className="marquee">
            <section className="content" ref={target}>
                {Array(3).fill(0).map((e, i) => 
                    <h5 key={i} aria-label="hidden">{ title }</h5>
                )}
            </section>
            <section className="content" ref={target}>
                {Array(3).fill(0).map((e, i) => 
                    <h5 key={i} aria-label="hidden">{ title }</h5>
                )}
            </section>
        </section>
    )
}

export default MarqueeComponents