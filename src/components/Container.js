
const Container = ({className, ...props}) => {
    return <div className={"col-12 col-sm-11 col-md-11 col-lg-11 col-xl-9 mx-auto px-1 px-sm-0 " + className}>{props.children}</div>;
}

export default Container