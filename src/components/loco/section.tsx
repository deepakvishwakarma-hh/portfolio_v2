const Section: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({ children, ...props }) => {
    return (
        <section data-scroll-section {...props} >{children}</section>
    )
}

export default Section