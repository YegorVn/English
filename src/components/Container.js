
const Container = ({className, ...props}) => {
    return <div style={props.style} className={className + " col-12 col-sm-11 col-md-11 col-lg-11 col-xl-8 mx-auto px-1 px-sm-0"}>{props.children}</div>;
}

export default Container